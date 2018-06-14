import React from 'react';
import Modal from 'react-responsive-modal';

export default class ContactModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
  };

  onOpenModal() {
    this.setState({ open: true });
  };

  onCloseModal() {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div>
        <button onClick={this.onOpenModal.bind(this)}>Contact</button>
        <Modal open={open} onClose={this.onCloseModal.bind(this)} center>
          <h2>Simple centered modal</h2>
        </Modal>
      </div>
    );
  }
}
