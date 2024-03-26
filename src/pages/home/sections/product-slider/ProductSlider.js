import arrowLeftImg from "../../../../assets/images/arrow-left.svg";
import arrowRightImg from "../../../../assets/images/arrow-right.svg";
import lightChairImg from "../../../../assets/images/chair-light.jpeg";
import darkChairImg from "../../../../assets/images/chair-dark.jpeg";
import couchImg from "../../../../assets/images/couch.jpeg";
import styled from "styled-components";
import ImgCard from "./ImgCard";

const ProductSliderSection = styled.section``;

const ProductSliderSectionContainer = styled.div`
    max-width: 160rem;
    margin: 0 auto;
    padding: 10rem 15rem;
`;

const ProductSliderHeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: var(--space-50);
`;

const ProductSliderHeading = styled.h2`
    color: var(--dark-navy);
    font-size: var(--space-42);
    font-style: normal;
    font-weight: 600;
    line-height: var(---space-50);
    letter-spacing: -0.1rem;
`;

const ProductSliderArrowWrapper = styled.div`
    display: flex;
    gap: var(--space-22);
`;

const ProductSliderArrow = styled.img``;

const ProductSliderImageCardWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: var(--space-18);
    height: 65rem;
`;

const LastImageCardWrapper = styled.div`
    position: relative;
    display: flex;
`;

const LastImageCardPriceTagWrapper = styled.div`
    display: flex;
    background-color: var(--pure-white);
    position: absolute;
    border-radius: var(--space-10);
    left: var(--space-16);
    top: 52rem;
    padding: var(--space-24) var(--space-30);
`;

const PriceTitleWrapper = styled.div`
    margin-right: 5rem;
`;

const Price = styled.span`
    color: var(--orange-red);
    font-size: var(--space-32);
    font-weight: 600;
    line-height: var(--space-42);
    letter-spacing: -0.1rem;
`;

const Title = styled.p`
    color: var(--dark-navy);
    font-size: var(--space-14);
    font-weight: 600;
    line-height: var(--space-22);
    letter-spacing: 0.4rem;
    text-transform: uppercase;
`;

const ProductSlider = () => {
    return (
        <ProductSliderSection>
            <ProductSliderSectionContainer>
                <ProductSliderHeaderWrapper>
                    <ProductSliderHeading>
                        Explore our exclusive design.
                    </ProductSliderHeading>
                    <ProductSliderArrowWrapper>
                        <ProductSliderArrow
                            src={arrowLeftImg}
                            alt="Arrow Left"
                        />
                        <ProductSliderArrow
                            src={arrowRightImg}
                            alt="Arrow Right"
                        />
                    </ProductSliderArrowWrapper>
                </ProductSliderHeaderWrapper>
                <ProductSliderImageCardWrapper>
                    <ImgCard img={darkChairImg} alt="Dark Chair" />
                    <ImgCard img={lightChairImg} alt="Light Chair" />
                    <LastImageCardWrapper>
                        <ImgCard img={couchImg} name="Couch" />
                        <LastImageCardPriceTagWrapper>
                            <PriceTitleWrapper>
                                <Price>$271</Price>
                                <Title>White Phoenix</Title>
                            </PriceTitleWrapper>
                            <ProductSliderArrow src={arrowRightImg} />
                        </LastImageCardPriceTagWrapper>
                    </LastImageCardWrapper>
                </ProductSliderImageCardWrapper>
            </ProductSliderSectionContainer>
        </ProductSliderSection>
    );
};

export default ProductSlider;
