import React from 'react';
import PropTypes from 'prop-types';
import { FloatingText } from 'modules/ui';
import YouTube from 'react-youtube';

class Video extends React.Component {
  constructor(props) {
    super(props);

    const state = this.getDimensions();

    this.state = {
      ...state,
      floatingTextClasses: 'full-screen'
    };

    this.onPlay = this.onPlay.bind(this);
    this.hideOverlay = this.hideOverlay.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    const state = this.getDimensions();
    this.setState(state);
  }

  getDimensions() {
    return { width: window.innerWidth, height: window.innerHeight - 4 };
  }

  onPlay() {
    const current = this.state.floatingTextClasses;

    this.setState({ floatingTextClasses: current + ' fade' });

    setTimeout(() => this.hideOverlay(), 1000);
  }

  hideOverlay() {
    const current = this.state.floatingTextClasses;

    this.setState({ floatingTextClasses: current + ' hidden' });
  }

  render() {
    const { data } = this.props;
    const { height, floatingTextClasses } = this.state;

    const opts = {
      height,
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        controls: 0,
        rel: 0,
        showinfo: 0
      }
    };

    return (
      <div className="video">
        <YouTube videoId="2g811Eo7K8U" opts={opts} onPlay={this.onPlay} />
        <FloatingText
          key={0}
          text={data.name}
          fontSize="4rem"
          height="100vh"
          classes={floatingTextClasses}
        />
      </div>
    );
  }
}

Video.propTypes = {
  data: PropTypes.object
};

export default Video;
