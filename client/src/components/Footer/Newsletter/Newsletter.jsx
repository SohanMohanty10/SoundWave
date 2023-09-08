import React from "react";
import { useState } from "react";
import{
    //FaFacebooF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";

import "./Newsletter.scss";
import Subscription from "./subscription";

const Newsletter = () => {
    const [showSubscribe, setSubscribe] = useState(false);
    return ( 
        <>
            <div className="newsletter-section">
                <div className="newsletter-content">
                    <span className="small-text">Newsletter</span>
                    <span className="big-text">Sign up for latest updates and offers</span>
                    <div className="form">
                        <input type="text" placeholder="Email Address" />
                        <button onClick={() => setSubscribe(true)}>Subscribe</button>
                    </div>
                    <div className="text">Will be used in accordance with our Privacy Policy.</div>
                    <div className="social-icons">
                        <div className="icon">
                            <FaInstagram size={14} />
                        </div>
                        <div className="icon">
                            <FaLinkedinIn size={14} /> 
                        </div>
                        <div className="icon">
                            <FaTwitter size={14} />
                        </div>
                    </div>
                </div>
            </div>
            {showSubscribe && <Subscription />}
        </>
    );
};

export default Newsletter;
