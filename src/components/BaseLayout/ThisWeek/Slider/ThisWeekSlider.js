import React, {useEffect} from "react";
import Slider from "react-slick";
import './slider.css'
import gut_feeling from './../images/gut_feeling.png'
import Wonder_Cupboards from './../images/Karla_Dickens_Wonder_Cupboards.png'
import National_Photography from './../images/National_Photography_Prize_2022.png'
import sketch from '../images/sketch_club.png'
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
      <Slider {...settings}>
        <div className={'slider-item'}>
            <a href="">
                <div className="image-holder">
                    <img src={gut_feeling} alt="gut_feeling"/>
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
                    <img src={Wonder_Cupboards} alt="Wonder_Cupboards"/>
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
                    <img src={National_Photography} alt="National_Photography"/>
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
                    <img src={sketch} alt="Sketch"/>
                </div>
          <h3>
              <span className={'slider-item__tittle'}>Gut Feeling</span>
              <span>15 October 2021-19 June 2022, Exhibitions, Free</span>
            </h3>
            </a>
        </div>
      </Slider>
  )
}