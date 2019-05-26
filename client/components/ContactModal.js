import React from 'react';
require('../style/contactmodal.styl');

export default class ContactModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      isSent: false
    };
  }

  onOpenModal() {
    this.setState({ open: true });
  }

  onCloseModal() {
    this.setState({ open: false });
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({isSent: true});
    const from_email = e.target.querySelector('input').value;
    const message = e.target.querySelector('textarea').value;
    var service_id = "default_service";
    var template_id = "template_sgmZHsMh";
    emailjs.send(service_id, template_id, {from_email, message});
  }

  render() {
    const { open, isSent } = this.state;
    return (
      <div className='contactButton'>
        <button onClick={this.onOpenModal.bind(this)}>Contact</button>
        <div className={open ? 'modalOpen' : 'modalClosed'}>
          <div className='contactModal'>
            <button className="contactModalCloseButton" onClick={this.onCloseModal.bind(this)}>x</button>
            <div className="ContactModalContent">
              {isSent ? <h2>Message sent successfully</h2> : 
                <form className="contactForm" onSubmit={this.onSubmit.bind(this)}>
                  <label for="email">E-mail:</label>
                  <input id="email" className="contactInput" type="email" />
                  <label for="message">Message:</label>
                  <textarea id="message" className="contactInput"></textarea>
                  <input className="submitButton" type="submit"  />
                </form>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
