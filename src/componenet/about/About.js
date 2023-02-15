import React, { Component } from 'react'
import './About.css'

export default class About extends Component {
  render() {
    return (
      <section className='about mb-5'>
      <div className='container'>
      <div className='title'>
     <h2 className='text-center'>ABOUT</h2>
     </div>
     <div className='content d-flex justify-content-center align-items-center'> 
     <div className="position-relative"><span className='line1 position-absolute'></span></div> 
      <div><i class="fa-solid fa-star text-center fs-3"></i></div>
      <div className="position-relative"><span className='line2 position-absolute'></span></div>
     </div>

<div className='row gap-5 d-flex text-white mt-4 '>
<div className='col-lg-4 col-md-12 ms-auto'>  
<p className='lead'>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
</div>

<div className='col-lg-4 col-md-12 me-auto'> 
<p  className='lead'>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
</div>
</div>

<div className='icon d-flex justify-content-center align-items-center mt-3'> 
<a href='https://startbootstrap.com/previews/freelancer' className='btn text-white fs-4'><i class="fa-solid fa-download me-3"></i>Free Download!</a>
</div>

</div>
</section>
    )
  }
}
