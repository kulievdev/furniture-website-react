import wifeHusbandImg from "../../../../assets/images/wife-husband.jpeg";
import styled from "styled-components";
import OrangeBar from "../../../../design-system/OrangeBar/OrangeBar";

const MarketingSection = styled.section`
    background-color: var(--pearl-white);
`;

const MarketingSectionContainer = styled.div`
    max-width: 160rem;
    margin: 0 auto;
    padding: 10rem 15rem;
    display: flex;
    gap: 16rem;
`;

const MarketingImageWrapper = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80rem;
`;

const MarketingImage = styled.img`
    width: 100%;
    object-fit: cover;
    border-radius: var(--space-16);
`;

const MarketingContent = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const MarketingHeading = styled.h2`
    color: var(--dark-navy);
    font-size: var(--space-42);
    font-weight: 600;
    line-height: var(--space-50);
    letter-spacing: -0.1rem;
    margin-bottom: var(--space-18);
`;

const MarketingDescription = styled.p`
    color: var(--dark-navy);
    font-size: var(--space-18);
    font-weight: 400;
    line-height: var(--space-30);
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
    font-weight: 600;
    line-height: var(--space-22);
    letter-spacing: 0.4rem;
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

export { Marketing };
