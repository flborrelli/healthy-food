import React, { Component } from 'react';

class Section3 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className='section3 d-flex'>

        <figure>
          <img src="./images/bloco_services.svg" alt="services"/>
        </figure>
        
        <div className="section3-text">
          <h4>The best services ready To serve you</h4>
          <div>
          <p>Far far away, behind the word mountains,  far from the countries Vokalia and Consonantia, there live the blind texts.</p>

          <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>

          <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
          </div>
          <button type="button" className="know-button buttons btn btn-success mt-4">Know More</button>
        </div>
      </section>
    );  
  }
}

export default Section3;