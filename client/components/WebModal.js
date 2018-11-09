import React from 'react';

export default class WebModal extends React.Component {

  render() {
    return (
      <div className="modal web-modal">
        <a className="modal-content-wrapper" href={this.props.url} target="_blank">
          <img src={this.props.cover} />
        </a>
        <h2>{this.props.title}</h2>
        <p>{this.props.text}</p>
        <p><a href={this.props.url} target="_blank">VISIT &gt;&gt;</a></p>
      </div>
    );
  }
}
