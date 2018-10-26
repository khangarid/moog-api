import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

class List extends React.Component {
  renderItem(item, i) {
    const { history } = this.props;

    return (
      <tr key={i} onClick={() => history.push(`single/${i}`)}>
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
        <table>
          <tbody>
            {data.map((item, i) => this.renderItem(item, i))}
          </tbody>
        </table>
      </div>
    );
  }
}

List.propTypes = {
  data: PropTypes.array,
  history: PropTypes.object
};

export default withRouter(List);
