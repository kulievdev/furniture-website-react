import heartImg from "../../../../assets/images/heart.svg";
import zapImg from "../../../../assets/images/zap.svg";
import headphonesImg from "../../../../assets/images/headphones.svg";
import Feature from "./Feature";
import styled from "styled-components";

const FeaturesSection = styled.section``;

const FeaturesSectionContainer = styled.div`
    max-width: 160rem;
    margin: 0 auto;
    padding: 10rem 12rem;
    display: flex;
    gap: var(--space-60);
    justify-content: space-between;
`;

const Features = () => {
    return (
        <FeaturesSection id="features">
            <FeaturesSectionContainer>
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
            </FeaturesSectionContainer>
        </FeaturesSection>
    );
};

export default Features;
