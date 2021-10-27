import React from 'react'
import styled from 'styled-components';
import search from "../images/search.png"

const Container = styled.div`
width: 100px;
padding: 20px;
display: flex;
flex-direction: column;
align-items: center;
box-shadow: 4px -5px 19px 6px rgba(0,0,0,0.75);
-webkit-box-shadow: 4px -5px 19px 6px rgba(0,0,0,0.75);
-moz-box-shadow: 4px -5px 19px 6px rgba(0,0,0,0.75);
@media only screen and (max-width:480px){
width: 50px;
};
`;

const Image = styled.img`
width: 20px;
`;

const Text = styled.span`
margin-top: 10px;
text-align: center;
@media only screen and (max-width:480px){
font-size: 14px;
};
`;
const MiniCard = () => {
    return (
        <Container>
            <Image src={search}/>
            <Text>lorem ipsum is the dert.</Text>
        </Container>
    )
}

export default MiniCard;
