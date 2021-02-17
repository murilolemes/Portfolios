import React from 'react';

import { JsonCards } from '../../server/CardsServer';

import { Container, Content } from './styles';

export const CardsHome = () => (
  <Container>
    <Content>
      {JsonCards.map((jsCard) => (
        <div key={jsCard.id} className="card">
          <img src={jsCard.img} alt={jsCard.name} />
          <div className="descriptionCard">
            <h3>{jsCard.name}</h3>
            <p>{jsCard.locations} locais</p>
          </div>
        </div>
      ))}
    </Content>
  </Container>
);
