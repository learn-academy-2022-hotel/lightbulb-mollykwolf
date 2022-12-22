import React, { useState } from 'react'

const LightSwitch = () =>{
  const [toggleSwitch, setToggleSwitch] = useState("off")

  const [color, setColor] = useState("white")

  const onAndOff = () =>{
    if (toggleSwitch === "off") {
      setToggleSwitch("on")
      setColor("yellow")  
    } else {
      setToggleSwitch("off")
      setColor("white")
    } 
  }
  return (
    <>
      <div className="lightbulb" onClick={onAndOff} style={{ backgroundColor: color}}>
        {toggleSwitch} 
      </div>     
    </>
  )
}

export default LightSwitch
