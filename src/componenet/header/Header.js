import React, { Component } from 'react'
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header className='masthead text-white text-center mb-5'>
      <div className="container d-flex align-items-center flex-column"> 
      <img src='images\avataaars.svg' className='mb-5'></img>
      <h1 className='text-center text-white text-uppercase mb-4'>Start Bootstrap</h1>
      <div className="position-relative"><span className='line1 position-absolute'></span></div> 
      <div><i class="fa-solid fa-star text-center text-white fs-3"></i></div>
      <div className="position-relative"><span className='line2 position-absolute'></span></div>
       <p className='p text-center text-white mt-3'>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </header>
    )
  }
}
