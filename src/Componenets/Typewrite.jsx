import React from 'react'
import Typewriter from "typewriter-effect"

const Typewrite = () => {
  return (
    <div className='type'>
        <Typewriter  options={{
            strings:["Frontend Developer"],
            autoStart:true,
            loop:true,
            delay:100,
            deleteSpeed:20,
        }}/>


      
    </div>
  )
}

export default Typewrite
