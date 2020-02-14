import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import WithStyles from "react-multi-carousel";

class Section4 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="section2 d-flex flex-column">
        <div className="section2-banner d-flex flex-column align-items-center mb-3 mt-4">
          <h3>Read Our Blog</h3>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>

        <div className='my-own-custom-container'>

        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className="hello"
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          partialVisible
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024
              },
              items: 3,
              partialVisibilityGutter: 40
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0
              },
              items: 1,
              partialVisibilityGutter: 30
            }
          }}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <div class="section4-container ml-4">
            <div>
              <img src="./images/bloco_image_1.svg" alt="service-1"/>
            </div>

            <div className="section4-infos ml-3 mt-4">
                  <h4 className='h4-1'>Quick-start guide to nuts and seeds</h4>
                  <div className="user-infos d-flex align-items-center">
                    <figure>
                      <img src="./images/kevin.png" alt="user1" />
                    </figure>
                    <p>Kevin Ibrahim</p>
                  </div>
                </div>
          </div>

          <div class="section4-container ml-4">
            <div>
              <img src="./images/bloco_image_2.svg" alt="service-2"/>
            </div>

            <div className="section4-infos ml-3 mt-4">
                  <h4 className='h4-2'>Nutrition: Tips for
Improving Your Health</h4>
                  <div className="user-infos d-flex align-items-center">
                    <figure>
                      <img src="./images/mike.png" alt="user1" />
                    </figure>
                    <p>Mike Jackson</p>
                  </div>
                </div>
          </div>

          <div class="section4-container ml-4">
            <div>
              <img src="./images/bloco_image_3.svg" alt="service-1"/>
            </div>

            <div className="section4-infos ml-3 mt-4">
                  <h4 className='h4-3'>The top 10 benefits
of eating healthy</h4>
                  <div className="user-infos d-flex align-items-center">
                    <figure>
                      <img src="./images/bryan.png" alt="user1" />
                    </figure>
                    <p>Bryan McGregor</p>
                  </div>
                </div>
          </div>

          <div class="section4-container ml-4">
            <div>
              <img src="./images/bloco_image_4.svg" alt="service-1"/>
            </div>

            <div className="section4-infos ml-3 mt-4">
                  <h4 className='h4-4'>What Makes a
Healthy Diet?</h4>
                  <div className="user-infos d-flex align-items-center">
                    <figure>
                      <img src="./images/josh.png" alt="user1" />
                    </figure>
                    <p>Jashua</p>
                  </div>
                </div>
          </div>
        </Carousel>
        </div>
      </section>
    );
  }
}

export default Section4;
