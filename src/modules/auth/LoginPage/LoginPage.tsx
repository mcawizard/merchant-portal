import React, { Fragment, memo, useCallback, useMemo, useEffect, useState } from 'react';
import { Endpoint } from '@business/api/endpoint';
import { Button } from '@core/components/Button';
import { FlashMessage } from '@core/components/FlashMessage';
import { FormCheckbox, FormContainer, FormInput } from '@core/components/form';
import { useHistory, useQueryStringParam, useLastURLParam } from '@core/router';
import { Styles } from '@core/utils/css';
import { useFormConfig, useFormState } from '@core/utils/form';
import { useDidMount } from '@core/utils/hooks/react';
import { R } from '@core/utils/r';
import { tapError } from '@core/utils/rxjs/operators';
import { Session } from '@modules/auth/session';
import { Link } from 'react-router-dom';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import { of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { t } from 'ttag';
import { defineLoginForm, LoginFormData } from './LoginForm';
import { PageTitle } from '@modules/common/PageHeader';

export const LoginPage = memo(() => {
  const form = useMemo(() => defineLoginForm(), []);
  const searchQuery = window.location.search;
  const history = useHistory();
  const redirectUrl = useQueryStringParam('redirectUrl');
  const email = useQueryStringParam('email');
  const [sEmail, setSEmail] = useState(email);

  useEffect(() => {
    if (sEmail && !R.isEmpty(sEmail)) {
      form.patchValue({ username: sEmail });
    }
  }, [email, form, sEmail]);

  const onSubmit = useCallback(
    (data: LoginFormData) => {
      return of(null).pipe(
        switchMap(() => {
          return Session.loginWithAccounts(
            {
              username: data.username,
              password: data.password,
            },
            true,
            redirectUrl,
          );
        }),
        tapError(error => {
          FlashMessage.error(error, t`Email and password do not match`);
        }),
      );
    },
    [redirectUrl],
  );

  useFormConfig(form, { onSubmit });

  const { submitting } = useFormState(form, { submitting: true });

  return (
    <Fragment>
      <PageTitle>Login</PageTitle>
      <main className="min-h-100vh grid w-full grow grid-cols-1 place-items-center">
        <div className="w-full max-w-[26rem] p-4 sm:px-5">
          <div className="text-center">
            <img src={Styles.assets('images/logo.png')} alt="Lendwizely" style={{ height: 70 }} className="mx-auto" />
          </div>
          <Card className="rounded-lg mt-4">
            <FormContainer onSubmit={form.submit}>
              <div className="space-y-4">
                <FormInput control={form.controls.username} />
                <FormInput type="password" control={form.controls.password} />

                <div className="flex items-center justify-between space-x-2">
                  <Link
                    to="/reset-password"
                    className="text-xs text-gray-400 transition-colors hover:text-gray-800 focus:text-gray-800 dark:text-dark-300 dark:hover:text-dark-100 dark:focus:text-dark-100"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>

              <Button loading={submitting} block type="submit" className="mt-5 w-full">
                Sign In
              </Button>
            </FormContainer>
          </Card>
          <div className="mt-8 flex justify-center text-xs text-gray-400 dark:text-dark-300">© {new Date().getFullYear()} Lendwizely.</div>
        </div>
      </main>
    </Fragment>
  );
});
