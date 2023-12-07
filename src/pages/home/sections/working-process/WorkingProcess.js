import "./WorkingProcess.css";

const WorkingProcessCard = (props) => {
    return (
        <div class="steps-wrapper">
            <span>{props.number}</span>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <hr />
            <span>Learn More</span>
        </div>
    );
};

const WorkingProcess = () => {
    return (
        <section id="working-process">
            <div class="working-process-content container">
                <h2>Our working process</h2>
                <WorkingProcessCard
                    number="01."
                    title="Discuss the Concept with us."
                    description="Engage in an insightful conversation with our team to
                        explore your project's vision, goals, and desired
                        outcomes."
                />
                <WorkingProcessCard
                    number="02."
                    title="Confirm the provided design."
                    description="Engage in an insightful conversation with our team to
                        explore your project's vision, goals, and desired
                        outcomes."
                />
                <WorkingProcessCard
                    number="03."
                    title="Get delivered the furniture on time."
                    description="Our dedicated team prioritizes punctuality and efficient
                    logistics to ensure that your furniture arrives
                    precisely."
                />
            </div>
        </section>
    );
};

export { WorkingProcess };
