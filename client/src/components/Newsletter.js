import React, { useState } from "react";
import axios from "axios";

const Newsletter = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [sent, setSent] = useState(false);

    const addEmail = (e) => {
        e.preventDefault();
        const data = { email }
        axios
        .post("http://localhost:9000/api/mailchimp/addtonewsletter", data)
        .then(() => {
            setSent(true);
        })
        .catch((err) => setError(err.response.data.error))
    }

    return(
        <div className="newsletter_bg">
            <form className="newsletter" onSubmit={addEmail}>
                <h5>News & Updates</h5>
                {sent ?
                <p>Thank you for signing up</p>
                :
                <div>
                    <p>Sign up to get the latest on sales, new releases and more ...</p>
                    <input type="email" class="contact_email" required="" placeholder="Enter your email address..." value={email} onChange={(e) => setEmail(e.target.value)} />
                    <button>Sign up</button>
                </div>
                }
                {error ? <small className="error">{error}</small> : ""}
            </form>
        </div>
    )
}

export default Newsletter