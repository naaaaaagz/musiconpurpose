import React from 'react';

export default class YoutubeModal extends React.Component {
  
  render() {
    return (
      <div className="modal youtube-modal">
        <div className="iframe-wrapper">
          <iframe
            width="640" height="480"
            src={`https://www.youtube.com/embed/${this.props.videoId}`}
            frameBorder="0"
            allowFullScreen
          />
        </div>
        <a href={this.props.link} target="_blank">View in Youtube</a>
      </div>
    );
  }
}