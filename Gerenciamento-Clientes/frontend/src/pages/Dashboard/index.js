import React from 'react';

import Cards from '../../components/Cards';
import Header from '../../components/Header';
import {
  GraphicsServers,
  GraphicsClient,
  GraphicsPlans,
} from '../../components/Graphics/index';

import {
  Container,
  Content,
  Body,
  Title,
  DivCards,
  DivGraphics,
} from './styles';

const Dashboard = () => (
  <Container>
    <Header />
    <Content>
      <Body>
        <div id="title">
          <Title>Sistema de Gerenciamento de Clientes</Title>
        </div>

        <DivCards>
          <Cards />
        </DivCards>
        <DivGraphics>
          <div>
            <GraphicsServers />
          </div>
          <div>
            <GraphicsClient />
          </div>
          <div>
            <GraphicsPlans />
          </div>
        </DivGraphics>
      </Body>
    </Content>
  </Container>
);
export default Dashboard;
