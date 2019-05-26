import React from 'react';

export default class VimeoModal extends React.Component {
  render() {
    return (
      <div className='modal vimeo-modal'>
        <div className='modal-content-wrapper'>
          <iframe
            src={`https://player.vimeo.com/video/${this.props.videoId}`}
            width='640'
            height='360'
            frameborder='0'
            allow='autoplay; fullscreen'
            allowfullscreen
          />
        </div>
        <h2>{this.props.title}</h2>
        <p>{this.props.text}</p>
      </div>
    );
  }
}
