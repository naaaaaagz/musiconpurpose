import React from 'react'
require('style/card.styl')

export default class Card extends React.Component {

  openLink () {
    window.open(this.props.link, '_blank')
  }

  render () {
    const style = {
      background: this.props.cover ? `url(${this.props.cover}) no-repeat center` : null,
      backgroundSize: this.props.size === '3' ? 'unset': 'cover',
    }

    const handlers = {
      soundcloud: {
        icon: 'headphones'
      },
      youtube: {
        icon: 'video-camera'
      },
      vimeo: {
        icon: 'video-camera'
      },
      web: {
        icon: 'globe'
      },
      custom: {
        icon: 'globe'
      },
      bandcamp: {
        icon: 'headphones'
      }
    }

    const handler = handlers[this.props.source]
    return (
      <div className={`card ${this.props.source}`} style={this.props.style} onClick={this.props.source === 'instagram' ? () => {} : this.props.openModal}>
        <div className='content' style={style}>
          {handler && <h3><i className={`icon fa fa-${handler.icon}`}/></h3>}
          {this.props.title && <h2>{this.props.title}</h2>}
        </div>
      </div>
    )
  }
}
