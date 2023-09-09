import React from 'react'
import { Link } from 'react-router-dom'
import Contact from '../Contact/Contact'
import './footer.css'
const Footer = () => {
  return (
    
    <div className='container-fluid' id='footer'>

      <div className='top'>
        <div id='itemy'>
          <h1>Categories</h1>
          <Link className='direction' to='/products/1'>Women</Link>
          <Link className='direction' to='/products/2'>Men</Link>
          <Link className='direction'>Shoes</Link>
          <Link className='direction'>Accessories</Link>
        </div>
        <div id='itemy'>
          <h1>Links</h1>
          <Link className='direction'>Terms of usage</Link>
          <Link className='direction' to='/about'>About</Link>
          <Link className='direction' to='/contact'>Contact</Link>
          <Link className='direction'>Cookies</Link>

        </div>

      </div>
      <div className='bottom'>
          <img src='imgs/payment.png' id='paypic'/>

      </div>
    </div>
  )
}

export default Footer
