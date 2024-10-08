import styled from "styled-components";
import Logo from "../../../../design-system/Logo/Logo";
import HamburgerButton from "./HamburgerButton";

const links = [
    { text: "Products", link: "" },
    { text: "Rooms", link: "" },
    { text: "Inspiration", link: "" },
    { text: "Support", link: "" }
];

const Header = styled.header`
    padding: 0 var(--space-20);

    @media (min-width: 621px) {
        padding: 0 var(--space-60);
    }

    @media (min-width: 1000px) {
        padding: 0;
    }
`;
const NavContainer = styled.div`
    max-width: 160rem;
    padding: 4rem 0;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 1000px) {
        padding: 4rem 15rem;
    }
`;
const Navigation = styled.nav`
    display: none;
    @media (min-width: 1000px) {
        display: flex;
    }
`;
const UnorderedList = styled.ul`
    display: flex;
    gap: var(--space-50);
`;
const List = styled.li``;
const Link = styled.a`
    font-size: var(--space-18);
    color: var(--dark-navy);
    font-weight: 600;
    line-height: var(--space-30);
`;
const NavigationAction = styled(Link)`
    display: none;
    @media (min-width: 1000px) {
        display: flex;
    }
`;

const TopNavigation = () => {
    return (
        <Header>
            <NavContainer>
                <Logo />
                <Navigation>
                    <UnorderedList>
                        {links.map((link, idx) => (
                            <List key={idx}>
                                <Link
                                    href={link.link}
                                    onClick={(event) => {
                                        event.preventDefault();
                                    }}
                                >
                                    {link.text}
                                </Link>
                            </List>
                        ))}
                    </UnorderedList>
                </Navigation>
                <NavigationAction>Sign in</NavigationAction>
                <HamburgerButton />
            </NavContainer>
        </Header>
    );
};

export default TopNavigation;
