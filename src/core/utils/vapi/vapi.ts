import { AgentResponse } from '@business/entities/agents';
import Vapi from '@vapi-ai/web';
import { BehaviorSubject } from 'rxjs';
import { R } from '../r';
import { CreateFunctionToolDTO } from '@vapi-ai/web/dist/api';
import { LoadingState } from '../repository/loading_state';
import { TenantConfig } from '../config';
import { FlashMessage } from '@core/components/FlashMessage';
import { Config } from '@config';
import { AgentsAPI } from '@business/api/agents_api';
import { MyAgentsAPI } from '@business/api/my_agents_api';
import { AdminAgentsResponse } from '@business/entities/agents/AdminAgentsResponse';
export class VAPI {
  private client: Vapi;

  inCall$ = new BehaviorSubject(false);
  loading = new LoadingState({ loading: false });

  public constructor() {
    this.client = new Vapi('1642c81e-818b-43d4-9119-e23e0769f23f');
    // this.client = new Vapi('fb5319a9-e237-4b16-b5b7-1bb97620b555'); //arham
    this.client.on('call-start', () => {
      this.loading.set({ loaded: true, loading: false });
      this.inCall$.next(true);
    });

    this.client.on('call-end', () => {
      console.log('call-end');
      this.inCall$.next(false);
    });
  }

  public async start(agent: AgentResponse | AdminAgentsResponse, selectedAgentId: string, agentToOnboardId?: string) {
    const adminAgent = R.get(agent, 'adminAgent', null);
    const isAdminAgent = agentToOnboardId && !R.isNull(agentToOnboardId);
    const payload = isAdminAgent
      ? await AgentsAPI.vapiPayload(selectedAgentId, agentToOnboardId).toPromise()
      : await MyAgentsAPI.vapiPayload(selectedAgentId).toPromise();
    this.loading.set({ loaded: false, loading: true });
    try {
      const call = await this.client.start(payload);
    } catch (e: any) {
      FlashMessage.error('Error starting call', e.message);
    }
    const adminAgentToolDetails = R.get(adminAgent, 'toolDetails', []) as any[];
    const actions = R.flatMap(adminAgentToolDetails, t => t.actions.map(a => ({ ...a, toolId: t.id })));
    const tools: CreateFunctionToolDTO[] = actions.map(action => ({
      type: 'function',
      server: {
        // url: `${Config.API_URL_NAKED}/${TenantConfig.current().appId}/agent/engine/vapi/${action.toolId}/${agent.id}`,
        url: `${Config.IS_DEV ? 'https://s98.ngrok.io/api' : Config.API_URL_NAKED}/${TenantConfig.current().appId}/agent/engine/vapi/${action.toolId}/${selectedAgentId}`,
        timeoutSeconds: 20,
      },
      function: {
        name: action.methodName,
        description: action.description,
        strict: true,
        parameters: {
          type: 'object',
          properties: {
            inputs: {
              type: 'object',
              properties: action.inputs.reduce(
                (acc, input) => {
                  acc[input.name] = {
                    type: input.type,
                    description: input.description,
                  };
                  return acc;
                },
                {} as Record<string, any>,
              ),
            },
          },
          required: action.inputs.filter(input => input.required).map(input => input.name),
        },
      },
    }));

    this.loading.set({ loaded: false, loading: true });
    try {
      const call = await this.client.start({
        firstMessage: 'Hello, how can I help you?',
        voice: {
          model: 'sonic-2',
          voiceId: 'f9836c6e-a0bd-460e-9d3c-f7299fa60f94',
          provider: 'cartesia',
          experimentalControls: {
            speed: 'normal',
          },
        },
        model: {
          provider: 'openai',
          model: 'gpt-4o-mini',
          temperature: 0.5,
          tools,
          messages: [
            {
              role: 'system',
              content:
                'This is a blank template with minimal defaults, you can change the model, temperature, and messages. The list id is 901800535857',
            },
          ],
        },
        endCallMessage: 'Goodbye.',
        serverMessages: [],
        clientMessages: [],
      });
    } catch (e: any) {
      FlashMessage.error('Error starting call', e.message);
    }
  }

  public async stop() {
    this.loading.set({ loaded: true, loading: false });
    return this.client.stop();
  }
}
