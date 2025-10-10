import React, { memo } from 'react';
import { Avatar } from 'antd';
import { MerchantNoteResponse } from '@business/entities/merchant-notes';
import { timeAgo } from '@core/utils/time';
import { R } from '@core/utils/r';

export const NoteItem = memo(({ note }: { note: MerchantNoteResponse }) => {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  const getAvatarColor = (userId: string) => {
    const colors = ['#1890ff', '#52c41a', '#fa8c16', '#eb2f96', '#722ed1', '#13c2c2'];
    const index = R.toString(userId)
      .split('')
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[index % colors.length];
  };

  return (
    <div className="merchant-note-item">
      <div className="note-header">
        <Avatar
          size={40}
          style={{
            backgroundColor: getAvatarColor(note.user_id),
            color: 'white',
            fontWeight: '500',
          }}
        >
          {getInitials(note.name)}
        </Avatar>
        <div className="note-meta">
          <div className="note-author">{note.name}</div>
          <div className="note-time">{timeAgo(note.created_at)}</div>
        </div>
        <div className="note-actions">
          {note.pinned && (
            <div className="note-pinned" title="Pinned note">
              <i className="fa-solid fa-thumbtack" />
            </div>
          )}
        </div>
      </div>
      <div className="note-content">
        <div className="note-text">{note.merchant_user_note}</div>
        {note.note_type && <div className="note-type-badge">{note.note_type}</div>}
      </div>
    </div>
  );
});
