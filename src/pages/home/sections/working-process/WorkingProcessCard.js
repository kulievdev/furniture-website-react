import styled from "styled-components";
import OrangeBar from "../../../../design-system/OrangeBar/OrangeBar";

const WorkingProcessCardWrapper = styled.div`
    display: flex;
    gap: var(--space-80);
    justify-content: space-between;
    align-items: center;
`;
const StepNumber = styled.span`
    width: calc(((36 * 100) / 1431) * 1%);
    color: var(--regular-green);
    font-size: var(--space-28);
    font-weight: 600;
    letter-spacing: -0.05rem;
`;

const ProcessTitle = styled.h3`
    width: calc(((306 * 100) / 1431) * 1%);
    color: var(--dark-navy);
    font-size: var(--space-36);
    font-weight: 600;
    line-height: var(--space-46);
    letter-spacing: -0.1rem;
`;
const ProcessDescription = styled.p`
    width: calc(((416 * 100) / 1431) * 1%);
    font-size: var(--space-18);
    font-weight: 400;
    line-height: var(--space-30);
    opacity: 0.6;
`;
const ProcessCtaWrapper = styled.div`
    width: calc(((179 * 100) / 1431) * 1%);
    display: flex;
    align-items: center;
    gap: var(--space-28);
`;
const ProcessCtaText = styled.p`
    color: var(--dark-navy);
    font-size: var(--space-14);
    font-weight: 600;
    line-height: var(--space-22);
    letter-spacing: 0.4rem;
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
        </WorkingProcessCardWrapper>
    );
};

export default WorkingProcessCard;
