import { Button } from '@core/components/Button';
import { FormContainer, FormInput, FormInputPhone, FormUploadImage } from '@core/components/form';
import { PageHeader } from '@modules/common/PageHeader';
import React, { memo, useCallback, useEffect, useMemo } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { defineUserForm, UserFormData } from '../AddEditUserModal/AddEditUserModal';
import { openChangePassswordModal } from './ChangePasswordModal';
import { useFormConfig, useFormState } from '@core/utils/form';
import { Card, Empty, Result, Skeleton } from 'antd';
import { useObservable } from '@core/utils/hooks/rxjs';
import { Session } from '@modules/auth/session';
import { useBloc } from '@core/utils/bloc';
import { MyAccountPageBloc } from './MyAccountPageBloc';
import { UserAPI } from '@business/api/user_api';
import { Page } from '@modules/common/Page';
import { CardTitle } from '@modules/common';

export const MyAccountPage = memo(() => {
  const sessionUser = useObservable(Session.user$);
  const bloc = useBloc(MyAccountPageBloc, sessionUser?.id || '0');
  const form = useMemo(() => defineUserForm(), []);
  const user = useObservable(bloc.user$);
  useEffect(() => {
    if (user) {
      form.patchValue(user);
    }
  }, [form, user]);

  const onSubmit = useCallback(
    (data: UserFormData) => {
      return bloc.edit(sessionUser!.id, data);
    },
    [bloc, sessionUser],
  );

  useFormConfig(form, { onSubmit });
  const { submitting } = useFormState(form, { submitting: true });
  if (!user) return <Skeleton active />;
  if (user.id == '1') {
    return (
      <Page>
        <Result status="warning" title="You cannot change account settings when you are logged in as a super admin." />
      </Page>
    );
  }

  return (
    <Page>
      <Card>
        <CardTitle description="Update your account settings">My Profile</CardTitle>
        <FormContainer onSubmit={form.submit}>
          <div className="d-flex flex-column align-items-center justify-content-center mt-2" style={{ marginBottom: 20 }}>
            <FormUploadImage listType="picture-circle" control={form.controls.avatar} uploadPath="admin-users/" />
            <div className="mt-4">
              <a className="text-primary" onClick={() => openChangePassswordModal()}>
                Change Password
              </a>
            </div>
          </div>

          <Row>
            <Col>
              <FormInput control={form.controls.firstName} disabled={user.id == '1'} />
            </Col>
            <Col>
              <FormInput control={form.controls.lastName} disabled={user.id == '1'} />
            </Col>
          </Row>
          <Row>
            <Col>
              <FormInput control={form.controls.email} validate={email => UserAPI.emailCheck(email, user?.id)} disabled={user.id == '1'} />
            </Col>
            <Col>
              <FormInputPhone control={form.controls.phone} disabled={user.id == '1'} />
            </Col>
          </Row>

          {user.id != '1' && (
            <div className="submit mt-4" style={{ textAlign: 'right' }}>
              <Button type="submit" color="primary" loading={submitting}>
                Update
              </Button>
            </div>
          )}
        </FormContainer>
      </Card>
    </Page>
  );
});
