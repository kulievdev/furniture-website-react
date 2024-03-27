import styled from "styled-components";
import WorkingProcessCard from "./WorkingProcessCard";

const WorkingProcessSection = styled.section``;
const WorkingProcessSectionContainer = styled.div`
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
const WorkingProcessHeading = styled.h2`
    color: var(--dark-navy);
    font-size: var(--space-18);
    font-weight: 600;
    line-height: var(--space-30);
    letter-spacing: 0.4rem;
    opacity: 0.7;
    margin-bottom: var(--space-110);
    text-transform: uppercase;
`;

const WorkingProcessCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-70);

    @media (min-width: 1220px) {
        gap: var(--space-110);
    }
`;

const WorkingProcess = () => {
    return (
        <WorkingProcessSection id="working-process">
            <WorkingProcessSectionContainer>
                <WorkingProcessHeading>
                    Our working process
                </WorkingProcessHeading>
                <WorkingProcessCardWrapper>
                    <WorkingProcessCard
                        number="01."
                        title="Discuss the concept with us."
                        description="Engage in an insightful conversation with our team to explore your project's vision, goals, and desired outcomes."
                    />
                    <WorkingProcessCard
                        number="02."
                        title="Confirm the provided design."
                        description="Once you provide us with the design you envision, our experienced team will meticulously review and validate every aspect."
                    />
                    <WorkingProcessCard
                        number="03."
                        title="Get delivered the furniture on time."
                        description="Our dedicated team prioritizes punctuality and efficient logistics to ensure that your furniture arrives
                    precisely."
                    />
                </WorkingProcessCardWrapper>
            </WorkingProcessSectionContainer>
        </WorkingProcessSection>
    );
};

export default WorkingProcess;
