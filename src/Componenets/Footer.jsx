import React from 'react'

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
  return (
    <div className='foot'>
      <p>Copyrights @{year}</p>
      
    </div>
    // <div>
    //     hi
    // </div>
  )
}

export default Footer
