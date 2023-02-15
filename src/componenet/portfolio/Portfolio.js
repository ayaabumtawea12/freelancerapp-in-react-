
import React, { Component } from 'react'
import './Portfolio.css';

export default class Portfolio extends Component {
  render() {
    return (
      <section className='portfolio mb-5'>
      <div className='container'>
      <div className='title'>
     <h2 className='text-center mb-3'>PORTFOLIO</h2>
     </div>
     <div className='content d-flex justify-content-center align-items-center'> 
     <div className="position-relative"><span className='line1 position-absolute'></span></div> 
      <div><i class="fa-solid fa-star text-center fs-3"></i></div>
      <div className="position-relative"><span className='line2 position-absolute'></span></div>
</div>
<div className='row mt-5'>
<div className='col-lg-4 col-md-6 col-sm-12 mb-5'>
<img src='images\cabin.png' className='w-100 rounded-2'></img>
</div>

<div className='col-lg-4 col-md-6 col-sm-12 mb-5'>
<img src='images\cake.png'  className='w-100 rounded-2'></img>
</div>

<div className='col-lg-4 col-md-6 col-sm-12 mb-5'>
<img src='images\circus.png' className='w-100 rounded-2'></img>
</div>

<div className='col-lg-4 col-md-6 col-sm-12'>
<img src='images\game.png' className='w-100 rounded-2'></img>
</div>

<div className='col-lg-4 col-md-6 col-sm-12'>
<img src='images\safe.png' className='w-100 rounded-2'></img>
</div>

<div className='col-lg-4 col-md-6 col-sm-12'>
<img src='images\submarine.png'  className='w-100 rounded-2'></img>
</div>

</div>






</div>


</section>
    )
  }
}
