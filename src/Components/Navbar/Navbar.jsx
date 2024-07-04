import React, { useState } from 'react'
import './Navbar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {faDragon} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [menu,setMenu] = useState("shop");

  return (
    <div className='navbar'>
        <div className='nav-logo'>
           <FontAwesomeIcon icon={faDragon} size='3x'/>
           <p>Junk Lords</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none', color:'#5F374B'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("collectibles")}}><Link style={{textDecoration:'none', color:'#5F374B'}} to='/collectibles'>Collectible</Link>{menu==="collectibles"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("utilities")}}><Link style={{textDecoration:'none', color:'#5F374B'}} to='/utilities'>Utility</Link>{menu==="utilities"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><FontAwesomeIcon icon={faShoppingCart} size='2x'/></Link>
            <div className='nav-cart-count'>0</div>
        </div>
    </div>
  )
}

export default Navbar