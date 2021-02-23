import './shop.css'
import React from 'react'
import animal from '../images/animal.jpg'
import age from '../images/age.jpg'
import devil from '../images/devil.png'
import mountain from '../images/mountain.jpg'
import hard from '../images/hard.jpg'
import touch from '../images/touch.jpg'
function Products() {
    return (
        <div className="products">
            <div className="shirts">
            <h1>My Products</h1>
            <img src={animal}/>
            Animal Shirt :<input type="checkbox" value="Animal Shirt"/>
            <img src={age}/>
            Age Shirt :<input type="checkbox" value="Age Shirt"/>
            <img src={devil}/>
            Devil Shirt : <input type="checkbox" value="Devil Shirt"/>
            <img src={mountain}/>
            Mountain Shirt :<input type="checkbox" value="Mountain Shirt"/>
            <img src={hard}/>
            Hardcore Shirt :<input type="checkbox" value="Hardcore Shirt"/>
            <img src={touch}/>
            Touch Shirt :<input type="checkbox" value="Touch Shirt"/>
            </div> 
        </div>
    )
}

export default Products
