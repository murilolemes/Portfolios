import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiArrowLeft } from 'react-icons/fi';

import { Container, Content } from './styles';

export const Header = () => (
  <Container>
    <Content>
      <div id="headerContent">
        <Link to="/">
          <img src="/assets/Logo.svg" alt="Logo" />
        </Link>
        <button type="button">Acesso Restrito</button>
      </div>
    </Content>
  </Container>
);

export const HeaderCityList = () => (
  <Container>
    <Content>
      <div id="headerContent">
        <Link to="/">
          <img src="/assets/Logo.svg" alt="Logo" />
        </Link>
        <div>
          <FiSearch />
          <input type="text" placeholder="Qual cidade você procura?" />
        </div>
        <button type="button">Acesso Restrito</button>
      </div>
    </Content>
  </Container>
);

export const HeaderCity = () => (
  <Container>
    <Content>
      <div id="headerContent">
        <Link to="/">
          <img src="/assets/Logo.svg" alt="Logo" />
        </Link>
        <Link id="buttonBack" to="/listaCidade">
          <FiArrowLeft />
        </Link>
        <h2>Cidade</h2>
        <button type="button">Acesso Restrito</button>
      </div>
    </Content>
  </Container>
);
