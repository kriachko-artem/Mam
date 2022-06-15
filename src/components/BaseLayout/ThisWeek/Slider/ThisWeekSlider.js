import React, {useEffect} from "react";
import Slider from "react-slick";
import './slider.css'
import screenOne from './../images/s1.png'
import screenTwo from './../images/s2.png'
import screenThree from './../images/s3.png'
import screenFour from './../images/s4.png'
import screenFive from './../images/s5.png'

import {setBigCursor} from "../../../../animations/BaseLayout";

export function ThisWeekSlider () {
  const settings = {
      infinite: false,
      arrows:false,
      speed: 500,
      slidesToShow: 1.5,
      slidesToScroll: 1,
      centerMode: false,

  };

  useEffect(()=>{
      setBigCursor('.slider-item')
  })

  return (
      <>
          <div className="thisWeek_slider">
              <Slider {...settings}>
                  <div className={'slider-item'}>
                    <a href="">
                        <div className="image-holder">
                            <img src={screenOne} alt="gut_feeling"/>
                        </div>
                        <h3>
                            <span className={'slider-item__tittle'}>Gut Feeling</span>
                            <span>15 October 2021-19 June 2022, Exhibitions, Free</span>
                        </h3>
                    </a>
                </div>
                <div className={'slider-item'}>
                    <a href="">
                        <div className="image-holder">
                            <img src={screenTwo} alt="Wonder_Cupboards"/>
                        </div>
                  <h3>
                      <span className={'slider-item__tittle'}>Gut Feeling</span>
                      <span>15 October 2021-19 June 2022, Exhibitions, Free</span>
                    </h3>
                    </a>
                </div>
               <div className={'slider-item'}>
                   <a href="">
                       <div className="image-holder">
                            <img src={screenThree} alt="National_Photography"/>
                       </div>
                  <h3>
                      <span className={'slider-item__tittle'}>Gut Feeling</span>
                      <span>15 October 2021-19 June 2022, Exhibitions, Free</span>
                    </h3>
                   </a>
                </div>
                <div className={'slider-item'}>
                    <a href="">
                        <div className="image-holder">
                            <img src={screenFour} alt="Sketch"/>
                        </div>
                  <h3>
                      <span className={'slider-item__tittle'}>Gut Feeling</span>
                      <span>15 October 2021-19 June 2022, Exhibitions, Free</span>
                    </h3>
                    </a>
                </div>
                <div className={'slider-item'}>
                  <a href="">
                      <div className="image-holder">
                          <img src={screenFive} alt="Sketch"/>
                      </div>
                      <h3>
                          <span className={'slider-item__tittle'}>Gut Feeling</span>
                          <span>15 October 2021-19 June 2022, Exhibitions, Free</span>
                      </h3>
                  </a>
                </div>
              </Slider>
          </div>
      </>
  )
}
