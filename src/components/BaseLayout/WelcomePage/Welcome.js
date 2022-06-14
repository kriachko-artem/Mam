import React, {useEffect} from "react";
import './Welcome.css'
import {WelcomeSVG} from "./images/WelcomeSVG";
import {Cursor} from "../Cursor/Cursor";
import {gsap} from "gsap";
import {Back} from "gsap/gsap-core";

export function Welcome ({onClick}) {

    const message = 'Please, click to view my portfolio';
    useEffect(()=>{

    },[])

  return (
          <div onClick={onClick} className="welcome">
              <WelcomeSVG/>
              <div className="message">
                  {Array.from(message).map((item,index)=>{
                      if (item===' '){
                          return (<span key={index}>{item}</span>)
                      } else return (<span className={'letter'} key={index}>{item}</span>)
                  })}
              </div>
              <Cursor/>
          </div>
      )
}