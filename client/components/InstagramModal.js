import React from 'react';

export default class InstagramModal extends React.Component {
  render() {
    const props = this.props;
    return (
      <div className="modal instagram-modal">
        <img src={props.highresImage} />
        <p>{props.caption}</p>
        <a href={props.link} target="_blank">View in Instagram</a>
      </div>
    );
  }
}