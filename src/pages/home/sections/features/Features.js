import heartImg from "../../../../assets/images/heart.svg";
import zapImg from "../../../../assets/images/zap.svg";
import headphonesImg from "../../../../assets/images/headphones.svg";
import Feature from "./Feature";
import styled from "styled-components";

const FeaturesSection = styled.section``;

const FeaturesSectionContainer = styled.div`
    max-width: 160rem;
    margin: 0 auto;
    padding: 10rem 2rem;

    @media (min-width: 500px) {
        padding: 10rem 5rem;
    }
    @media (min-width: 800px) {
        padding: 10rem 15rem;
    }
`;

const FeaturesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-60);
    margin-bottom: var(--space-80);

    @media (min-width: 1000px) {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (min-width: 1250px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`;

const DashedLine = styled.div`
    border: var(--space-2) dashed #333;
    opacity: 0.17;
`;

const Features = () => {
    return (
        <FeaturesSection id="features">
            <FeaturesSectionContainer>
                <FeaturesWrapper>
                    <Feature
                        imgSrc={heartImg}
                        heading="Best Quality"
                        description="Uncompromising excellence delivered in every product and experience."
                        backgroundColor="var(--light-green)"
                    />

                    <Feature
                        imgSrc={zapImg}
                        heading="Fastest Delivery"
                        description="Swift and efficient shipping to bring your order to you promptly."
                        backgroundColor="var(--baby-pink)"
                    />

                    <Feature
                        imgSrc={headphonesImg}
                        heading="Great Support"
                        description="Exceptional customer service to assist and guide you effectively."
                        backgroundColor="var(--light-blue)"
                    />
                </FeaturesWrapper>
                <DashedLine />
            </FeaturesSectionContainer>
        </FeaturesSection>
    );
};

export default Features;
