import classNames from 'classnames';
import React, { memo } from 'react';
import { ChatHeader } from './ChatHeader';
import { ChatInput } from './ChatInput';
import { ChatMessages } from './ChatMessages';
import { MiniChatMessage } from './MiniChat';

export interface ChatWindowProps {
  messages: MiniChatMessage[];
  onMessage: (message: string) => void;
  isOpen: boolean;
  onClose: () => void;
  title: string;
  loading?: boolean;
}

export const ChatWindow = memo((props: ChatWindowProps) => {
  const { title, isOpen, onClose, messages, onMessage, loading = false } = props;

  return (
    <div className={classNames('sc-chat-window', { opened: isOpen }, { closed: !isOpen })}>
      <ChatHeader title={title} onClose={onClose} />

      <ChatMessages messages={messages} loading={loading} />

      <ChatInput onMessage={onMessage} />
    </div>
  );
});
