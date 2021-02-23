import React from 'react'
import './navigation.css'
import logo from "../images/logo.png"
import cart from '../images/cart.png'
import {Link} from 'react-router-dom'

const Navigation = () => {
    return(
        <div className="topnav">
            <img src={logo} className="logo"/>
            <nav>
                <ul>
                    <Link to="/">
                    <li><a href="">Home</a></li>
                    </Link>
                    <Link to="/shop">             
                    <li><a href="">Order</a></li>
                    </Link>
                    <Link to="/shop">
                    <li><a href="">Shop</a></li>
                    </Link>
                    <Link to="/about">
                    <li><a href="">About</a></li>
                    </Link>
                </ul>
            </nav>
            <Link to="/shop">
            <img src={cart} className="cart"/>
            </Link>
      </div>
    )
}
export default Navigation
