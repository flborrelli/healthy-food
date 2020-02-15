import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className='footer-container d-flex align-items-center justify-content-between'>
        <div className="copyrights">
          <p>© Copyrights 2019 Stack. All Rights Reserved.</p>
        </div>
        <div className="policy-conditions d-flex justify-content-center">
          <p className='policy'>Privacy Policy</p>
          <p className='conditions'>Terms and Conditions</p>
        </div>
      </footer>
    );  
  }
}

export default Footer;