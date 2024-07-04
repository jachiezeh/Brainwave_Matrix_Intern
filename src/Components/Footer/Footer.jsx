import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDragon} from '@fortawesome/free-solid-svg-icons'
import {faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import {faTelegram} from '@fortawesome/free-brands-svg-icons'
import {faDiscord} from '@fortawesome/free-brands-svg-icons'



const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <FontAwesomeIcon icon={faDragon} size='6x'/>
            <p>Junk Lords</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icon-container">
                <FontAwesomeIcon icon={faWhatsapp} size='2x'color='#5F374B'/>
            </div>
            <div className="footer-icon-container">
                <FontAwesomeIcon icon={faTelegram} size='2x' color='#5F374B'/>
            </div>
            <div className="footer-icon-container">
                <FontAwesomeIcon icon={faDiscord} size='2x' color='#5F374B'/>
            </div>       
        </div>
        <div className="footer-copyright">
            <hr />
            <p> Copyright @ 2024 - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer