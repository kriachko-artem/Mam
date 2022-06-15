import React from "react";
import {ThisWeekSlider} from "./Slider/ThisWeekSlider";
import './style.css'
import JulietteLogo from './images/Juliette-logo.png'

export function ThisWeek () {
  return (
          <section className={'thisWeek'}>
                  <div className={'thisWeek__title'}>
                       <div className="project-name">
                           <img src={JulietteLogo} alt="Juliette Julia"/>
                       </div>
                      <hr/>
                  </div>
                  <ThisWeekSlider/>
          </section>
  )
}