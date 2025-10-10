import React, { memo, useCallback } from 'react';
import { useObservable } from '@core/utils/hooks/rxjs';
import { Session } from '@modules/auth/session';
import { Avatar } from 'antd';
import { NoteFormData, NoteFormType } from './MerchantNotes';
import { FormInput } from '@core/components/form';
import { useFormConfig, useFormState } from '@core/utils/form';
import { Button } from '@core/components/Button';

export interface CreateNoteBoxProps {
  onSubmit: (data: NoteFormData) => void;
  form: NoteFormType;
}

export const CreateNoteBox = memo((props: CreateNoteBoxProps) => {
  const { onSubmit, form } = props;

  const user = useObservable(Session.user$);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        form.submit();
      }
    },
    [form],
  );

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  useFormConfig(form, { onSubmit });
  const { submitting } = useFormState(form, { submitting: true });

  return (
    <div className="create-note-box">
      <div className="create-note-header">
        <Avatar
          size={32}
          style={{
            backgroundColor: '#1890ff',
            color: 'white',
            fontWeight: '500',
          }}
        >
          {user?.name ? getInitials(user.name) : 'U'}
        </Avatar>
        <span className="create-note-label">Add a note...</span>
      </div>
      <div className="create-note-input">
        <FormInput control={form.controls.merchant_user_note} type="textarea" onKeyDown={handleKeyDown} />
        <div className="create-note-actions">
          <div className="note-hint">
            <i className="fa-regular fa-keyboard" />
            Cmd + Enter to send
          </div>
          <Button onClick={() => form.submit()} loading={submitting} size="small">
            Send Note
          </Button>
        </div>
      </div>
    </div>
  );
});
