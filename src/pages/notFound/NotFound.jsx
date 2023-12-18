import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
    return (
        <section>
            <div className="container notfound-container">
                <h1>404:</h1>
                <h4>Gym page doing a quick cooldown...</h4>
                <h4>
                    While it chills, sprint back to the homepage for a workout
                    in pixels that won't break a sweat!
                </h4>
                <Link to="/" className="btn">
                    Go Back Home
                </Link>
            </div>
        </section>
    );
};

export default NotFound;
