import SectionHeader from "./SectionHeader";
import { ImQuotesLeft } from "react-icons/im";
import Card from "../UI/Card";
import {
    IoIosArrowDropleftCircle,
    IoIosArrowDroprightCircle,
} from "react-icons/io";
import { testimonials } from "../data";
import { useState } from "react";

const Testimonials = () => {
    const [index, setIndex] = useState(0);
    const { name, quote, job, avatar } = testimonials[index];

    const prevTestimonialHandler = () => {
        setIndex((prev) => prev - 1);

        if (index <= 0) {
            setIndex(testimonials.length - 1);
        }
    };

    const nextTestimonialHandler = () => {
        setIndex((prev) => prev + 1);

        if (index >= testimonials.length - 1) {
            setIndex(0);
        }
    };

    return (
        <section className="testimonials">
            <div className="container testimonials-container">
                <SectionHeader
                    icon={<ImQuotesLeft />}
                    title="Testimonials"
                    className="testimonials-head"
                />
                <Card className="testimonials">
                    <div className="testimonial-avatar">
                        <img src={avatar} alt="" />
                    </div>
                    <p className="testimonials-quote">{`"${quote}"`}</p>
                    <h5>{name}</h5>
                    <small className="testimonial-title">{job}</small>
                </Card>
                <div className="testimonials-btn-container">
                    <button
                        className="testimonials-btn"
                        onClick={prevTestimonialHandler}
                    >
                        <IoIosArrowDropleftCircle />
                    </button>
                    <button
                        className="testimonials-btn"
                        onClick={nextTestimonialHandler}
                    >
                        <IoIosArrowDroprightCircle />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
