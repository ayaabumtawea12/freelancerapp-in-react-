import React, { Component } from 'react'
import Portfolio from './componenet/portfolio/Portfolio'
 import About from './componenet/about/About'
 import Contact from './componenet/contact/Contact'
 import Header from './componenet/header/Header'
 import Footer from './componenet/footer/Footer'
 import Navbar from './componenet/navbar/Navbar'
 import Notfound from './componenet/not found/Notfound'
 import { Route,Routes} from 'react-router-dom'
export default class App extends Component {
  render() {
    return (
      <div>
      <Navbar/>
      <Header/>
      <Routes>
      <Route path='/' element={<Portfolio/>}></Route>
      <Route path='portfolio' element={<Portfolio/>}></Route>
      <Route path='about' element={<About/>}></Route>
      <Route path='contact' element={<Contact/>}></Route>
      <Route path='*' element={<Notfound/>}></Route>
      </Routes>
      <Footer/>
      </div>
    );
  }
}
