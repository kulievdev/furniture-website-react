import "./ProductSlider.css";
import arrowLeftImg from "../../../../assets/images/arrow-left.svg";
import arrowRightImg from "../../../../assets/images/arrow-right.svg";
import lightChairImg from "../../../../assets/images/chair-light.jpeg";
import darkChairImg from "../../../../assets/images/chair-dark.jpeg";
import couchImg from "../../../../assets/images/couch.jpeg";

const ImgCard = (props) => {
    return (
        <div className="img-card">
            <img src={props.img} alt="" />
        </div>
    );
};

const ProductSlider = () => {
    return (
        <section id="product-slider">
            <div className="product-slider-content container">
                <div className="long-dashed-line"></div>

                <div className="product-slider-top">
                    <h2>Explore Our exclusive design.</h2>
                    <div className="arrow-images">
                        <img src={arrowLeftImg} alt="" />
                        <img
                            className="arrow-right"
                            src={arrowRightImg}
                            alt=""
                        />
                    </div>
                </div>
                <div className="product-slider-bottom">
                    <ImgCard img={lightChairImg} />
                    <ImgCard img={darkChairImg} />
                    <div className="img-card last-image-card">
                        <img src={couchImg} alt="" />
                        <div className="price-tag">
                            <span>$271</span>
                            <p>White Phonix</p>
                            <img src={arrowRightImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { ProductSlider };
