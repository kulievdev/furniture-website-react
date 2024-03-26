import styled from "styled-components";
import Logo from "../../../../design-system/Logo";

const links = [
    { text: "Products", link: "" },
    { text: "Rooms", link: "" },
    { text: "Inspiration", link: "" },
    { text: "Support", link: "" }
];

const Header = styled.header``;
const NavContainer = styled.div`
    max-width: 160rem;
    padding: 4rem 15rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Navigation = styled.nav``;
const UnorderedList = styled.ul`
    display: flex;
    gap: var(--space-50);
`;
const List = styled.li``;
const Link = styled.a`
    font-size: var(--space-17);
    color: var(--dark-navy);
    font-weight: 600;
    line-height: var(--space-30);
`;
const NavigationAction = styled(Link)``;

const TopNavigation = () => {
    return (
        <Header>
            <NavContainer>
                <Logo />
                <Navigation>
                    <UnorderedList>
                        {links.map((link, idx) => (
                            <List key={idx}>
                                <Link href={link.link}>{link.text}</Link>
                            </List>
                        ))}
                    </UnorderedList>
                </Navigation>
                <NavigationAction>Sign in</NavigationAction>
            </NavContainer>
        </Header>
    );
};

export { TopNavigation };
