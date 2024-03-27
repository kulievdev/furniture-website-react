import styled from "styled-components";
import OrangeBar from "../../../../design-system/OrangeBar/OrangeBar";

const WorkingProcessCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-40);

    @media (min-width: 1220px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`;
const StepNumber = styled.span`
    color: var(--regular-green);
    font-size: var(--space-28);
    line-height: var(--space-46);
    font-weight: 600;
    letter-spacing: -0.05rem;

    @media (min-width: 1220px) {
        width: calc(((36 * 100) / 1431) * 1%);
    }
`;

const ProcessTitle = styled.h3`
    color: var(--dark-navy);
    font-size: var(--space-36);
    font-weight: 600;
    line-height: var(--space-46);
    letter-spacing: -0.1rem;

    @media (min-width: 1220px) {
        width: calc(((306 * 100) / 1431) * 1%);
    }
`;
const ProcessDescription = styled.p`
    font-size: var(--space-18);
    font-weight: 400;
    line-height: var(--space-30);
    opacity: 0.6;

    @media (min-width: 800px) {
        width: 70%;
    }

    @media (min-width: 1220px) {
        width: calc(((416 * 100) / 1431) * 1%);
    }
`;
const ProcessCtaWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: var(--space-28);

    @media (min-width: 1220px) {
        width: calc(((179 * 100) / 1431) * 1%);
    }
`;
const ProcessCtaText = styled.p`
    color: var(--dark-navy);
    font-size: var(--space-14);
    font-weight: 600;
    line-height: var(--space-22);
    letter-spacing: 0.4rem;
`;

const DashedLine = styled.div`
    border: 0.05rem solid #333;
    opacity: 0.17;

    @media (min-width: 1220px) {
        display: none;
    }
`;

const WorkingProcessCard = (props) => {
    return (
        <WorkingProcessCardWrapper className="steps-wrapper">
            <StepNumber>{props.number}</StepNumber>
            <ProcessTitle>{props.title}</ProcessTitle>
            <ProcessDescription>{props.description}</ProcessDescription>
            <ProcessCtaWrapper>
                <OrangeBar />
                <ProcessCtaText>Learn More</ProcessCtaText>
            </ProcessCtaWrapper>
            <DashedLine />
        </WorkingProcessCardWrapper>
    );
};

export default WorkingProcessCard;
