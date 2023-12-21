import React from 'react'
import "./Banner.css"
function Banner() {
  return (
    <div className='banner'>
      <div className='content'>
        <h1 className='title'>Movie Name</h1>
        <div className='banner-buttons'>
            <button className='button'>play</button>
            <button className='button'>my list</button>
        </div>
        <h1 className='description'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of class.</h1>

      </div>
      <div className='fade_bottom'>
        
      </div>
    </div>
  )
}

export default Banner
