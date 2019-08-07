import React from 'react';
import PropTypes from 'prop-types';
import List from './List';

class Board extends React.Component {
  render() {
    const { list } = this.props;

    return [<List key={2} data={list} />];
  }
}

Board.propTypes = {
  list: PropTypes.array
};

export default Board;
