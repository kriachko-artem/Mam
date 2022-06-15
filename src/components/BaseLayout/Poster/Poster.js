import React, {useEffect} from "react";
import poster from './images/poster.jpg'
import './poster.css'
import {gsap} from "gsap";
import logo from './images/logo.png'

export function Poster () {

    let posterMainTitle,
        posterMainImage,
        posterTitle,
        posterMain,
        startPosition,
        today;

    today = new Date()

    useEffect(()=>{
        console.log(today.getDate())

        posterMain = document.querySelector('.poster_main')
        posterMainTitle = document.querySelector('.poster_main__label');
        posterMainImage = document.querySelector('.poster_main .img-holder');
        posterTitle = document.querySelector('.poster_title');
        parallaxElement(posterMainImage,posterMainTitle,startPosition)
        animatePoster()

    },[])

    function parallaxElement(area,element){
        startPosition = ((area.offsetTop + (area.clientHeight)/8) - window.pageYOffset)/5;
        window.addEventListener('scroll', ()=>{
            startPosition = ((area.offsetTop + (area.clientHeight)/8) - window.pageYOffset)/5;
            gsap.set(element,{
                css: {translateY: startPosition}
            })
            }
        )
    }


    function animatePoster(){
        gsap.fromTo(posterTitle, {translateY:50}, {translateY:0 ,duration: 1.8, ease: 'power2.out'});
        gsap.fromTo(posterMainImage,{translateY:400}, {translateY:0 ,duration: 2, ease: 'power3.out'});
        gsap.fromTo(posterMainTitle, {translateY:400}, {translateY:startPosition ,duration: 1.5, ease: 'power1.out'});
    }

  return (
          <section className="poster">
              <div className="container">
              <div className="poster_title">
                  <div className="logo">
                      <img src={logo} alt="AK"/>
                  </div>
                  <hr/>
                  <h3>Today!</h3>
              </div>
              <div className="poster_main">
                  <div className="img-holder">
                      <img src={poster} alt="Poster"/>
                  </div>
                  <h2 className={'poster_main__label'}>
                      <span>Front End</span>
                      <span>Developer</span>
                      <span>Artem</span>
                      <span>Kriachko</span>
                  </h2>
                  <hr/>
              </div>
              <div className="poster__author-info">
                  <span className={'name'}>Hello!</span>
                  <span>I'm Frontend developer with experience of</span>
                  <span>developing professional HTML</span>
                  <span>Responsive Landing pages and Custom Websites.</span>
                  <span>I'm looking for a long-term relationship with the employer.</span>
              </div>
              </div>
          </section>


  )
}