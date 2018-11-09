import React from 'react';

export default class YoutubeModal extends React.Component {

  render() {
    return (
      <div className="modal youtube-modal">
        <div className="modal-content-wrapper">
          <iframe
            width="640" height="480"
            src={`https://www.youtube.com/embed/${this.props.videoId}?rel=0&amp;showinfo=0&amp`}
            frameBorder="0"
            allowFullScreen
          />
        </div>
        <h2>{this.props.title}</h2>
        <p>{this.props.text}</p>
      </div>
    );
  }
}
