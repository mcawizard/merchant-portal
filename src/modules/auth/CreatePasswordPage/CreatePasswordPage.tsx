import React, { memo, useMemo, useCallback, Fragment, useEffect } from 'react';
import { t } from 'ttag';
import { tapError } from '@core/utils/rxjs/operators';
import { useFormState, useFormConfig, Validators, formGroup, formControl } from '@core/utils/form';
import { FormInput, FormContainer } from '@core/components/form';
import { Button } from '@core/components/Button';
import { FlashMessage } from '@core/components/FlashMessage';
import { Link } from 'react-router-dom';
import { Styles } from '@core/utils/css';

import { Row, Col, CardBody, Card, Container } from 'reactstrap';
import { Config } from '@config';

import { AuthAPI } from '@business/api/auth';
import { useQueryStringParam, useHistory } from '@core/router';
import { useNonNilObservable } from '@core/utils/hooks/rxjs';
import { tap } from 'rxjs/operators';
import { PageTitle } from '@modules/common/PageHeader';

function defineResetPasswordForm(email: string | null) {
  return formGroup({
    email: formControl<string>({
      label: t`Email`,
      required: true,
      initialValue: email || undefined,
      validators: [Validators.email],
    }),
    password: formControl<string>({
      label: t`New Password`,
      required: true,
      initialValue: Config.DEV_PASSWORD,
      validators: [Validators.minLength(6)],
    }),
    confirmPassword: formControl<string>({
      label: t`Confirm New Password`,
      required: true,
      initialValue: Config.DEV_PASSWORD,
      validators: [Validators.minLength(6)],
    }),
  });
}

export const CreatePasswordPage = memo(() => {
  const email = useQueryStringParam('email');
  const token = useQueryStringParam('token');
  const form = useMemo(() => defineResetPasswordForm(email), [email]);
  const formValue = useNonNilObservable(form.value$);
  const history = useHistory();

  useEffect(() => {
    form.controls.confirmPassword.setConfig({
      validators: [Validators.minLength(6), Validators.equals(formValue.password, 'Both passwords does not match.')],
    });
  }, [form.controls.confirmPassword, formValue.password]);

  const onSubmit = useCallback(
    ({ email, password, confirmPassword }) => {
      return AuthAPI.setPassword(email, password, confirmPassword, token || '').pipe(
        tap(() => history.replace('/login')),
        tapError(error => {
          FlashMessage.error(error, t`Password Reset`);
        }),
      );
    },
    [history, token],
  );

  useFormConfig(form, { onSubmit });

  const { submitting } = useFormState(form, { submitting: true });

  return (
    <Fragment>
      <PageTitle>Create Password</PageTitle>
      <main className="min-h-100vh grid w-full grow grid-cols-1 place-items-center">
        <div className="w-full max-w-[26rem] p-4 sm:px-5">
          <div className="text-center">
            {/* <Logo className="mx-auto size-16" /> */}
            <img src={Styles.assets('images/logo.png')} alt="Lendwizely" style={{ height: 70 }} className="mx-auto" />
          </div>
          <Card className="rounded-lg mt-4">
            <FormContainer onSubmit={form.submit}>
              <div className="space-y-4">
                <FormInput control={form.controls.email} readonly />
                <FormInput type="password" control={form.controls.password} />
                <FormInput type="password" control={form.controls.confirmPassword} />
              </div>

              <Button loading={submitting} block type="submit" className="mt-5 w-full">
                Create Passsword
              </Button>
            </FormContainer>
          </Card>
          <div className="mt-8 flex justify-center text-xs text-gray-400 dark:text-dark-300">© {new Date().getFullYear()} Lendwizely.</div>
        </div>
      </main>
    </Fragment>
  );
});
