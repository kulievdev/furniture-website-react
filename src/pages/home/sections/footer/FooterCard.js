import styled from "styled-components";

const FooterCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-52);
`;

const FooterTitle = styled.h4`
    color: var(--dark-navy);
    font-size: var(--space-14);
    font-weight: 600;
    line-height: var(--space-22);
    text-transform: uppercase;
    letter-spacing: 0.4rem;
`;

const Navigation = styled.nav``;

const UnorderedList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: var(--space-28);
`;

const List = styled.li``;

const Link = styled.a`
    color: var(--dark-navy);
    font-size: var(--space-18);
    font-style: normal;
    font-weight: 400;
    line-height: var(--space-30);
    opacity: 0.7;
`;

const FooterCard = (props) => {
    return (
        <FooterCardWrapper>
            <FooterTitle>{props.title}</FooterTitle>
            <Navigation>
                <UnorderedList>
                    <List>
                        <Link href="#">{props.info1}</Link>
                    </List>
                    <List>
                        <Link href="#">{props.info2}</Link>
                    </List>
                    <List>
                        <Link href="#">{props.info3}</Link>
                    </List>
                </UnorderedList>
            </Navigation>
        </FooterCardWrapper>
    );
};

export default FooterCard;
