import "./subscription.scss";
import { useState, useEffect } from "react";

const Subscription = () => {
    const [showPopup, setShowPopup] = useState(true); // State to handle visibility

    // Function to handle the "Return to home" button click
    const handleReturnToHome = () => {
        setShowPopup(false); // Set showPopup state to false to close the pop-up
    };

    useEffect(() => {
        if (!showPopup) {
            // Scroll to the top of the page when the pop-up disappears
            window.scrollTo(0, 0);
        }
    }, [showPopup]);


    return (
        // Conditionally render the subscription pop-up based on the "showPopup" state
        showPopup && (
            <div className="subscribe-panel">
                <div className="opac-layer"></div>
                <div className="subscribe-content">
                    <span className="big-text">Thank You For Subscribing!</span>
                    <span className="small-text">We'll reach out to you with all new offers and updates.</span>
                    <button onClick={handleReturnToHome}>Continue Shopping</button>
                </div>
            </div>
        )
    );
};

export default Subscription;
