import styled from "styled-components";

const HamburgerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-6);
    cursor: pointer;

    @media (min-width: 1000px) {
        display: none;
    }
`;

const Top = styled.div`
    width: var(--space-28);
    height: var(--space-4);
    background-color: var(--super-dark-navy);
    border: none;
    border-radius: var(--space-10);
`;
const Middle = styled(Top)``;
const Bottom = styled(Top)``;

const HamburgerButton = () => {
    return (
        <HamburgerWrapper>
            <Top />
            <Middle />
            <Bottom />
        </HamburgerWrapper>
    );
};

export default HamburgerButton;
