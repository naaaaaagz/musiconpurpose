import React from 'react';

export default class SoundcloudModal extends React.Component {

  render() {
    const src = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${this.props.id}&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true`;
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
