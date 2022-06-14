import React from "react";
import {ThisWeekSlider} from "./Slider/ThisWeekSlider";
import './style.css'

export function ThisWeek () {
  return (
          <section className={'thisWeek'}>
                  <div className={'thisWeek__title'}>
                       <h3>This Week</h3>
                      <hr/>
                  </div>
                  <ThisWeekSlider/>
          </section>
  )
}