import React, { useState, useCallback } from 'react';
import { FiX, FiMenu } from 'react-icons/fi';

import Header from '../../components/Header';

import { Container, Icon, Menu, Content, Body, Title } from './styles';

const Dashboard = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [isDisplayMenu, setIsDisplayMenu] = useState('displayOff');

  const handleMenu = useCallback(() => {
    if (isMenu) {
      setIsMenu(false);
      setIsDisplayMenu('displayOff');
    } else {
      setIsMenu(true);
      setIsDisplayMenu('displayOn');
    }
  }, [isMenu]);

  return (
    <Container>
      <Icon onClick={handleMenu}>
        {!isMenu ? <FiMenu size={34} /> : <FiX size={34} />}
      </Icon>

      <Menu>
        <div id={isDisplayMenu}>
          <Header />
        </div>
      </Menu>

      <Body>
        <div id="title">
          <Title>Sistema de Gerenciamento de Clientes</Title>
        </div>
        <div className="tables">
          <div className="activeClients">
            <h2>Lista de clientes Ativos</h2>
          </div>
          <div className="inativeCustomers">
            <h2>Lista de clientes Inativos</h2>
          </div>
        </div>
        <div className="tables">
          <div className="serversList">
            <h2>Lista de Servidores</h2>
          </div>
          <div className="plansList">
            <h2>Lista de Planos</h2>
          </div>
        </div>
      </Body>

      <Content />
    </Container>
  );
};
export default Dashboard;
