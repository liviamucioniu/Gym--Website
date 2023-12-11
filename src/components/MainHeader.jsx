import React from "react";
import { Link } from "react-router-dom";
import Image from "../images/main_header.png";

const MainHeader = () => {
    return (
        <header className="main-header">
            <div className="container main-header-container">
                {/* LEFT-SIDE */}
                <div className="main-header-left">
                    <h4>#100DaysOfWorkOut</h4>
                    <h1>Join The Legends Of The Fitness World</h1>
                    <p> Lorem sentium porro esse quos um porro esse quos!</p>
                    <Link to="/plans" className="btn lg">
                        Get Started
                    </Link>
                </div>
                {/* RIGHT-SIDE */}
                <div className="main-header-right">
                    <div className="main-header-circle"></div>
                    <div className="main-header-image"></div>
                    <img src={Image} alt="" />
                </div>
            </div>
        </header>
    );
};

export default MainHeader;
