import { Link } from "react-router-dom";
import Logo from "../images/logoNewY.png";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
const Footer = () => {
    return (
        <footer>
            <div className="container footer-container">
                <article>
                    <Link to="/" className="logo">
                        <img src={Logo} alt="" />
                    </Link>
                    <p>
                        "Unleash Your Potential, Sculpt Your Future: Step into
                        BIG FOOT - Where Every Workout is a Victory, and Every
                        Drop of Sweat Tells Your Story.
                    </p>
                    <div className="footer-socials">
                        {/* linkedin */}
                        <a
                            href="https://linkedin.com/"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <FaLinkedin />
                        </a>
                        {/* facebook */}
                        <a
                            href="https://facebook.com/"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <FaFacebook />
                        </a>
                        {/* twitter */}
                        <a
                            href="https://twitter.com/"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <AiOutlineTwitter />
                        </a>
                        {/* instagram */}
                        <a
                            href="https://instagram.com/"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <AiFillInstagram />
                        </a>
                    </div>
                </article>
                <article>
                    <h4>Permalinks</h4>
                    <Link to="/about">About</Link>
                    <Link to="/plans">Plans</Link>
                    <Link to="/trainers">Trainers</Link>
                    <Link to="/gallery">Gallery</Link>
                    <Link to="/contact">Contact</Link>
                </article>
                <article>
                    <h4>Insights</h4>
                    <Link to="/s">Blog</Link>
                    <Link to="/s">Case Studies</Link>
                    <Link to="/s">Events</Link>
                    <Link to="/s">Communities</Link>
                    <Link to="/s">FAQs</Link>
                </article>
                <article>
                    <h4>Get In Touch</h4>
                    <Link to="/contact">Contact</Link>
                    <Link to="/s">Suport</Link>
                </article>
            </div>
            <div className="footer-copyright">
                <small>2023</small>
            </div>
        </footer>
    );
};

export default Footer;
