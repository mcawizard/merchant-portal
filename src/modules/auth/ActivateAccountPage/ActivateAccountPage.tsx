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
import { useQueryStringParam, useHistory, useRouteParam } from '@core/router';
import { useNonNilObservable } from '@core/utils/hooks/rxjs';
import { tap } from 'rxjs/operators';
import { Endpoint } from '@business/api/endpoint';
import { PageTitle } from '@modules/common/PageHeader';

function defineActivateAccountForm() {
  return formGroup({
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

export const ActivateAccountPage = memo(() => {
  const token = useRouteParam('token');
  const form = useMemo(() => defineActivateAccountForm(), []);
  const formValue = useNonNilObservable(form.value$);
  const history = useHistory();

  useEffect(() => {
    form.controls.confirmPassword.setConfig({
      validators: [Validators.minLength(6), Validators.equals(formValue.password, 'Both passwords does not match.')],
    });
  }, [form.controls.confirmPassword, formValue.password]);

  const onSubmit = useCallback(
    ({ password, confirmPassword }) => {
      return AuthAPI.activate(password, confirmPassword, token || '').pipe(
        tap(() => history.replace('/login')),
        tapError(error => {
          FlashMessage.error(error, t`Account activation`);
        }),
      );
    },
    [history, token],
  );

  useFormConfig(form, { onSubmit });

  const { submitting } = useFormState(form, { submitting: true });

  return (
    <Fragment>
      <PageTitle>Activate Account</PageTitle>
      <main className="min-h-100vh grid w-full grow grid-cols-1 place-items-center">
        <div className="w-full max-w-[26rem] p-4 sm:px-5">
          <div className="text-center">
            {/* <Logo className="mx-auto size-16" /> */}
            <img src={Styles.assets('images/logo.png')} alt="Lendwizely" style={{ height: 70 }} className="mx-auto" />
          </div>
          <Card className="rounded-lg mt-4">
            <div className="p-2 mt-4">
              {/* <AvForm className="form-horizontal"> */}
              <FormContainer onSubmit={form.submit}>
                <FormInput type="password" control={form.controls.password} />
                <FormInput type="password" control={form.controls.confirmPassword} />

                <div className="submit d-flex justify-content-center">
                  <Button type="submit" color="primary" loading={submitting}>
                    Activate Account
                  </Button>
                </div>
              </FormContainer>
            </div>
          </Card>
          <div className=" text-center">
            <Link
              to="/login"
              className="text-xs text-gray-400 transition-colors hover:text-gray-800 focus:text-gray-800 dark:text-dark-300 dark:hover:text-dark-100 dark:focus:text-dark-100"
            >
              Back to Login
            </Link>
            <div className="mt-8 flex justify-center text-xs text-gray-400 dark:text-dark-300">© {new Date().getFullYear()} Lendwizely</div>
          </div>
        </div>
      </main>
    </Fragment>
  );
});
