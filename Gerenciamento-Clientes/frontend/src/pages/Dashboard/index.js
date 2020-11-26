import React from 'react';

import Cards from '../../components/Cards';
import Header from '../../components/Header';
import {
  GraphicsServers,
  GraphicsClient,
  GraphicsPlans,
} from '../../components/Graphics/index';

import { Container, Content, Title, Body, DivGraphics } from './styles';

const Dashboard = () => (
  <Container>
    <Header />
    <Content>
      <Title>Sistema de Gerenciamento de Clientes</Title>
      <Body>
        <Cards />
        <DivGraphics>
          <div>
            <GraphicsServers />
            <GraphicsClient />
          </div>
          <div id="divPlans">
            <GraphicsPlans />
          </div>
        </DivGraphics>
      </Body>
    </Content>
  </Container>
);
export default Dashboard;
