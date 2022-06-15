import React from "react";
import {ThisWeekSlider} from "./Slider/ThisWeekSlider";
import './thisWeek.css'
import JulietteLogo from './images/Juliette-logo.png'

export function ThisWeek () {
  return (
          <section className={'thisWeek'}>
              <div className="container">
                  <div className={'thisWeek__title'}>
                       <div className="project-name">
                           <img src={JulietteLogo} alt="Juliette Julia"/>
                       </div>
                      <hr/>
                  </div>
                  <ThisWeekSlider/>
              </div>
          </section>
  )
}