import React, { memo, useCallback, useEffect, useMemo } from 'react';
import { Container, Row } from 'reactstrap';
import { PageHeader } from '@modules/common/PageHeader';
import { Button, Result } from 'antd';
import { useHistory } from '@core/router';

export const NotImplementedPage = memo(() => {
  const history = useHistory();
  return (
    <div className="page-content">
      <Container fluid>
        <Result
          status="500"
          title="Not Implemented"
          subTitle="Sorry, this page is not implemented."
          extra={
            <Button type="primary" onClick={() => history.push('/')}>
              Back Home
            </Button>
          }
        />
      </Container>
    </div>
  );
});
