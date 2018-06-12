import React from 'react';
import PropTypes from 'prop-types';
import List from './List';
import { Logo } from 'modules/ui';

class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { list } = this.props;

    return [<Logo key={0} />, <List key={2} data={list} />];
  }
}

Board.propTypes = {
  list: PropTypes.object
};

export default Board;
