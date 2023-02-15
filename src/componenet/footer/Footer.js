import React, { Component } from 'react'
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <div>   
      <footer className='mt-5 text-white'>
        <div className='container'>
          <div className='row'>
          <div  className='footercontent col-lg-4 col-md-6 col-sm-12 text-center'> 
            <h3>LOCATION</h3>
            <p className='lead'>2215 John Daniel Drive<br></br>
            Clark, MO 65243
            </p>
            </div>

            <div class="footercontent col-lg-4 col-md-6 col-sm-12 text-center">
            <h3 class="text-uppercase mb-4">AROUND THE WEB</h3>
            <a class="footericon me-2 ms-2" href="#"><i class="fa-brands fa-facebook-f text-light "></i></a>
            <a class="footericon me-2 ms-1" href="#"><i class="fa-brands fa-twitter text-light"></i> </a>
            <a class="footericon me-2 ms-1" href="#"><i class="fa-brands fa-linkedin-in text-light"></i> </a>
            <a class="footericon me-2 ms-1" href="#"><i class="fa-brands fa-dribbble text-light"></i> </a>
            </div>

            

            <div className='footercontent col-lg-4 col-md-6 col-sm-12 text-center'> 
            <h3>ABOUT FREELANCER</h3>
            <p className='lead'>Freelance is a free to use, MIT licensed Bootstrap theme created by  <a href='#'>start</a> <a href='#'>Bootstrap</a> .</p>
            </div>

          </div>
         </div>
       </footer>
       <div class="copyright py-4 text-center text-white bg-dark">
            <div class="container"><small>Copyright © Your Website 2022</small></div>
        </div>
        </div>
    )
  }
}
