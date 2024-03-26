import heroImg from "../../../../assets/images/hero.png";
import styled from "styled-components";
import OrangeBar from "../../../../design-system/OrangeBar/OrangeBar";

const HeroSection = styled.main`
    padding: 0 var(--space-60);
`;
const HeroSectionContainer = styled.div`
    background-color: var(--hero-color);
    border-radius: var(--space-30);
    max-width: 160rem;
    margin: 0 auto;
    display: flex;
`;
const HeroImageContainer = styled.div`
    width: 40%;
    padding: 5rem 8rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const HeroChairImage = styled.img`
    width: 100%;
`;
const HeroContent = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5rem 8rem;
`;
const HeroSlogan = styled.p`
    color: var(--orange-red);
    font-size: var(--space-14);
    font-weight: 600;
    line-height: var(--space-22);
    letter-spacing: 0.6rem;
    margin-bottom: var(--space-34);
    text-transform: uppercase;
`;
const HeroHeading = styled.h1`
    color: var(--dark-navy);
    font-size: var(--space-60);
    font-weight: 600;
    line-height: var(--space-66);
    letter-spacing: -0.1rem;
    margin-bottom: var(--space-28);
`;
const HeroText = styled.p`
    color: var(--semi-dark-grey);
    font-size: var(--space-16);
    font-weight: 400;
    line-height: var(--space-28);
    margin-bottom: var(--space-58);
`;
const HeroFooter = styled.div`
    display: flex;
    align-items: center;
    gap: var(--space-26);
`;
const HeroFooterText = styled.p`
    color: var(--dark-navy);
    font-size: var(--space-14);
    font-weight: 600;
    line-height: var(--space-22);
    letter-spacing: 0.4rem;
    text-transform: uppercase;
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
                        Bring back the classic look by using Whiter. Easy home
                        delivery!
                    </HeroHeading>
                    <HeroText>
                        Rediscover the timeless allure of the past as Whiter
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

export { Hero };
