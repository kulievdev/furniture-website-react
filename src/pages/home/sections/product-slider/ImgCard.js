import styled from "styled-components";

const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: var(--space-16);
`;

const ImgCard = (props) => {
    return <Image src={props.img} alt={props.name} />;
};

export default ImgCard;
