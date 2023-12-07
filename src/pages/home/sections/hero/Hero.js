import "./Hero.css";
import heroImg from "../../../../assets/images/hero.png";
import greenEllipseImg from "../../../../assets/images/green-ellipse.png";

const Hero = () => {
    return (
        <section id="hero">
            <div className="container">
                <div className="hero-section-content">
                    <div className="hero-left">
                        <div className="hero-image-wrapper">
                            <img className="chair" src={heroImg} alt="chair" />
                            <img
                                className="green-circle"
                                src={greenEllipseImg}
                                alt="green-ellipse"
                            />
                        </div>
                    </div>
                    <div className="hero-right">
                        <p>Quality Design For All</p>
                        <h1>
                            Bring back the classic look by using Whiter. Easy
                            home delivery!
                        </h1>
                        <p>
                            Rediscover the timeless allure of the past as Whiter
                            effortlessly revives the beloved vintage aesthetic.
                        </p>
                        <hr />
                        <p>Explore Our Products</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Hero };
