import React from 'react';
import { CgCoffee } from 'react-icons/cg';
import { FiCalendar, FiCamera } from 'react-icons/fi';

import { HeaderCity } from '../../components/Header';

import { Container, Content, DivDescription } from './styles';

function City() {
  return (
    <Container>
      <HeaderCity />
      <img src="/assets/capa1.png" alt="Capa" />
      <Content>
        <DivDescription>
          <div id="descriptions">
            <h3>Florianópolis</h3>
            <p>
              Capital do estado de Santa Catarina no sul do Brasil, é
              maioritariamente constituída pela Ilha de Santa Catarina, com 54
              km de comprimento.
            </p>
            <p id="second">
              É famosa pelas suas praias, incluindo estâncias turísticas
              populares como a Praia dos Ingleses na extremidade norte da ilha.
            </p>
          </div>
          <div id="pointCards">
            <div className="card">
              <div className="divIcon">
                <FiCamera />
              </div>
              <div className="divDescriptionCard">
                <p className="numberDescription">67</p>
                <p>Pontos Turísticos</p>
              </div>
            </div>
            <div className="card">
              <div className="divIcon">
                <CgCoffee />
              </div>
              <div className="divDescriptionCard">
                <p className="numberDescription">20</p>
                <p>Comida e Bebida</p>
              </div>
            </div>
            <div className="card">
              <div className="divIcon">
                <FiCalendar />
              </div>
              <div className="divDescriptionCard">
                <p className="numberDescription">11</p>
                <p>Eventos Organizados</p>
              </div>
            </div>
          </div>
        </DivDescription>
      </Content>
    </Container>
  );
}

export default City;
