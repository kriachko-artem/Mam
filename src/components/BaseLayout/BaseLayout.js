import React from "react";
import './style.css'
import {Navbar} from "./Navbar/Navbar";
import {Poster} from "./Poster/Poster";
import {animateBody, showSection,changeBackground} from "../../animations/BaseLayout";
import {ThisWeek} from "./ThisWeek/ThisWeek";
import {useEffect} from "react";
import {Cursor} from "./Cursor/Cursor";
import {VisitUs} from "./VisitUs/VisitUs";
import {Footer} from "./Footer/Footer";

export function BaseLayout () {


    useEffect(() => {
        changeBackground()
        window.addEventListener('scroll',showSection)
        animateBody()
    }, []);

  return (
      <div className="wrapper">
          <Navbar/>
          <Poster/>
          <ThisWeek/>
          <VisitUs/>
          <Footer/>
          <Cursor/>
      </div>
  )
}