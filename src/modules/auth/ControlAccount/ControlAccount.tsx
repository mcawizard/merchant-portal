import React, { memo, useEffect } from 'react';
import { Session } from '@modules/auth/session';
import { switchMap } from 'rxjs/operators';
import { TenantConfig } from '@core/utils/config';
import { useQueryStringParam, useHistory, useRouteParam } from '@core/router';
import { LoadingIndicator } from '@core/components/LoadingIndicator';
import { AuthAPI } from '@business/api/auth';
import { Endpoint } from '@business/api/endpoint';
import { Col, Container, Row } from 'reactstrap';
import { Styles } from '@core/utils/css';
import './index.scss';
import { Spin } from 'antd';

export const ControlAccount = memo(() => {
  const appId = useRouteParam('appId')!;

  useEffect(() => {
    Session.logout(false)
      .pipe(
        switchMap(() => AuthAPI.controlAccount(appId)),
        switchMap(data => {
          TenantConfig.set({ appId });
          Endpoint.setAppId(appId);
          return Session.restoreByToken(data.token, true);
        }),
      )
      .subscribe();
  }, [appId]);

  return (
    <div className="center-page">
      <Container>
        <Row>
          <Col md={12}>
            <div className="text-center mb-4">
              <img src={Styles.assets('images/logo.png')} alt="aioohcoders" height="70" />
              <br />
              <br />
              <Spin />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
});
