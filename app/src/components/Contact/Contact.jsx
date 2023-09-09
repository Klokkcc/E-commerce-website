import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import './Contact.css'
const Contact = () => {
  return (
    <div className='container-fluid' id='contact'>
        <div className='wrapper'>
            <span>BE IN TOUCH WITH US:</span>
            <div className='mail'>
                <input type="text" id="input1" placeholder='Enter your e-mail...'/>
                <button id='joinbnt'>JOIN US</button>
            </div>
            <div className='iconss'>
                <InstagramIcon/>
                <FacebookIcon/>
                <TwitterIcon/>
                <TelegramIcon/>
            </div>
        </div>

      
    </div>
  )
}

export default Contact
