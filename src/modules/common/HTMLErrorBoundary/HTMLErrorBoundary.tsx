import React from 'react';
import { Row, Col } from 'reactstrap';

export class HTMLErrorBoundary extends React.Component<{ children: React.ReactNode }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any) {}

  UNSAFE_componentWillReceiveProps() {
    this.setState({ hasError: false });
  }

  render() {
    if (this.state.hasError) {
      return (
        <React.Fragment>
          <Row>
            <Col lg="12">
              <div className="text-center mb-5">
                <h1 className="display-2 font-weight-medium">HTML Error</h1>
                <h4 className="text-uppercase">Invalid HTML Content</h4>
              </div>
            </Col>
          </Row>
        </React.Fragment>
      );
    }

    return this.props.children;
  }
}
