import React from 'react';
import { Link } from 'react-router-dom';

import { Header } from '../../components/Header';
import { CardsHome } from '../../components/Cards';

import { Container, Content, Body, DivDescriptions } from './styles';

function App() {
  return (
    <Container>
      <Header />
      <Content>
        <Body>
          <DivDescriptions>
            <div>
              <h1>Viva uma grande aventura</h1>
              <p>
                Descubra locais incríveis para se visitar em cidades
                maravilhosas de Santa Catarina.
              </p>
              <Link to="/listaCidade">Descobrir todos os lugares</Link>
            </div>
          </DivDescriptions>
          <CardsHome />
        </Body>
      </Content>
    </Container>
  );
}

export default App;
