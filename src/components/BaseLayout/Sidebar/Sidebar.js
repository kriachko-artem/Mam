import React, {useEffect} from "react";
import './sidebar.css'
import {gsap} from "gsap";
import {SidebarList} from "./SidebarList";
import CustomEase from "gsap/CustomEase";



export function Sidebar ({list, closeSidebar}) {

    useEffect(()=>{
        const navlinks = document.querySelectorAll('.header-navbar button');
        navlinks.forEach(item=>item.style.color = 'black')
        openSidebar()

        return ()=>{
            document.querySelectorAll('.header-navbar ul li button')
                .forEach(item=>item.classList.remove('active'))
            navlinks.forEach(item=>item.style.color = 'unset')
                }
    },[])


    function openSidebar(){
        gsap.to('.sidebar hr',{scaleX: 1, duration: 1.5,ease: 'power4.out'})
        gsap.to('.sidebar__container',{backgroundColor: 'rgba(56, 56, 56, 0.41'})
        gsap.to('.sidebar',{translateX: 0,duration: 0.5, ease: CustomEase.create("custom", "M0,0,C0.702,0,0.3,1,1,1")})
    }


  return (
      <div className={'sidebar__container'} onClick={closeSidebar}>
          <div className={'sidebar'}>
              <SidebarList list={list}/>
              <div className={'schedule'}>
                  <hr/>
                  <ul>
                      <h6>We are an Art Museum</h6>
                      <li><span>Monday-Friday</span> <span>10am-5pm</span> </li>
                      <li><span>Saturday</span><span>10am-4pm</span></li>
                      <li><span>Sunday</span><span>10am-4pm</span></li>
                      <li><span>Public Holidays</span><span>10am-4pm</span></li>
                      <li><span>Anzac Day</span><span>1pm-4pm</span></li>
                      <li><span>Christmas</span><span>Closed</span></li>
                      <li><span>Good Friday</span><span>Closed</span></li>
                      <br/><br/>
                      <li className={'price'}>Free Entry</li>
                  </ul>
              </div>
          </div>
      </div>
  )
}