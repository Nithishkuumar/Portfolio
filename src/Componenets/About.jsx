import React from 'react'
// import { Button, Container, Image } from 'react-bootstrap'
import imag from "../images/sample.png"
import Typewrite from './Typewrite'
// import { CiLinkedin } from "react-icons/ci";
// import { FaGithub } from "react-icons/fa";
import Icons from './Icons';

const About = () => {
  return (
    <>
    <div className='about'>
        <div>
        <img src={imag} alt='nithish' className='image'/>
        </div>
        <div>
            <h6>Hello I'm</h6>
            <h1><strong>Nithish Kumar</strong></h1>
            <Typewrite></Typewrite>
            {/* <h4 className='dev'>Frontend Developer</h4> */}
            {/* <Button variant='dark'  className="Button" size='sm'>Contact</Button> */}
            <Icons/>
        </div>
    </div>
    </>
  //  www.linkedin.com/in/nithish-kumar-019669212
  )
}

export default About
