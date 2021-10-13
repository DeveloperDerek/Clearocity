import React, { useState } from "react";

const Newsletter = () => {
    const [email, setEmail] = useState("");

    

    return(
        <div className="newsletter_bg">
            <form className="newsletter">
                <h5>News & Updates</h5>
                <p>Sign up to get the latest on sales, new releases and more ...</p>
                <input type="email" class="contact_email" required="" placeholder="Enter your email address..." value={email} onChange={(e) => setEmail(e.target.value)} />
                <button>Sign up</button>
            </form>
        </div>
    )
}

export default Newsletter