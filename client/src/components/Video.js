import React from "react";
import vimeo from "../images/vimeo.mp4";

const Video = () => {
    return (
        <div className="video">
            <h1>Clearocity removes eye bags in minutes</h1>
            <div className="iframe-container">
                <video id="vid" className="responsive-iframe" autoPlay muted controls>
                    <source src={vimeo} type="video/mp4" />
                </video>
            </div>
            <p>Make sure your sound is turned on. Please waitup to 10 seconds for the video to load.</p>
        </div>

        
    )
}

export default Video
