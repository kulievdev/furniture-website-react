import "./Features.css";
import ellipseMintImg from "../../../../assets/images/ellipse-mint.png";
import ellipsePinkImg from "../../../../assets/images/ellipse-pink.png";
import ellipseBlueImg from "../../../../assets/images/ellipse-blue.png";

import heartImg from "../../../../assets/images/heart.svg";
import zapImg from "../../../../assets/images/zap.svg";
import headphonesImg from "../../../../assets/images/headphones.svg";

const Feature = (props) => {
    return (
        <div className="features-card">
            <div className="features-image-wrapper">
                <img src={props.img} alt="" />
                <img src={props.svg} alt="" />
            </div>
            <div className="features-text-wrapper">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    );
};

const Features = () => {
    return (
        <section id="features">
            <div className="features-content container">
                <Feature
                    img={ellipseMintImg}
                    svg={heartImg}
                    title="Best Quality"
                    description="Uncompromising excellence delivered in every product
                            and experience."
                />

                <Feature
                    img={ellipsePinkImg}
                    svg={zapImg}
                    title="Fastest Delivery"
                    description="Swift and efficient shipping to bring your order to
                    you promptly."
                />

                <Feature
                    img={ellipseBlueImg}
                    svg={headphonesImg}
                    title="Great Support"
                    description="Exceptional customer service to assist and guide you
                    effectively."
                />
            </div>
        </section>
    );
};

export { Features };
