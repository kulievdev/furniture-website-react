import lockImg from "../../../../assets/images/lock.svg";
import styled from "styled-components";

const NewsletterSection = styled.section``;

const NewsletterSectionContainer = styled.div`
    max-width: 160rem;
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 14rem 2rem;
    flex-direction: column;
    gap: var(--space-58);

    @media (min-width: 500px) {
        padding: 14rem 5rem;
    }

    @media (min-width: 570px) {
        padding: 14rem 10rem;
    }

    @media (min-width: 875px) {
        padding: 14rem 25rem;
    }

    @media (min-width: 1100px) {
        padding: 14rem 35rem;
    }

    @media (min-width: 1400px) {
        padding: 14rem 45rem;
    }
`;

const NewsletterHeading = styled.h2`
    color: var(--dark-navy);
    font-size: var(--space-42);
    font-weight: 600;
    line-height: var(--space-50);
    letter-spacing: -0.1rem;
`;

const NewsletterDescription = styled.p`
    color: var(--dark-navy);
    font-size: var(--space-18);
    font-style: normal;
    font-weight: 400;
    line-height: var(--space-30);
    opacity: 0.7;
`;

const NewsletterCtaWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    flex-direction: column;
    gap: var(--space-30);
    @media (min-width: 750px) {
        flex-direction: row;
        gap: 0;
    }
`;

const NewsletterEmail = styled.input`
    padding: 2rem 0 2rem 2.8rem;
    border: 0.1rem solid var(--gray);
    border-radius: var(--space-10);
    color: var(--dark-navy);
    font-size: var(--space-18);
    font-weight: 400;
    line-height: var(--space-30);

    @media (min-width: 750px) {
        border-top-left-radius: var(--space-10);
        border-bottom-left-radius: var(--space-10);
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        padding: 2rem 21rem 2rem 2.8rem;
    }
`;

const NewsletterButton = styled.button`
    padding: var(--space-20) var(--space-48);
    background-color: var(--regular-green);
    color: var(--pure-white);
    font-size: var(--space-14);
    font-weight: 600;
    line-height: var(--space-22);
    letter-spacing: 0.4rem;
    text-transform: uppercase;
    border: none;
    border-radius: var(--space-10);

    cursor: pointer;

    @media (min-width: 750px) {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-top-right-radius: var(--space-10);
        border-bottom-right-radius: var(--space-10);
    }
`;

const NewsletterFooter = styled.div`
    display: flex;
    gap: var(--space-20);
`;

const LockImage = styled.img``;

const NewsletterFooterText = styled(NewsletterDescription)``;

const Newsletter = () => {
    return (
        <NewsletterSection id="newsletter">
            <NewsletterSectionContainer>
                <NewsletterHeading>
                    Subscribe to our <br />
                    newsletter to get updated
                </NewsletterHeading>
                <NewsletterDescription>
                    Get our latest update on your inbox. With lots of unique
                    blocks, you can easily build a page without coding. Build
                    your next consultancy website within few minutes.
                </NewsletterDescription>
                <NewsletterCtaWrapper>
                    <NewsletterEmail
                        type="email"
                        placeholder="Enter email address"
                    />
                    <NewsletterButton type="submit">Subscribe</NewsletterButton>
                </NewsletterCtaWrapper>
                <NewsletterFooter>
                    <LockImage src={lockImg} alt="Lock Image" />
                    <NewsletterFooterText>
                        We don't spam at all, our promise!
                    </NewsletterFooterText>
                </NewsletterFooter>
            </NewsletterSectionContainer>
        </NewsletterSection>
    );
};

export default Newsletter;
