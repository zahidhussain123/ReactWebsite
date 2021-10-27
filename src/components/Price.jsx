import React from 'react'
import styled from 'styled-components';
import PriceCart from './PriceCart';

const Container = styled.div`
height: 100%;
align-items: center;
display: flex;
justify-content: center;
@media only screen and (max-width: 480px) {
    flex-direction: column;
  } ;
`;

const Price = () => {
    return (
        <Container>
            <PriceCart price="10" type="Basic" />
            <PriceCart price="20" type="Premium"/>
            <PriceCart price="30" type="Advanced"/>
        </Container>
    )
}

export default Price;
