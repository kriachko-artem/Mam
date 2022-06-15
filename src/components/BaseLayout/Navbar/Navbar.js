import React, {useEffect, useState} from "react";
import {NavbarLinks} from "./Navbar_links";
import './navbar.css'
import {Sidebar} from "../Sidebar/Sidebar";
import {sidebarData} from "../../../Data/mamalbury.data";
import {gsap} from "gsap";
import CustomEase from "gsap/CustomEase";
import {setBigCursor} from "../../../animations/BaseLayout";
import {Progress} from "../../Progress/Progress";


export function Navbar () {


    const [menu, setMenu] = useState(null);

    useEffect(()=>{
        if (menu){
            document.querySelector('html').style.overflow = 'hidden'
        } else {document.querySelector('html').style.overflow = 'unset'}
    },[menu])

    useEffect(()=>{
        setBigCursor('.header-navbar button')
    },[])

    const handleChangeMenu = (event)=>{
        document.querySelectorAll('.header-navbar ul li button')
            .forEach(item=>{
                item.classList.remove('active')
            })
        event.target.classList.add('active')

        setMenu(()=>{
            const obj = sidebarData.find(item=>{
                return item.navLink === event.target.textContent
            })
            return obj.list
        })
    }
    function closeSidebar (event){
        if (event.target.className.includes('sidebar__container')){
            gsap.to('.sidebar',{translateX: '-100%',duration: 0.5, ease: CustomEase.create("custom", "M0,0,C0.702,0,0.3,1,1,1", )})
            gsap.to('.sidebarContainer',{backgroundColor: 'rgba(56, 56, 56, 0',duration: 0.8})
            setTimeout(()=>setMenu(null),500)
        }
    }
  return (
          <nav className={'header-navbar'}>
              <NavbarLinks links={sidebarData} setMenu={handleChangeMenu}/>
              <Progress/>
              {menu? <Sidebar list={menu} closeSidebar={closeSidebar}/> : null}
          </nav>
  )
}