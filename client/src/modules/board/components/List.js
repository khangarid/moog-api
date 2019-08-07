import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

class List extends React.Component {
  renderItem(item, i) {
    const { history } = this.props;

    return (
      <div key={i} onClick={() => history.push(`single/${item.i}`)} className="list-item">
        <div className="image">
          <img src={this.buildImgSrc(item.ytVideoId)}></img>
        </div>
        <div className='info'>
          <h5>{item.name}</h5>
          <small>{item.artist}</small>
        </div>
      </div>
    );
  }

  buildImgSrc(ytVideoId) {
    return `https://img.youtube.com/vi/${ytVideoId}/0.jpg`
  }

  render() {
    const { data } = this.props;

    return (
      <div className="list">
        {data.map((item, i) => this.renderItem(item, i))}
      </div>
    );
  }
}

List.propTypes = {
  data: PropTypes.array,
  history: PropTypes.object
};

export default withRouter(List);
