import React from 'react'
require('style/card.styl')

export default class Card extends React.Component {

  openLink () {
    window.open(this.props.link, '_blank')
  }

  render () {
    const style = {
      backgroundImage: this.props.cover ? `url(${this.props.cover})` : null
    }

    const handlers = {
      soundcloud: {
        icon: 'headphones'
      },
      instagram: {
        icon: 'instagram'
      },
      youtube: {
        icon: 'video-camera'
      },
      bandcamp: {
        icon: 'headphones'
      }
    }

    const handler = handlers[this.props.source]

    return (
      <div className='card' style={this.props.style} onClick={this.props.openModal}>
        <div className='content' style={style}>
          {this.props.title && <h2>{handler && <i className={`icon fa fa-${handler.icon}`} />} {this.props.title}</h2>}
        </div>
      </div>
    )
  }
}
