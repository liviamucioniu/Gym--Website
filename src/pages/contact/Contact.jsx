import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_2.jpg";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import "./Contact.css";

const Contact = () => {
    return (
        <>
            <Header title="Get In Touch" image={HeaderImage}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolorem cumque doloribus quam consectetur dignissimos corporis!
            </Header>
            <section className="contact">
                <div className="container contact-container">
                    <div className="contact-wrapper">
                        <a href="mailto:support@gorilagym.com">
                            <MdEmail />
                        </a>
                        <a href="mailto:support@gorilagym.com">
                            <BsMessenger />
                        </a>
                        <a href="mailto:support@gorilagym.com">
                            <IoLogoWhatsapp />
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
