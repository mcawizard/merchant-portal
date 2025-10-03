import classNames from 'classnames';
import React, { memo } from 'react';
import { MiniChatMessage } from './MiniChat';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import Markdown from 'react-markdown';

export interface ChatMessageProps {
  message: MiniChatMessage;
}

export const ChatMessage = memo((props: ChatMessageProps) => {
  const { message } = props;
  const me = message.sender === 'user';
  return (
    <div className="sc-message">
      <div className={classNames('sc-message--content', { sent: me }, { received: !me })}>
        <TextMessage {...message} />
      </div>
    </div>
  );
});

const TextMessage = memo((msg: MiniChatMessage) => {
  return (
    <div className="sc-message--text">
      {
        <Markdown
          components={{
            a: ({ node, ...props }) => (
              <a {...props} target="_blank" rel="noopener noreferrer">
                {props.children}
              </a>
            ),
          }}
          rehypePlugins={[rehypeRaw]}
          remarkPlugins={[remarkGfm]}
          remarkRehypeOptions={{ passThrough: ['link'] }}
        >
          {msg.text}
        </Markdown>
      }
    </div>
  );
});
