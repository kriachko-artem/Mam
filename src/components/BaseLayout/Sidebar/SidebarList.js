import React, {useEffect} from "react";
import {animateList, setBigCursor} from "../../../animations/BaseLayout";


export function SidebarList ({list}) {

    useEffect(()=>{
        animateList('.sidebar__list ul','.sidebar__list ul li')
        setBigCursor('.sidebar__list ul li')
    },[list])


  return (
      <div className={'sidebar__list'}>
          <hr/>
          <ul className={'sidebar__list__list'}>
              {
                  list.map((item,index)=>{
                      return (
                              <li key={index}><a href="#">{Object.keys(item)[0]}</a></li>
                      )
                  })
              }
          </ul>
      </div>
  )
}