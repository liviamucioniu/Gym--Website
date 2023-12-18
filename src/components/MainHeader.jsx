import React from "react";
import { Link } from "react-router-dom";
import Image from "../images/main_header.png";

const MainHeader = () => {
    return (
        <header className="main-header">
            <div className="container main-header-container">
                {/* LEFT-SIDE */}
                <div className="main-header-left">
                    <h1>Every day is a choice.</h1>
                    <p>
                        Elevate your wellness journey with top-notch equipment,
                        expert guidance, and a motivating atmosphere.
                    </p>
                    <Link to="/plans" className="btn lg">
                        Get Started
                    </Link>
                </div>
                {/* RIGHT-SIDE */}
                <div className="main-header-right">
                    <div className="main-header-circle"></div>
                    <div className="main-header-image">
                        <img src={Image} alt="" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default MainHeader;
