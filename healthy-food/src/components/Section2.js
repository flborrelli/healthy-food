import React, { Component } from 'react';

class Section2 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className='section2'>
        <div className="section2-banner d-flex flex-column justify-content-center">
          <h3>Our Best Recipes</h3>
          <p>Far far away, behind the word mountains,  far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>

        <div class="container">
  <div class="row">
    <div class="col-sm">
      <div>coluna</div>
      <div>coluna</div>
    </div>
    <div class="col-sm">
    <div>coluna</div>
      <div>coluna</div>
    </div>
  </div>
</div>

      </section>
    );  
  }
}

export default Section2;