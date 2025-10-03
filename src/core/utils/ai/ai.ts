import { Config } from '@config';
import { HumanMessage, SystemMessage } from '@langchain/core/messages';
import { ChatPromptTemplate, MessagesPlaceholder } from '@langchain/core/prompts';
import { ChatOpenAI } from '@langchain/openai';
import { AgentExecutor, createOpenAIFunctionsAgent, createToolCallingAgent } from 'langchain/agents';
import { StructuredTool, Tool } from 'langchain/tools';
import { defer, from, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { BufferMemory, BufferWindowMemory } from 'langchain/memory';
import { pull } from 'langchain/hub';
import { SettingsConfig } from '../config';

export interface PromptExecutionOptions {
  prompt: string;
  model?: string;
  temperature?: number;
  maxTokens?: number;
  instructions?: string;
  context?: string;
  examples?: string;
  useChainOfThought?: boolean;
  useFewShot?: boolean;
  useSelfReflection?: boolean;
  outputFormat?: string;
  guardrails?: string[];
  selectedRole?: any;
}

export interface PromptExecutionResponse {
  output: string;
  usage?: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  };
  model: string;
  timestamp: number;
}
export interface AIOptions {
  instructions: string;
  model?: string;
  tools?: StructuredTool[];
  temperature?: number;
}
export class AI {
  private options: AIOptions;

  public constructor(options: AIOptions) {
    this.options = options;
  }

  public static make(options: AIOptions) {
    return new AI(options);
  }

  public ask(input: string, withHistory = true) {
    return this.obs<string>(this.run(input, withHistory));
  }

  private async run(input: string, withHistory = true) {
    const model = new ChatOpenAI({
      temperature: this.options.temperature,
      modelName: this.options.model || 'gpt-4o-mini',
      openAIApiKey: SettingsConfig.current().authToken,
    });

    if ((this.options.tools || []).length > 0) {
      // const prompt = ChatPromptTemplate.fromMessages([
      //   ['system', this.options.instructions.replace(/[{]/g, '{{').replace(/[}]/g, '}}') + '\n You have access to the following tools:\n\n{tools}'],
      //   ['human', '{input}'],
      //   new MessagesPlaceholder('agent_scratchpad'),
      // ]);

      const prompt = await pull<ChatPromptTemplate>('hwchase17/openai-functions-agent');

      const agent = await createToolCallingAgent({
        llm: model,
        tools: this.options.tools || [],
        prompt,
      });

      const memory = new BufferMemory({
        memoryKey: 'chat_history',
        inputKey: 'input',
        outputKey: 'output',
      });

      const executor = new AgentExecutor({
        agent,
        tools: this.options.tools || [],
        memory: withHistory ? memory : undefined,
      });
      try {
        const result = await executor.invoke({ input, system: this.options.instructions.replace(/[{]/g, '{{').replace(/[}]/g, '}}') });
        return result.output as string;
      } catch (e) {
        console.log('error', e);
        return 'e.message';
      }
    } else {
      const messages = [new SystemMessage(this.options.instructions), new HumanMessage(input)];
      const result = await model.invoke(messages);
      return result.text;
    }
  }

  private obs<T>(promise: Promise<T>): Observable<T> {
    return from(defer(() => promise));
  }

  public static executePrompt(options: PromptExecutionOptions): Observable<PromptExecutionResponse> {
    // Build the final prompt with all enhancements
    let finalPrompt = '';

    // Add role-based system message if role is selected
    if (options.selectedRole) {
      finalPrompt += `You are a ${options.selectedRole.name}. `;
    }

    // Add instructions if provided
    if (options.instructions) {
      finalPrompt += `${options.instructions}\n\n`;
    }

    // Add context if provided
    if (options.context) {
      finalPrompt += `Context: ${options.context}\n\n`;
    }

    // Add examples for few-shot prompting
    if (options.useFewShot && options.examples) {
      finalPrompt += `Examples:\n${options.examples}\n\n`;
    }

    // Add chain of thought prefix
    if (options.useChainOfThought) {
      finalPrompt += "Let's think about this step by step:\n";
    }

    // Add the main prompt
    finalPrompt += options.prompt;

    // Add output format requirements
    if (options.outputFormat && options.outputFormat !== 'text') {
      finalPrompt += `\n\nPlease format your response as ${options.outputFormat.toUpperCase()}.`;
    }

    // Add guardrails
    if (options.guardrails && options.guardrails.length > 0) {
      finalPrompt += `\n\nImportant constraints: ${options.guardrails.join(', ')}`;
    }

    // Add self-reflection prompt
    if (options.useSelfReflection) {
      finalPrompt += '\n\nAfter providing your response, please review it and suggest any improvements.';
    }

    const ai = AI.make({
      instructions: finalPrompt,
      model: options.model || 'gpt-4o-mini',
      temperature: options.temperature || 0.7,
    });

    return ai.ask('Please provide your response based on the above prompt.').pipe(
      map(output => ({
        output: output || 'No response generated',
        model: options.model || 'gpt-4o-mini',
        timestamp: Date.now(),
        usage: {
          promptTokens: Math.floor(finalPrompt.length / 4), // Rough estimate
          completionTokens: Math.floor((output || '').length / 4), // Rough estimate
          totalTokens: Math.floor((finalPrompt.length + (output || '').length) / 4),
        },
      })),
    );
  }
}
