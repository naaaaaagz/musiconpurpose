import React from 'react'
import SmartGrid from 'components/SmartGrid'
import Card from 'components/Card'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Modal from 'react-modal'
import SoundcloudModal from 'components/SoundcloudModal'
import YoutubeModal from 'components/YoutubeModal'
import BandcampModal from 'components/BandcampModal'
import VimeoModal from 'components/VimeoModal'
import WebModal from 'components/WebModal'
import { withRouter } from 'react-router-dom';

import Stuff from 'models/StuffProcessor'
import Fillers from 'models/Fillers'

class MainView extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      data: []
    }
    this.stuff = new Stuff()
    this.fillers = new Fillers()
  }

  componentWillMount () {
    let interlaced = []
    let stuff = this.stuff.process()
    const FILLERDENSITY = 3
    stuff.forEach((source, index) => {
      interlaced.push(source)
      if (index % FILLERDENSITY === 0) {
        interlaced.push(this.fillers.pick())
      }
    })
    this.setState({data: interlaced})
  }

  openModal (data) {
    return () => {
      this.props.history.push('/show')
      this.setState({modalData: data})
    }
  }

  closeModal () {
    this.props.history.push('/')
    this.setState({modalData: null})
  }

  render () {
    const modalStyle = {
      overlay: {
        zIndex: 200,
        background: 'rgba(0, 0, 0, 0.8)'
      },
      content: {
        position: 'relative',
        left: 0,
        width: '100%',
        maxWidth: '640px',
        margin: '0 auto',
        padding: 0
      }
    }

    const modalComponents = {
      soundcloud: SoundcloudModal,
      youtube: YoutubeModal,
      bandcamp: BandcampModal,
      vimeo: VimeoModal,
      custom: WebModal
    }

    const modal = this.props.location.pathname === '/' ? null : this.state.modalData
    const ModalContent = modal && modalComponents[modal.source]

    return (
      <div>
        <Header />
        <SmartGrid>
          {this.state.data.map((d) => <Card key={d.id} {...d} openModal={this.openModal(d).bind(this)} />)}
        </SmartGrid>
        <Modal
          isOpen={!!modal}
          onRequestClose={this.closeModal.bind(this)}
          style={modalStyle}
        >
          {ModalContent && React.createElement(ModalContent, modal)}
        </Modal>
        <Footer />
      </div>
    )
  }
}

export default withRouter(MainView);
