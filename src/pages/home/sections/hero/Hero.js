import heroImg from "../../../../assets/images/hero.png";
import styled from "styled-components";
import OrangeBar from "../../../../design-system/OrangeBar/OrangeBar";

const HeroSection = styled.main`
    padding: 0 var(--space-20);

    @media (min-width: 621px) {
        padding: 0 var(--space-60);
    }
`;

const HeroSectionContainer = styled.div`
    background-color: var(--hero-color);
    border-radius: var(--space-30);
    max-width: 160rem;
    margin: 0 auto;

    @media (min-width: 1000px) {
        display: flex;
    }
`;

const HeroImageContainer = styled.div`
    width: 100%;
    padding: 3rem 3rem;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 621px) {
        padding: 3rem 6rem;
    }

    @media (min-width: 1000px) {
        width: 40%;
    }

    @media (min-width: 1200px) {
        padding: 5rem 8rem;
    }
`;

const HeroChairImage = styled.img`
    width: 60%;

    @media (min-width: 1000px) {
        width: 100%;
    }
`;
const HeroContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 3rem 3rem;

    @media (min-width: 621px) {
        padding: 3rem 6rem;
    }

    @media (min-width: 1000px) {
        width: 60%;
    }

    @media (min-width: 1200px) {
        padding: 5rem 8rem;
    }
`;
const HeroSlogan = styled.p`
    color: var(--orange-red);
    font-size: var(--space-10);
    font-weight: 600;
    line-height: var(--space-14);
    letter-spacing: 0.6rem;
    margin-bottom: var(--space-34);
    text-transform: uppercase;

    @media (min-width: 621px) {
        font-size: var(--space-12);
        line-height: var(--space-18);
    }

    @media (min-width: 1200px) {
        font-size: var(--space-14);
        line-height: var(--space-22);
    }
`;
const HeroHeading = styled.h1`
    color: var(--dark-navy);
    font-size: var(--space-40);
    font-weight: 600;
    line-height: var(--space-46);
    letter-spacing: -0.1rem;
    margin-bottom: var(--space-28);

    @media (min-width: 621px) {
        font-size: var(--space-50);
        line-height: var(--space-56);
    }

    @media (min-width: 1200px) {
        font-size: var(--space-60);
        line-height: var(--space-66);
    }
`;
const HeroText = styled.p`
    color: var(--semi-dark-grey);
    font-size: var(--space-14);
    font-weight: 400;
    line-height: var(--space-24);
    margin-bottom: var(--space-58);

    @media (min-width: 621px) {
        font-size: var(--space-16);
        line-height: var(--space-28);
    }
`;

const HeroFooter = styled.div`
    display: flex;
    align-items: center;
    gap: var(--space-26);
`;
const HeroFooterText = styled.p`
    color: var(--dark-navy);
    font-size: var(--space-10);
    font-weight: 600;
    line-height: var(--space-12);
    letter-spacing: 0.4rem;
    text-transform: uppercase;

    @media (min-width: 621px) {
        font-size: var(--space-12);
        line-height: var(--space-18);
    }

    @media (min-width: 1200px) {
        font-size: var(--space-14);
        line-height: var(--space-22);
    }
`;

const Hero = () => {
    return (
        <HeroSection>
            <HeroSectionContainer>
                <HeroImageContainer>
                    <HeroChairImage src={heroImg} alt="Chair Image" />
                </HeroImageContainer>
                <HeroContent>
                    <HeroSlogan>Quality Design For ALl</HeroSlogan>
                    <HeroHeading>
                        Bring back the classic look by using Infinita. Easy home
                        delivery!
                    </HeroHeading>
                    <HeroText>
                        Rediscover the timeless allure of the past as Infinita
                        effortlessly revives the beloved vintage aesthetic.
                    </HeroText>
                    <HeroFooter>
                        <OrangeBar />
                        <HeroFooterText>Explore Our Products</HeroFooterText>
                    </HeroFooter>
                </HeroContent>
            </HeroSectionContainer>
        </HeroSection>
    );
};

export default Hero;
