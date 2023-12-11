import { Link, NavLink } from "react-router-dom";
import Logo from "../images/logo.png";
import { links } from "../data";
import { HiBars3 } from "react-icons/hi2";
import { MdOutlineClose } from "react-icons/md";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false);
    return (
        <nav>
            <div className="container nav-container">
                <Link
                    to="/"
                    className="logo"
                    onClick={() => setIsNavShowing(false)}
                >
                    <img src={Logo} alt="navlogo" />
                </Link>
                <ul
                    className={`nav-links ${
                        isNavShowing ? "show-nav" : "hide-nav"
                    }`}
                >
                    {links.map(({ name, path }, index) => {
                        return (
                            <li key={index}>
                                <NavLink
                                    to={path}
                                    className={({ isActive }) =>
                                        isActive ? "active-nav" : ""
                                    }
                                    onClick={() =>
                                        setIsNavShowing((prev) => !prev)
                                    }
                                >
                                    {name}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
                <button
                    className="nav-toggle-btn"
                    onClick={() => setIsNavShowing((prev) => !prev)}
                >
                    {isNavShowing ? <MdOutlineClose /> : <HiBars3 />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
