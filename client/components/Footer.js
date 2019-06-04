import React from 'react';
require('style/footer.styl');

export default class Footer extends React.Component {

  render() {
    return (
      <div className="footer">
        <p>site by <a href="https://github.com/hubudibu">hubudibu</a>& friends - thx to jean9 &#47;&#47; &#169; 2019</p>
      </div>
    );
  }

}
