import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png"
const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">Voluptatem accusantium dolerenque laudantium, total rem
                        aperiam, eaque ipsa quac ab illo inventore veritatis et 
                        quasi architexto beatax vitac dicta sunt explicabo eaque
                        ispa quawe ab illo.
                    </div>
                </div>

                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            Kayoloram Road, Consectetur, Adipisicing, Amert,
                            Kerala, 670031
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: 8913-3134-858</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: soundWave@gmail.com</div>
                    </div>
                </div>

                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Headphones</span>
                    <span className="text">Smart Watches</span>
                    <span className="text">Bluetooth Speakers</span>
                    <span className="text">Wireless Earbuds</span>
                    <span className="text">Home Theatre</span>
                    <span className="text">Projectors</span>
                </div>

                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>

            
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">
                        SOUNDWAVE 2023 Created By Sohan Mohanty.
                    </div>
                    <img src={Payment} alt="Payment options" />
                </div>
            </div>
        </footer>
    ); 
};

export default Footer;
