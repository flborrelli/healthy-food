import React, { Component } from "react";

class Section2 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="section2 d-flex flex-column">
        <div className="section2-banner d-flex flex-column align-items-center mb-3 mt-4">
          <h3>Our Best Recipes</h3>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>

        <div className="container">
        
          <div className="recipe-card-container row align-items-center justify-content-center">
            <div className="recipe-card col-sm-5 d-flex mr-4">
              <img className='pr-4' src="./images/comida_1.svg" alt="broccoli_salad_with_bacon_recipe_healthy_food"/>
              <div className='recipe-name mt-4'>
                <h4>Broccoli Salad with Bacon</h4>
                <button type="button" className="buttons btn btn-success">See Recipe</button>
              </div>
            </div>

            <div className="recipe-card col-sm-5 d-flex">
              <img className='pr-4' src="./images/comida_2.svg" alt="classic_beef_burgers_recipe_healthy_food"/>
              <div className='recipe-name mt-4'>
                <h4>Classic Beef Burgers</h4>
                <button type="button" className="buttons btn btn-success">See Recipe</button>
              </div>
            </div>
          </div>

          <div className="recipe-card-container row align-items-center justify-content-center mb-4">
            <div className="recipe-card col-sm-5 d-flex mr-4">
              <img className='pr-4' src="./images/comida_3.svg" alt="classic_potato_salad_recipe_healthy_food"/>
              <div className='recipe-name mt-4'>
                <h4>Classic Potato Salad</h4>
                <button type="button" className="buttons btn btn-success">See Recipe</button>
              </div>
            </div>

            <div className="recipe-card col-sm-5 d-flex">
              <img className='pr-4' src="./images/comida_4.svg" alt="cherry_cobbler_grill_healthy_food"/>
              <div className='recipe-name mt-4'>
                <h4>Cherry Cobbler on the Grill</h4>
                <button type="button" className ="buttons btn btn-success">See Recipe</button>
              </div>
            </div>
          </div>
        </div>
        
      </section>
    );
  }
}

export default Section2;
