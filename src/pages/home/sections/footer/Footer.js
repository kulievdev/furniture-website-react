import styled from "styled-components";
import FooterCard from "./FooterCard";
import Logo from ".././../../../design-system/Logo/Logo";

const FooterSection = styled.footer`
    padding: 5rem var(--space-60);
`;

const FooterSectionContainer = styled.div`
    background-color: var(--hero-color);
    border-radius: var(--space-30);
    padding: 9rem 13rem;
    max-width: 160rem;
    margin: 0 auto;
    display: flex;
    gap: 12rem;
`;

const AboutBrandWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-52);
`;

const AboutBrandText = styled.p`
    width: 70%;
    color: var(--dark-navy);
    font-size: var(--space-18);
    font-weight: 400;
    line-height: var(--space-30);
    opacity: 0.7;
`;

const AboutBrandCopyright = styled(AboutBrandText)``;

const FooterCardWrapper = styled.div`
    display: flex;
    gap: 12rem;
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
                    <AboutBrandCopyright>© TuranTech Inc.</AboutBrandCopyright>
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
                        title="Our Company"
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
