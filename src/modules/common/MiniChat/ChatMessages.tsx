import React, { memo, useEffect, useRef } from 'react';
import { ChatMessage } from './ChatMessage';
import { MiniChatMessage } from './MiniChat';
import { Spin } from 'antd';

export interface ChatMessagesProps {
  messages: MiniChatMessage[];
  loading: boolean;
}

export const ChatMessages = memo((props: ChatMessagesProps) => {
  const { messages, loading } = props;
  const element = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (element.current) {
      element.current.scrollTop = element.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="sc-message-list" ref={element}>
      {messages.map((message, i) => (
        <ChatMessage message={message} key={i} />
      ))}
      {loading && <Spin className="ml-2" />}
    </div>
  );
});
