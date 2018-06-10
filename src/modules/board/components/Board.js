import React from 'react';
import PropTypes from 'prop-types';
import List from './List';

class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { list } = this.props;

    return <List data={list} />;
  }
}

Board.propTypes = {
  list: PropTypes.object
};

export default Board;
