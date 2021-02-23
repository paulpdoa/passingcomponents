import React from 'react'
import './heading.css'
import model from '../images/img.png'
import Socialmedia from './Socialmedia'
import Arrows from '../Components/Arrows'
const Heading = () => {
    return(
        <div className="header">
            <a href="" className="btn">2020 Collections</a>
            <h1>You should always<br></br> feel pretty</h1>
            <p>Clothes that are sure to heatup</p>
        
            <div>
            <img src={model} className="model-img"/>
            <Arrows/>
            <Socialmedia/>
        </div>    
        
        </div>
    );
}
export default Heading