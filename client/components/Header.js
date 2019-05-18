import React from 'react';
import ContactModal from './ContactModal';

export default class Header extends React.Component {

  render() {
    return (
      <div className="header">
        <h1>///nagz////////</h1>
        <ContactModal />
        <a href="http://fanlink.to/nagz" target="_blank"><button>buy&#47;stream</button></a>
      </div>
    );
  }

}
