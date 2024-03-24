import React from 'react'
import Header from '../Componenets/Header'
import About from '../Componenets/About'
import Contact from '../Componenets/Contact'
import Aboutscreen from './Aboutscreen'
import Expreiencescreen from './Expreiencescreen'
import Projectscreen from './Projectscreen'
import Footer from '../Componenets/Footer'

const Homescreen = () => {
  return (
    <div>
        <Header></Header>
        <About></About>
        <section id='about'>
          <div>
              <Aboutscreen/>
          </div>
        </section>
        <section id='experience'>
          <div id='expreience'>
            <Expreiencescreen/>
          </div>
        </section>
        <section id='project'>
          <div id='project'>
            <Projectscreen/>
          </div>
        </section>
        <section id='contact'>
          <div id='contact'>
            <Contact/>
          </div>
        </section>
        <section>
          <Footer/>
        </section>
       
    </div>
  )
}

export default Homescreen