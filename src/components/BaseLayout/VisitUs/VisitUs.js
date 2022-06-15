import React, {useEffect} from "react";
import './visitUs.css'
import firstCardImg from './images/first.png'
import secondCardImg from './images/second.png'
import thirdCardImg from './images/third.png'
import {setBigCursor} from "../../../animations/BaseLayout";
import {card3D} from "../../../animations/BaseLayout";


export function VisitUs () {


    useEffect(()=>{
        setBigCursor('.card_img-holder img')
        card3D('.card_img-holder')
    },[])

  return (
      <section className={'visitUs'}>
          <div className="container">
            <hr/>
              <div className="visit-us_content">
                  <h2 className="visit-us_content__tittle">Visit Us</h2>
                  <div className="visit-us_content__main">
                      <h4>Come experience everything the museum has to offer from a wide range
                          experiences and activities that every member of the family can enjoy.</h4>
                      <div className="visit-us_content__main__cards">
                          <div className="card">
                              <div className="card_img-holder">
                                  <div className="card-3d">
                                      <img src={firstCardImg} alt="Plan your trip"/>
                                      <span className={'left'}/>
                                      <span className={'right'}/>
                                      <span className={'top'}/>
                                      <span className={'bottom'}/>
                                      <span className={'back'}/>
                                  </div>
                              </div>
                              <h5 className="card_name">
                                  Plan your trip
                              </h5>
                              <p>Open 7 days a week, 363 days of the year and FREE.
                              Come enjoy a day out at the Museum with your friends and family.</p>
                          </div>
                          <div className="card">
                              <div className="card_img-holder">
                                  <div className="card-3d">
                                      <img src={secondCardImg} alt="Plan your trip"/>
                                      <span className={'left'}/>
                                      <span className={'right'}/>
                                      <span className={'top'}/>
                                      <span className={'bottom'}/>
                                      <span className={'back'}/>
                                  </div>
                              </div>
                              <h5 className="card_name">
                                  Shop
                              </h5>
                              <p>MAMA Store specialises in creative and unique gifts, art books, ceramics,
                                  jewellery, and boutique accessories.</p>
                          </div>
                          <div className="card">
                              <div className="card_img-holder">
                                  <div className="card-3d">
                                      <img src={thirdCardImg} alt="Plan your trip"/>
                                      <span className={'left'}/>
                                      <span className={'right'}/>
                                      <span className={'top'}/>
                                      <span className={'bottom'}/>
                                      <span className={'back'}/>
                                  </div>
                              </div>
                              <h5 className="card_name">
                                  Eat
                              </h5>
                              <p>Located at the QEII Entrance to the Museum, Canvas Eatery offers sophisticated dining
                                  in a beautiful setting overlooking the gardens.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  )
}
