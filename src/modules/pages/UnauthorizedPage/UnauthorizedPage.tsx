import React, { memo, useMemo } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import { Styles } from '@core/utils/css';
import { useQueryStringParam } from '@core/router';

export const UnauthorizedPage = memo(() => {
  // get current url
  const onlyUser = useQueryStringParam('onlyUser');
  const currentURL = window.location.href;
  const isExternal = useMemo(() => currentURL.includes('external'), [currentURL]);
  return (
    <React.Fragment>
      <div className="account-pages my-5 pt-5">
        <Container>
          <Row>
            <Col lg="12">
              <div className="text-center mb-5">
                <h1 className="display-2 font-weight-medium">
                  4<i className="bx bx-buoy bx-spin text-primary display-3" />1
                </h1>
                <h4 className="text-uppercase">Unauthorized</h4>
                {!onlyUser && <p>Sorry! You are not authroized to access this page</p>}
                {!!onlyUser && <p style={{ fontWeight: '500' }}>Only your customers can access this product</p>}
                {!isExternal && (
                  <div className="mt-5 text-center">
                    <Link className="btn btn-primary waves-effect waves-light" to="/">
                      Back to Home
                    </Link>
                  </div>
                )}
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md="8" xl="6">
              <div>
                <img src={Styles.assets('assets/images/error-img.png')} alt="" className="img-fluid" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
});
