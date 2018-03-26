import React from 'react';
import { MainLayout } from '../components';
import { withRouter } from 'react-router-dom';

class MainLayoutContainer extends React.Component {
  render() {
    return <MainLayout {...this.props} />;
  }
}

export default withRouter(MainLayoutContainer);
