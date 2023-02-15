import React, { Component } from 'react'
import './Contact.css';

export default class Contact extends Component {
  render() {
    return (
      <section className='contact mb-5'>
     <div className='container'>
      <div className='title'>
     <h2 className='text-center mb-3 '>CONTACT ME</h2>
     </div>
     <div className='cotentcontact d-flex justify-content-center align-items-center'> 
     <div className="position-relative"><span className='line1 position-absolute'></span></div> 
      <div><i class="fa-solid fa-star text-center fs-3"></i></div>
      <div className="position-relative"><span className='line2 position-absolute'></span></div>
   </div>

 <form className='form mt-5'>

 <div class="mb-3">
  <label for="fullname" class="form-label">Full name</label>
  <input type="text" class="form-control" id="fullname" required ></input>
 </div>

 <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" required></input>
 </div>
 
 <div class="mb-3">
  <label for="phoneNum" class="form-label">Phone number</label>
  <input type="text" class="form-control" id="phoneNum" required></input>
 </div>

 <div class="mb-3">
  <label for="message" class="form-label">Message</label>
  <textarea class="form-control" id="message" rows="3" required></textarea>
</div>

<a className='btn  disabled'>Send</a>
</form>

</div>

</section>
    )
  }
}
