import React, { Component } from 'react';

class Section5 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className='d-flex'>
<div className='section5-left-container mt-5'>
          <h4>
          Join our membership
to get special offer
          </h4>
          <div className="search-bar-5">
          <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Enter your email address" />
      <button className="buttons btn btn-success my-2 my-sm-0" type="submit">Join</button>
    </form>
          </div>
        </div>

        <figure className='image-section5 d-flex justify-content-end ml-5'>
          <img src="./images/bloco_final_image.svg" alt="happy-people"/>
        </figure>
      </section>
    );  
  }
}

export default Section5;