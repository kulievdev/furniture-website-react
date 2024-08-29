import playImg from "../../../../assets/images/play.png";
import ladyImg from "../../../../assets/images/lady-drinking-coffee.jpeg";
import styled from "styled-components";

const TestimonialSection = styled.section``;

const TestimonialSectionContainer = styled.div`
    @media (min-width: 1100px) {
        display: flex;
    }
`;

const TestimonialContent = styled.div`
    background-color: var(--orange-red);
    width: 100%;
    padding: 10rem 2rem;

    @media (min-width: 570px) {
        padding: 16rem 10rem;
    }

    @media (min-width: 730px) {
        padding: 24rem 18rem;
    }

    @media (min-width: 1100px) {
        width: 50%;
        padding: 12rem 6rem;
    }

    @media (min-width: 1140px) {
        padding: 16rem 10rem;
    }

    @media (min-width: 1300px) {
        padding: 20rem 14rem;
    }

    @media (min-width: 1610px) {
        padding: 24rem 18rem;
    }
`;

const TestimonialReview = styled.p`
    color: var(--pure-white);
    font-size: var(--space-42);
    font-weight: 600;
    line-height: var(--space-50);
    letter-spacing: -0.1rem;
    margin-bottom: var(--space-60);
`;

const TestimonialReviewerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
`;

const TestimonialReviewerNameWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: var(--space-18);
`;

const WhiteBar = styled.div`
    width: var(--space-40);
    height: 0.5rem;
    background-color: var(--pure-white);
    border: none;
    border-radius: 0.3rem;
`;

const TestimonialReviewerName = styled.span`
    color: var(--pure-white);
    font-size: var(--space-24);
    font-weight: 600;
    line-height: var(--space-32);
    letter-spacing: -0.03rem;
`;

const TestimonialReviewerLocation = styled.span`
    color: var(--pure-white);
    font-size: var(--space-18);
    padding-left: calc(var(--space-40) + var(--space-18));
    font-weight: 400;
    line-height: var(--space-30);
    opacity: 0.8;
`;

const TestimonialImageWrapper = styled.div`
    width: 100%;
    position: relative;

    @media (min-width: 1100px) {
        width: 50%;
    }
`;

const TestimonialImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const PlayButtonWrapper = styled.div`
    width: var(--space-96);
    height: var(--space-96);
    border: solid 0.4rem var(--pure-white);
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
`;

const PlayIcon = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Testimonial = () => {
    return (
        <TestimonialSection id="testimonial">
            <TestimonialSectionContainer>
                <TestimonialContent>
                    <TestimonialReview>
                        "It was super easy to share my unique concept. I got
                        exactly what I ordered. Great service!"
                    </TestimonialReview>
                    <TestimonialReviewerWrapper>
                        <TestimonialReviewerNameWrapper>
                            <WhiteBar />
                            <TestimonialReviewerName>
                                Jenny Wilson
                            </TestimonialReviewerName>
                        </TestimonialReviewerNameWrapper>
                        <TestimonialReviewerLocation>
                            St. Celina, Delaware
                        </TestimonialReviewerLocation>
                    </TestimonialReviewerWrapper>
                </TestimonialContent>
                <TestimonialImageWrapper>
                    <TestimonialImage src={ladyImg} />
                    <PlayButtonWrapper>
                        <PlayIcon src={playImg} />
                    </PlayButtonWrapper>
                </TestimonialImageWrapper>
            </TestimonialSectionContainer>
        </TestimonialSection>
    );
};

export default Testimonial;
