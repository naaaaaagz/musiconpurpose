import React from 'react';
require('../style/contactmodal.styl');

export default class ContactModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  onOpenModal() {
    this.setState({ open: true });
  }

  onCloseModal() {
    this.setState({ open: false });
  }

  render() {
    const { open } = this.state;
    return (
      <div className='contactButton'>
        <button onClick={this.onOpenModal.bind(this)}>Contact</button>
        <div className={open ? 'modalOpen' : 'modalClosed'}>
          <div className='contactModal'>
            <button className="contactModalCloseButton" onClick={this.onCloseModal.bind(this)}>x</button>
            <div className="ContactModalContent">
            </div>
          </div>
        </div>
      </div>
    );
  }
}
