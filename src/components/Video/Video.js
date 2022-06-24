import React from 'react';
import YouTube from 'react-youtube';

class Video extends React.Component {
  render() {
    const opts = {
      height: '300px',
      width: '600px',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

   const {videoId} = this.props

    return <YouTube videoId= {videoId} opts={opts} onReady={this._onReady} />;
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }
}
export default Video;