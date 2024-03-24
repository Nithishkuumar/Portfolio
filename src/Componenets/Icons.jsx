import React from 'react'
import { CiLinkedin } from 'react-icons/ci'
import { FaGithub } from 'react-icons/fa'

const Icons = () => {
  return (
    <div className='icons'>
       <div className='icon'>
           <a href='https://www.linkedin.com/in/nithish-kumar-019669212'>
            <CiLinkedin style={{fontSize:"1.5rem",backgroundColor:"#282c34",color:"white"}}></CiLinkedin>
           </a>
           </div>
           <div className='icon'>
        <a href='https://github.com/Nithishkuumar?tab=repositories'>
            <FaGithub style={{fontSize:"1.5rem",backgroundColor:"#282c34",color:"white"}}></FaGithub>
           </a>
        </div>
    </div>
  )
}

export default Icons
