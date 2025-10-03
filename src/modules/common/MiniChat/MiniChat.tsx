import React, { memo, useCallback, useMemo } from 'react';
import './index.scss';
import classNames from 'classnames';
import { ChatWindow } from './ChatWindow';
import { ConfigProvider, theme } from 'antd';
import { toMoment } from '@core/utils/time';
import { R } from '@core/utils/r';
import { AI } from '@core/utils/ai';
import { tap } from 'rxjs';

export interface MiniChatMessage {
  id: string;
  text: string;
  timestamp: number;
  sender: 'user' | 'bot';
}
export interface MiniChatProps {
  title: string;
  tools?: any[];
  instructions: string;
}

export const MiniChat = memo((props: MiniChatProps) => {
  const { title, instructions, tools } = props;
  const [isOpen, setIsOpen] = React.useState(false);
  const classList = ['sc-launcher', isOpen ? 'opened' : ''];
  const { defaultAlgorithm } = theme;
  const [messages, setMessages] = React.useState<MiniChatMessage[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const client = useMemo(() => {
    return AI.make({
      instructions,
      tools,
      model: 'gpt-4o',
    });
  }, [instructions, tools]);

  const onMessage = useCallback(
    (message: string) => {
      const newMessage: MiniChatMessage = {
        id: Math.random().toString(36).substring(2, 15),
        text: message,
        timestamp: toMoment().unix(),
        sender: 'user',
      };
      setMessages(prevMessages => [...prevMessages, newMessage]);
      setIsLoading(true);
      client
        .ask(message)
        .pipe(
          tap(m => {
            const botMessage: MiniChatMessage = {
              id: Math.random().toString(36).substring(2, 15),
              text: m,
              timestamp: toMoment().unix(),
              sender: 'bot',
            };
            setMessages(prevMessages => [...prevMessages, botMessage]);
            setIsLoading(false);
          }),
        )
        .subscribe();
    },
    [client],
  );

  return (
    <div id="sc-launcher">
      <div className={classNames('sc-launcher', { opened: isOpen })} onClick={() => setIsOpen(!isOpen)}>
        <i className="sc-open-icon fa-duotone fa-solid fa-sparkles"></i>
        <i className="sc-closed-icon fa-duotone fa-solid fa-sparkles" />
      </div>
      <ConfigProvider
        theme={{
          algorithm: defaultAlgorithm,
          token: {
            colorPrimary: '#51a2ff',
          },
          components: {
            Form: {
              margin: 0,
              marginLG: 0,
            },
          },
        }}
      >
        <ChatWindow title={title} messages={messages} onMessage={onMessage} isOpen={isOpen} onClose={() => setIsOpen(false)} loading={isLoading} />
      </ConfigProvider>
    </div>
  );
});
