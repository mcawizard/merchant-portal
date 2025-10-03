import { FormInput } from '@core/components/form';
import { formControl } from '@core/utils/form';
import { useNonNilObservable } from '@core/utils/hooks/rxjs';
import { TranscribeButton } from '@modules/agent/chat/ChatPage/components/TranscribeButton';
import { Button } from 'antd';
import React, { memo, useMemo } from 'react';

export interface ChatInputProps {
  onMessage: (message: string) => void;
}

export const ChatInput = memo((props: ChatInputProps) => {
  const { onMessage } = props;
  const control = useMemo(() => formControl<string>({ placeholder: 'Type a message...' }), []);
  const controlValue = useNonNilObservable(control.value$);
  const [isRecording, setIsRecording] = React.useState(true);

  return (
    <div className={`sc-user-input ${true ? 'active' : ''}`}>
      <FormInput
        type="textarea"
        variant="underlined"
        control={control}
        className="sc-user-input--text"
        onPressEnter={re => {
          re.preventDefault();
          re.stopPropagation();
          if (controlValue) {
            onMessage(controlValue);
            control.setValue('');
          }
        }}
      />

      <div className="sc-user-input--buttons">
        <TranscribeButton
          style={{ backgroundColor: '#FFF', marginTop: 13 }}
          className="d-flex items-start"
          onMessage={prompt => control.setValue(prompt)}
          onRecordingStart={() => setIsRecording(true)}
          onRecordingStop={() => setIsRecording(false)}
        />

        <div className="sc-user-input--button">
          <Button
            variant="text"
            onClick={() => {
              if (controlValue) {
                onMessage(controlValue);
                control.setValue('');
              }
            }}
          >
            <i className="fa-solid fa-paper-plane-top text-primary-500" />
          </Button>
        </div>
      </div>
    </div>
  );
});
