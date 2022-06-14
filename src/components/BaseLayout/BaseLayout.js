import React, {useState} from "react";
import {Welcome} from "./WelcomePage/Welcome";
import {Sections} from "./Sections";
import {hideWelcome} from "../../animations/BaseLayout";



export function BaseLayout () {


    const [isWelcome,setIsWelcome] = useState(true)
    async function showPage(){
        hideWelcome()
        setTimeout(()=>{setIsWelcome(false)},2000)

    }


  return (
      <>
        {isWelcome? <Welcome onClick={showPage}/>: <Sections/>}
      </>
  )
}