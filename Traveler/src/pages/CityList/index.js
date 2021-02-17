import React from 'react';
import { FiChevronDown } from 'react-icons/fi';

import { HeaderCityList } from '../../components/Header';
import { CardsHome } from '../../components/Cards';

import { Container, Content, Body, DivSelectCity } from './styles';

function CityList() {
  return (
    <Container>
      <HeaderCityList />
      <Content>
        <Body>
          <DivSelectCity>
            <h2>Selecione uma cidade</h2>
            <ul>
              <li>Todas</li>
              <li>Mais acessadas</li>
              <li>A - Z</li>
              <li>
                <FiChevronDown />
              </li>
            </ul>
          </DivSelectCity>
          <CardsHome />
        </Body>
      </Content>
    </Container>
  );
}

export default CityList;
