import React from 'react';
import PropTypes from 'prop-types';
import { Logo } from 'modules/ui';

class Single extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;

    return [<Logo key={0} text={data.name} fontSize="4rem" />];
  }
}

Single.propTypes = {
  data: PropTypes.object
};

export default Single;
