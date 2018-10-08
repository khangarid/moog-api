import React from 'react';
import PropTypes from 'prop-types';
import List from './List';
import { FloatingText } from 'modules/ui';

class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { list } = this.props;

    return [<FloatingText key={0} />, <List key={2} data={list} />];
  }
}

Board.propTypes = {
  list: PropTypes.array
};

export default Board;
