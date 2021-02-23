import React from 'react'
import back from '../images/back-arrow.png'
import next from "../images/next-arrow.png"
import './arrows.css'
const Arrows = () =>{
    return(
        <div className="arrow">
            <img src={back}/>
            <img src={next}/>
        </div>
    );
}
export default Arrows