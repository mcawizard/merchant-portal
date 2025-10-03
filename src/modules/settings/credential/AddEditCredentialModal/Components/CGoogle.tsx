import React, { memo, useCallback } from 'react';
import { CredentialForm } from '../AddEditCredentialModal';
import { AddEditCredentialModalBloc } from '../AddEditCredentialModalBloc';
import { tap } from 'rxjs';
import { R } from '@core/utils/r';
import './index.scss';
import { Button } from '@core/components/Button';

export interface CGoogleProps {
  toolId: string;
  form: CredentialForm;
  bloc: AddEditCredentialModalBloc;
  onDone: () => void;
}

export const CGoogle = memo((props: CGoogleProps) => {
  const { toolId, form, bloc, onDone } = props;

  const onLogin = useCallback(() => {
    bloc
      .oauthUrl(toolId)
      .pipe(
        tap(data => {
          // window.open(data.url, '_blank');
          window.open(data.url, '_blank');
          window.addEventListener('message', event => {
            // if (event.origin !== 'https://yourdomain.com') return; // For security
            if (R.get(event.data, 'action') == 'code' && R.get(event.data, 'status') == true && R.get(event.data, 'payload')) {
              form.patchValue({ data: event.data });
              onDone();
            }
          });
        }),
      )
      .subscribe();
  }, [toolId, bloc, onDone, form]);

  return (
    <div>
      <Button onClick={() => onLogin()}>Sign in with Google</Button>
    </div>
  );
});
