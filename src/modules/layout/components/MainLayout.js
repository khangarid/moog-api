import React from 'react';
import { PropTypes } from 'prop-types';
import Footer from './Footer';
import Header from './Header';

class MainLayout extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <div>{this.props.children}</div>

        <Footer />
      </div>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;
