import React from 'react'
import './Hero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCoins} from '@fortawesome/free-solid-svg-icons'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import hero_img from '../Assets/hero_img.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>New Arrivals</h2>
            <div>
                <div className='hero-hand-icon'>
                <p>New</p>
                <FontAwesomeIcon icon={faCoins} className='hero-hand-icon-img' size='4x' color='gold'/>
                </div>
                <p>Items</p>
                <p>For Everyone</p>
            </div>
            <div className='hero-latest-button'>
                <div>Latest Item</div>
                <FontAwesomeIcon icon={faArrowRight} />
            </div>
        </div>
        <div className='hero-right'>
            <img src={hero_img} alt="" />
        </div>

    </div>
    
  )
}

export default Hero
