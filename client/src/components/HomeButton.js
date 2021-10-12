import React from "react";
import { Link } from "@reach/router";

const HomeButton = () => {
    return(
        <div className="homebutton">
            <Link to="/" className="link">Clearocity</Link>
        </div>
    )
}

export default HomeButton