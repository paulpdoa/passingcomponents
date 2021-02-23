import React from 'react'
import video from "../images/video.mp4";
import VideoPlayer from 'react-video-js-player'
import '../Components/about.css'
function About() {
    return (
        <div className="video">
           <video src={video} autoplay="true" width={1000}/>
        </div>
    )
}

export default About
