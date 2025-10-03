import React, { memo, useMemo, useCallback, Fragment } from 'react';
import { t } from 'ttag';
import { tapError } from '@core/utils/rxjs/operators';
import { useFormState, useFormConfig, Validators, formGroup, formControl } from '@core/utils/form';
import { FormInput, FormContainer } from '@core/components/form';
import { Button } from '@core/components/Button';
import { FlashMessage } from '@core/components/FlashMessage';
import { Link } from 'react-router-dom';
import { Styles } from '@core/utils/css';

import { Config } from '@config';
import { AuthAPI } from '@business/api/auth';
import { tap } from 'rxjs/operators';

function defineResetPasswordForm() {
  return formGroup({
    email: formControl<string>({
      label: t`Email`,
      required: true,
      initialValue: Config.DEV_USERNAME,
      validators: [Validators.email],
    }),
  });
}

export const ResetPasswordPage = memo(() => {
  const form = useMemo(() => defineResetPasswordForm(), []);

  const onSubmit = useCallback(
    ({ email }) => {
      return AuthAPI.reset(email).pipe(
        tap(() => {
          form.reset({ email: '' }, { emit: false });
          FlashMessage.success('Email Sent', 'Please follow the instructions sent in email to reset your password');
        }),
        tapError(error => {
          FlashMessage.error(error, t`Password Reset`);
        }),
      );
    },
    [form],
  );

  useFormConfig(form, { onSubmit });

  const { submitting } = useFormState(form, { submitting: true });

  return (
    <Fragment>
      <main className="min-h-100vh grid w-full grow grid-cols-1 place-items-center">
        <div className="w-full max-w-[26rem] p-4 sm:px-5">
          <div className="text-center">
            {/* <Logo className="mx-auto size-16" /> */}
            <img src={Styles.assets('images/logo.png')} alt="Lendwizely" style={{ height: 70 }} className="mx-auto" />
          </div>
          <div className="rounded-lg mt-4">
            <FormContainer onSubmit={form.submit}>
              <div className="space-y-4">
                <FormInput control={form.controls.email} />

                <div className="flex items-center justify-between space-x-2">
                  <Link
                    to="/login"
                    className="text-xs text-gray-400 transition-colors hover:text-gray-800 focus:text-gray-800 dark:text-dark-300 dark:hover:text-dark-100 dark:focus:text-dark-100"
                  >
                    Back to Login
                  </Link>
                </div>
              </div>

              <Button loading={submitting} block type="submit" className="mt-5 w-full">
                Reset Password
              </Button>
            </FormContainer>
          </div>
          <div className="mt-8 flex justify-center text-xs text-gray-400 dark:text-dark-300">© {new Date().getFullYear()} Lendwizely.</div>
        </div>
      </main>
    </Fragment>
  );
});
