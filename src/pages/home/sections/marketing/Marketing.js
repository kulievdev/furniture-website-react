import wifeHusbandImg from "../../../../assets/images/wife-husband.jpeg";
import styled from "styled-components";
import OrangeBar from "../../../../design-system/OrangeBar/OrangeBar";

const MarketingSection = styled.section`
    background-color: var(--pearl-white);
`;

const MarketingSectionContainer = styled.div`
    max-width: 160rem;
    margin: 0 auto;
    gap: 16rem;
    padding: 10rem 2rem;

    @media (min-width: 500px) {
        padding: 10rem 5rem;
    }

    @media (min-width: 800px) {
        padding: 10rem 15rem;
    }

    @media (min-width: 1100px) {
        display: flex;
    }
`;

const MarketingImageWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: var(--space-60);

    @media (min-width: 1100px) {
        width: 50%;
    }
`;

const MarketingImage = styled.img`
    width: 100%;
    object-fit: cover;
    border-radius: var(--space-16);
`;

const MarketingContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (min-width: 1100px) {
        width: 50%;
    }
`;

const MarketingHeading = styled.h2`
    color: var(--dark-navy);
    font-size: var(--space-42);
    line-height: var(--space-50);
    font-weight: 600;
    letter-spacing: -0.1rem;
    margin-bottom: var(--space-18);
`;

const MarketingDescription = styled.p`
    color: var(--dark-navy);
    font-size: var(--space-18);
    line-height: var(--space-30);
    font-weight: 400;
    opacity: 0.6;
    margin-bottom: var(--space-46);
`;

const MarketingCtaWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: var(--space-26);
`;

const MarketingCtaText = styled.p`
    color: var(--dark-navy);
    font-size: var(--space-14);
    line-height: var(--space-22);
    letter-spacing: 0.4rem;
    font-weight: 600;
    text-transform: uppercase;
`;

const Marketing = () => {
    return (
        <MarketingSection id="marketing">
            <MarketingSectionContainer>
                <MarketingImageWrapper>
                    <MarketingImage
                        src={wifeHusbandImg}
                        alt="Wife and Husband"
                    />
                </MarketingImageWrapper>
                <MarketingContent>
                    <MarketingHeading>
                        Spend your happy time with full comfort.
                    </MarketingHeading>
                    <MarketingDescription>
                        Embrace blissful comfort: Revel in delightful moments,
                        surrounded by unmatched tranquility and exquisite
                        relaxation.
                    </MarketingDescription>
                    <MarketingCtaWrapper>
                        <OrangeBar />
                        <MarketingCtaText>
                            Explore Our Products
                        </MarketingCtaText>
                    </MarketingCtaWrapper>
                </MarketingContent>
            </MarketingSectionContainer>
        </MarketingSection>
    );
};

export default Marketing;
