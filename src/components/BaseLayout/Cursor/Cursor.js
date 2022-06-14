import React, {useEffect} from "react";
import './cursor.css'
import {setCursorPosition} from "../../../animations/BaseLayout";

export function Cursor () {
    useEffect(()=>{
        setCursorPosition()
    },[])

    return (
        <>
            <div id="cursor"/>
            <div id="cursor-point"/>
        </>
  )
}