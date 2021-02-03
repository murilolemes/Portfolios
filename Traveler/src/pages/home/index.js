import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Header,
  Content,
  Body,
  DivDescriptions,
  DivCards,
} from './styles';

function App() {
  return (
    <Container>
      <Content>
        <Header>
          <img src="/assets/Logo.svg" alt="Logo" />
          <button type="button">Acesso Restrito</button>
        </Header>

        <Body>
          <DivDescriptions>
            <div>
              <h1>Viva uma grande aventura</h1>
              <p>
                Descubra locais incríveis para se visitar em cidades
                maravilhosas de Santa Catarina.
              </p>
              <Link to="/cityList">Descobrir todos os lugares</Link>
            </div>
          </DivDescriptions>

          <DivCards>
            <div className="divCards" id="leftDivCards">
              <div className="card">
                <img src="/assets/image3.png" alt="Florianópolis" />
                <div className="descriptionCard">
                  <h3>Florianópolis</h3>
                  <p>98 locais</p>
                </div>
              </div>
              <div className="card">
                <img src="/assets/image2.png" alt="Florianópolis" />
                <div className="descriptionCard">
                  <h3>Florianópolis</h3>
                  <p>98 locais</p>
                </div>
              </div>
            </div>
            <div className="divCards" id="rightDivCards">
              <div className="card">
                <img src="/assets/image1.png" alt="Florianópolis" />
                <div className="descriptionCard">
                  <h3>Florianópolis</h3>
                  <p>98 locais</p>
                </div>
              </div>
              <div className="card">
                <img src="/assets/image4.png" alt="Florianópolis" />
                <div className="descriptionCard">
                  <h3>Florianópolis</h3>
                  <p>98 locais</p>
                </div>
              </div>
            </div>
          </DivCards>
        </Body>
      </Content>
    </Container>
  );
}

export default App;
