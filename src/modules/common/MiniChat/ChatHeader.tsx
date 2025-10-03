import React, { memo } from 'react';

export interface ChatHeaderProps {
  onClose: () => void;
  title: string;
}

export const ChatHeader = memo((props: ChatHeaderProps) => {
  return (
    <div className="sc-header">
      <div className="sc-header--team-name"> {props.title} </div>
      <div className="sc-header--close-button" onClick={props.onClose}>
        <i className="fa-duotone fa-solid fa-x"></i>
      </div>
    </div>
  );
});
