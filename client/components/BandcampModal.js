import React from 'react';

export default class BandcampModal extends React.Component {
  
  render() {
    return (
      <div className="modal bandcamp-modal">
        <iframe
          style={{border: 0, width: '100%', height: '472px'}}
          src={`http://bandcamp.com/EmbeddedPlayer/album=${this.props.id}/size=large/bgcol=ffffff/linkcol=de270f/artwork=small/transparent=true/`}
          seamless />
        <a href={this.props.link} target="_blank">Play and purchase in BandCamp</a>
      </div>
    );
  }
}