import React from 'react'
import { TbSquareRoundedCheckFilled } from "react-icons/tb";
import { TiTick } from "react-icons/ti";
import Card from "react-bootstrap/Card"
import {Col, Row} from "react-bootstrap"


const Expreiencescreen = () => {
  return (
    <div className='expscreen'>
        <h6 className='know'>Explore My</h6>
        <h1><strong>Experience</strong></h1>
     <div className='exp'> 
        <div className='frontend'>
          {/* frontend and backend */} 
              <h4>Frontend Development</h4>
              <div className='contentfrontend'>
              <div className='tick'>
                <div className='gap'>
                <TiTick className='tic'></TiTick>
                </div>
                <div className='cont'>
                  <p className='p'>HTML<br></br><span className='span'>Experienced</span></p>
                </div>
              </div>
              <div className='tick'>
                <div>
                <TiTick className='tic'></TiTick>
                </div>
                <div className='cont'>
                  <p className='p'>CSS<br></br><span className='span'>Experienced</span></p>
                </div>
              </div>
              </div>
              <div>
              <div className='contentfrontend'>
              <div className='tick'>
                <div>
                <TiTick className='tic'></TiTick>
                </div>
                <div className='cont'>
                  <p className='p'>JavaScript<br></br><span className='span'>Intermediate</span></p>
                </div>
              </div>
              <div className='tick'>
                <div>
                <TiTick className='tic'></TiTick>
                </div>
                <div className='cont'>
                  <p className='p'> BootStrap<br></br><span className='span'>Intermediate</span></p>
                </div>
              </div>
              </div>
              <div className='contentfrontend'>
              <div className='tick'>
                <div>
                <TiTick className='tic'></TiTick>
                </div>
                <div className='cont'>
                  <p className='p'>React<br></br><span className='span'>Intermediate</span></p>
                </div>
              </div>
              <div className='tick'>
                <div>
                <TiTick className='tic'></TiTick>
                </div>
                <div className='cont'>
                  <p className='p'>Redux<br></br><span className='span'>Intermediate</span></p>
                </div>
              </div>
              </div>
             
              </div>
        </div>
        <div className='frontend'>
          {/* frontend and backend */} 
              <h4>Backend Development</h4>
              <div className='contentfrontend'>
              <div className='tick'>
                <div className='gap'>
                <TiTick className='tic'></TiTick>
                </div>
                <div className='cont'>
                  <p className='p'>MangoDB<br></br><span className='span'>Intermediate</span></p>
                </div>
              </div>
              <div className='tick'>
                <div>
                <TiTick className='tic'></TiTick>
                </div>
                <div className='cont'>
                  <p className='p'>Mangoose<br></br><span className='span'>Intermediate</span></p>
                </div>
              </div>
              </div>
              <div>
              <div className='contentfrontend'>
              <div className='tick'>
                <div>
                <TiTick className='tic'></TiTick>
                </div>
                <div className='cont'>
                  <p className='p'>Node JS<br></br><span className='span'>Intermediate</span></p>
                </div>
              </div>
              <div className='tick'>
                <div>
                <TiTick className='tic'></TiTick>
                </div>
                <div className='cont'>
                  <p className='p'>Express JS<br></br><span className='span'>Intermediate</span></p>
                </div>
              </div>
              </div>
              <div className='contentfrontend'>
              <div className='tick'>
                <div>
                <TiTick className='tic'></TiTick>
                </div>
                <div className='cont'>
                  <p className='p'>Git<br></br><span className='span'>Intermediate</span></p>
                </div>
              </div>
              {/* <div className='tick'>
                <div>
                <TiTick className='tic'></TiTick>
                </div>
                <div className='cont'>
                  <p>Redux Toolkit<br></br>Intermediate</p>
                </div>
              </div> */}
              </div>
             
              </div>
       
        </div>
    </div>  
    </div>
  )
}

export default Expreiencescreen