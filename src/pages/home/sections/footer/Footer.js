import styled from "styled-components";
import FooterCard from "./FooterCard";
import Logo from ".././../../../design-system/Logo/Logo";

const FooterSection = styled.footer`
    padding: 5rem var(--space-20);

    @media (min-width: 621px) {
        padding: 5rem var(--space-60);
    }
`;

const FooterSectionContainer = styled.div`
    background-color: var(--hero-color);
    border-radius: var(--space-30);
    padding: 9rem 2rem;
    max-width: 160rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 8rem;

    @media (min-width: 1000px) {
        flex-direction: row;
        padding: 9rem 5rem;
    }

    @media (min-width: 1330px) {
        padding: 9rem 13rem;
        gap: 12rem;
    }
`;

const AboutBrandWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-14);

    text-align: center;

    @media (min-width: 600px) {
        justify-content: space-between;
        text-align: start;
    }
`;

const AboutBrandText = styled.p`
    color: var(--dark-navy);
    font-size: var(--space-18);
    font-weight: 400;
    line-height: var(--space-30);
    opacity: 0.7;
`;

const AboutBrandCopyright = styled(AboutBrandText)``;

const FooterCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-96);
    text-align: center;
    width: 100%;

    @media (min-width: 600px) {
        flex-direction: row;
        justify-content: space-between;
        gap: 0;
        text-align: start;
    }

    @media (min-width: 1330px) {
        gap: 12rem;
    }
`;

const Footer = () => {
    return (
        <FooterSection>
            <FooterSectionContainer>
                <AboutBrandWrapper>
                    <Logo />
                    <AboutBrandText>
                        We make furniture with love and passions. No doubt,
                        really.
                    </AboutBrandText>
                    <AboutBrandCopyright>© Whiter Inc.</AboutBrandCopyright>
                </AboutBrandWrapper>
                <FooterCardWrapper>
                    <FooterCard
                        title="Contact"
                        info1="62 Orp St, Seattle, USA"
                        info2="sales@furnatur.com"
                        info3="+ 1 800 726 915273"
                    />
                    <FooterCard
                        title="Product"
                        info1="Living Room"
                        info2="Bed Room"
                        info3="Office Room"
                    />
                    <FooterCard
                        title="Company"
                        info1="About Us"
                        info2="Services"
                        info3="Products"
                    />
                </FooterCardWrapper>
            </FooterSectionContainer>
        </FooterSection>
    );
};

export default Footer;
