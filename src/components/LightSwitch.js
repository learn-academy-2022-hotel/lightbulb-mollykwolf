import React, { useState } from 'react'
import switchOn from "../assets/switchOn.png"
import switchOff from "../assets/switchOff.png"
import lightOn from "../assets/lightOn.png"
import lightOff from "../assets/lightOff.png"


const LightSwitch = () =>{
  const [currentBackground, setCurrentBackground] =  useState(switchOff)
  const [toggleLight, setToggleLight] = useState(lightOff)

  const onAndOff = () =>{
    if (currentBackground === (switchOff)){
      setCurrentBackground(switchOn)  
      setToggleLight(lightOn)
    } else {
      setCurrentBackground(switchOff)
      setToggleLight(lightOff)
    } 
  }
  return (
    <>
      <div className="lightbulb" onClick={onAndOff} style={{ backgroundImage: "url(" + currentBackground + ")", backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}> 
      </div>     

      <div className="lightbulb" onClick={onAndOff} style={{ backgroundImage: "url(" + toggleLight + ")", backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}></div>
    </>
  )
}

export default LightSwitch
