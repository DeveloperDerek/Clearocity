import React from "react";
import Faq from "../components/Faq";
import Guarantee from "../components/Guarantee";
import PriceTier from "../components/PriceTier";
import Testimonial from "../components/Testimonial";
import Video from "../components/Video";
import Navbar from "../components/Navbar";


const LandingPage = () => {
    return (
        <div>
            <Navbar />
            <Video />
            <PriceTier />
            <Guarantee />
            <Testimonial />
            <Faq />
        </div>
    )
}

export default LandingPage