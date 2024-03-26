import styled from "styled-components";

const FeatureWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: var(--space-38);
`;

const FeatureIconWrapper = styled.div`
    width: 40%;
    position: relative;
    width: var(--space-80);
    height: var(--space-80);
    border-radius: 50%;
    background-color: ${(props) => props.$backgroundColor};
`;

const FeatureImage = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const FeatureTextWrapper = styled.div`
    width: 60%;

    display: flex;
    flex-direction: column;
    gap: var(--space-16);
`;

const FeatureHeading = styled.h3`
    color: var(--dark-navy);
    font-size: var(--space-24);
    font-weight: 600;
    line-height: var(--space-32);
    letter-spacing: -0.03rem;
`;

const FeatureDescription = styled.p`
    font-size: var(--space-16);
    color: var(--dark-navy);
    font-weight: 400;
    line-height: var(--space-28);
    opacity: 0.8;
`;

const Feature = (props) => {
    return (
        <FeatureWrapper>
            <FeatureIconWrapper $backgroundColor={props.backgroundColor}>
                <FeatureImage src={props.imgSrc} />
            </FeatureIconWrapper>
            <FeatureTextWrapper>
                <FeatureHeading>{props.heading}</FeatureHeading>
                <FeatureDescription>{props.description}</FeatureDescription>
            </FeatureTextWrapper>
        </FeatureWrapper>
    );
};

export default Feature;
