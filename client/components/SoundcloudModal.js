import React from 'react';

export default class SoundcloudModal extends React.Component {

  render() {
    const src = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${this.props.id}&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&visual=true`;
    return (
      <div className="modal soundcloud-modal">
        <iframe
          width="100%"
          height="450"
          scrolling="no"
          frameBorder="no"
          src={src} />
        <a href={this.props.link} target="_blank">Open in Soundcloud</a>
        <h2>{this.props.title}</h2>
        <p>{this.props.text}</p>
      </div>
    );
  }
}
