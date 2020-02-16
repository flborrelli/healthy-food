import React, { Component } from 'react';

class Section5 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className='section5 d-flex'>
<div className='section5-left-container mt-5'>
          <h4>
          Join our membership
to get special offer
          </h4>
          <div className="search-bar-5">
          <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Enter your email address" />
      <button className="section5-button buttons btn btn-success my-2 my-sm-0" type="submit">Join</button>
    </form>
          </div>
        </div>

      </section>
    );  
  }
}

export default Section5;