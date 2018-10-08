import React from 'react';
import PropTypes from 'prop-types';
import { Video, Detail } from 'modules/board/containers';

class Single extends React.Component {
  render() {
    return (
      <div className="single">
        <Video />
        <Detail />
      </div>
    );
  }
}

Single.propTypes = {
  data: PropTypes.object
};

export default Single;
