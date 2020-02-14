import React, { Component } from 'react';

class Section1 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className='section1 d-flex'>
        <div className='section1-left-container'>
          <h2>
            Ready for Trying a new recipe?
          </h2>
          <div className="search-bar">
          <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search healthy recipes" aria-label="Pesquisar" />
      <button className="buttons btn btn-success my-2 my-sm-0" type="submit"><i class="fas fa-search"></i></button>
    </form>
          </div>
        </div>

        <div className='image-section1'>
          <figure>
            <img src="./images/illustration.svg" alt="ilustration"/>
          </figure>
        </div>

      </section>
    );  
  }
}

export default Section1;