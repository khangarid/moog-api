import React from 'react';
import PropTypes from 'prop-types';

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  renderItem(item, i) {
    return (
      <tr key={i}>
        <td>
          <span>{i}</span>
        </td>
        <td>
          <div>
            <h5>{item.name}</h5>
          </div>
          <small>{item.artist}</small>
        </td>
      </tr>
    );
  }

  render() {
    const { data } = this.props;

    return (
      <div className="list">
        <table>{data.map((item, i) => this.renderItem(item, i))}</table>
      </div>
    );
  }
}

List.propTypes = {
  data: PropTypes.object
};

export default List;
