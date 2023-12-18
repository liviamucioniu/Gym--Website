import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/aboutNew.jpg";
import "./About.css";

const About = () => {
    return (
        <>
            <Header title="About Us" image={HeaderImage}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                assumenda corporis cupiditate tempore qui.
            </Header>

            <section className="about-story">
                <div className="container about-story-container">
                    <div className="about-section-image">
                        <img src={StoryImage} alt="" />
                    </div>
                    <div className="about-section-content">
                        <h1>Our Story</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Cumque repellat laudantium enim ipsum dolor
                            sit amet consectetur adipisicing elit. Cumque
                            repellat laudantium enim.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Iste optio perspiciatis possimus ipsum dolor
                            sit amet consectetur adipisicing elit. Cumque
                            repellat laudantium enim.
                        </p>
                        <p>
                            Mipsum dolor sit amet consectetur adipisicing elit.
                            Cumque repellat laudantium enim.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
