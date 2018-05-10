import React from 'react';
import SmartGrid from 'components/SmartGrid';
import Card from 'components/Card';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Modal from 'react-modal';
import InstagramModal from 'components/InstagramModal';
import SoundcloudModal from 'components/SoundcloudModal';
import YoutubeModal from 'components/YoutubeModal';
import BandcampModal from 'components/BandcampModal';

import Soundcloud from 'models/Soundcloud';
import Instagram from 'models/Instagram';
import Youtube from 'models/Youtube';
import Bandcamp from 'models/Bandcamp';

export default class MainView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.models = [
      new Soundcloud(),
      new Instagram(),
      new Youtube(),
      new Bandcamp()
    ];
  }

  componentWillMount() {
    this.models.forEach((model) => model.fetch().then(this.appendData.bind(this)));
  }

  appendData(data) {
    let sorted = this.state.data.concat(data).sort((a,b) => b.time - a.time);
    let separated = {};
    sorted.forEach((x) => {
      if (!separated[x.source]) {
        separated[x.source] = [x];
      } else {
        separated[x.source].push(x);
      }
    });
    let interlaced = [];
    while (Object.keys(separated).length) {
      Object.keys(separated).forEach((source) => {
        interlaced.push(separated[source].shift());
        if (separated[source].length === 0) {
          delete separated[source];
        }
      });
    }
    this.setState({data: interlaced});
  }

  openModal(data) {
    return () => {
      this.setState({modalData: data});
    };
  }

  closeModal() {
    this.setState({modalData: null});
  }

  render() {

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
    };

    const modalComponents = {
      instagram: InstagramModal,
      soundcloud: SoundcloudModal,
      youtube: YoutubeModal,
      bandcamp: BandcampModal
    };

    const modal = this.state.modalData;
    const ModalContent = modal && modalComponents[modal.source];

    return (
      <div>
        <Header />
        <SmartGrid>
          {this.state.data.map((d) => <Card key={d.id} {...d} openModal={this.openModal(d).bind(this)} />)}
        </SmartGrid>
        <Modal
          isOpen={modal ? true : false}
          onRequestClose={this.closeModal.bind(this)}
          style={modalStyle}
        >
          {ModalContent && React.createElement(ModalContent, modal)}
        </Modal>
        <Footer />
      </div>
    );
  }
}
