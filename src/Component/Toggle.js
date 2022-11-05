import React from 'react'
import "./Toggle.css"
import {useState} from "react"
const Toggle = () => {

  const [isLight,setLight]=useState(true)
  const clickhandler=_=>{

if(isLight===true){
  setLight(false)
}else{
  setLight(true)
}
  }
  return (
    <>
    <div className={isLight  ? "light-Container" :"Dark-Container"} >
      <div className="header">

        <div className="main">
          <div className={isLight ? "nav-light" : "nav-Dark "}>
            <h1>Overreacted</h1>
            <button onClick={ clickhandler}>Toggle</button>
          </div>
        </div>
     <div className="content">
        <div className={isLight ? "userinterface-light": "userinterface-Dark"}>
          <h1>The Wet Codebase</h1>
          <p>Sunday 4th,2020 11 min read </p>
          <p>Come waste your time with me</p>
        </div>
        <div className={isLight ? "userinterface-light": "userinterface-Dark"}>
          <h1>Goodby , Clean Code</h1>
          <p>Friday 22nd, 2019 5 min read</p>
          <p>Let clean Code guide you then let it go.</p>
        </div> 
        <div className={isLight ? "userinterface-light": "userinterface-Dark"}>
          <h1>My Decade In Review</h1>
          <p>Saturday 11th, 2018 5 min read</p>
          <p>A person reflection</p>
        </div>
        <div className={isLight ? "userinterface-light": "userinterface-Dark"}>
          <h1>What Decade in Review</h1>
          <p>Thuresday 4th , 2015 5 min read</p>
        </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Toggle