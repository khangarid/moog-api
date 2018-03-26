import React from 'react';
import { Layout, BackTop } from 'antd';
import { PropTypes } from 'prop-types';
import Footer from './Footer';
import Header from './Header';

class MainLayout extends React.Component {
  render() {
    return (
      <Layout>
        <Header />

        <Layout.Content>{this.props.children}</Layout.Content>

        <BackTop />

        <Footer />
      </Layout>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;
