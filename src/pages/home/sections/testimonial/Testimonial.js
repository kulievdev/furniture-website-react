import "./Testimonial.css";
import ladyImg from "../../../../assets/images/lady-drinking-coffee.jpeg";
import whiteEllipseImg from "../../../../assets/images/ellipse-white.png";
import playImg from "../../../../assets/images/play.png";

const Testimonial = () => {
    return (
        <section id="testimonial">
            <div className="testimonial-content container">
                <div className="testimonial-left">
                    <blockquote>
                        “It was super easy to share my unique concept. I got
                        exactly what I ordered. Great service!”
                    </blockquote>
                    <cite>
                        <div className="cite-person-wrapper">
                            <hr />
                            <p>Jenny Wilson</p>
                        </div>
                        <span>St. Celina, Delaware</span>
                    </cite>
                </div>
                <div className="testimonial-right">
                    <img className="lady-image" src={ladyImg} alt="" />

                    <div className="play-button-image-wrapper">
                        <img src={whiteEllipseImg} alt="" />
                        <img src={playImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Testimonial };
