import React, {useEffect} from "react";
import desert from './images/3c2315923ab48c5b4a3cdcee7821ee071c3fd5e8-5400x1997.png'
import './poster.css'
import {gsap} from "gsap";

export function Poster () {

    let posterMainTitle,
        posterMainImage,
        posterTitle,
        posterMain,
        startPosition

    useEffect(()=>{

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
                  <h2>Murray art museum gallery</h2>
                  <hr/>
                  <h3>26 February 2022-5 June 2022</h3>
                  <span>Exhibitions</span>
              </div>
              <div className="poster_main">
                  <div className="img-holder">
                      <img src={desert} alt="Desert"/>
                  </div>
                  <h2 className={'poster_main__label'}>
                      <span>National</span>
                      <span>photo</span>
                      <span>graphy</span>
                      <span>prize</span>
                  </h2>
                  <hr/>
              </div>
              <div className="poster__author-info">
                  <span className={'name'}>Amos Gebhardt,</span>
                  <span><i>Eric,</i> (triptych), 2020,</span>
                  <span>Archival inkjet pigment print. 95 x 245cm</span>
                  <span>framed size.</span>
                  <span>Image courtesy of the artist.</span>
              </div>
              </div>
          </section>


  )
}