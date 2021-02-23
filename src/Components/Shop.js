import Order from './Order'
import Products from './Products';
import React from 'react'
import './shop.css'

function Shop() {
    return (
        <div className="shop">
            <Order />
            <Products />
        </div>
    )
}

export default Shop
