import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  FiMinus,
  FiMenu,
  FiX,
  FiGrid,
  FiFilePlus,
  FiUser,
  FiList,
  FiUserPlus,
  FiServer,
  FiPlusSquare,
  FiMessageCircle,
  FiSettings,
  FiLogOut,
} from 'react-icons/fi';

import {
  Container,
  Icon,
  ControlPanel,
  Actions,
  Content,
  Services,
} from './styles';

const Header = () => {
  const [isClassNameControlPanel, setIsClassNameControlPanel] = useState(
    'list',
  );
  const [isControlPanel, setIsControlPanel] = useState(false);

  const [isClassNameActions, setIsClassNameActions] = useState('list');
  const [isActions, setIsActions] = useState(false);

  const [isClassNameServices, setIsClassNameServices] = useState('list');
  const [isServices, setIsServices] = useState(false);

  const [isMenu, setIsMenu] = useState(false);
  const [isDisplayMenu, setIsDisplayMenu] = useState('displayOff');

  const handleControlPanel = useCallback(() => {
    if (isControlPanel) {
      setIsClassNameControlPanel('list');
      setIsControlPanel(false);
    } else {
      setIsClassNameControlPanel('listControlPanel');
      setIsControlPanel(true);

      setIsClassNameActions('list');
      setIsActions(false);

      setIsClassNameServices('list');
      setIsServices(false);
    }
  }, [isControlPanel]);

  const handleActions = useCallback(() => {
    if (isActions) {
      setIsClassNameActions('list');
      setIsActions(false);
    } else {
      setIsClassNameActions('listControlPanel');
      setIsActions(true);

      setIsClassNameControlPanel('list');
      setIsControlPanel(false);

      setIsClassNameServices('list');
      setIsServices(false);
    }
  }, [isActions]);

  const handleServices = useCallback(() => {
    if (isServices) {
      setIsClassNameServices('list');
      setIsServices(false);
    } else {
      setIsClassNameServices('listControlPanel');
      setIsServices(true);

      setIsClassNameControlPanel('list');
      setIsControlPanel(false);

      setIsClassNameActions('list');
      setIsActions(false);
    }
  }, [isServices]);

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
      <Icon onClick={handleMenu}>{!isMenu ? <FiMenu /> : <FiX />}</Icon>
      <Content id={isDisplayMenu}>
        <ControlPanel className="content">
          <div className="title">
            <button type="button" onClick={handleControlPanel}>
              {!isControlPanel ? <FiGrid /> : <FiMinus />}
              <h2>Painel de controle</h2>
            </button>
          </div>
          <div className={isClassNameControlPanel}>
            <Link to="/dashboard">
              <FiList />
              Listar Clientes Ativos
            </Link>
            <Link to="/dashboard">
              <FiList />
              Listar Clientes Inativos
            </Link>
            <Link to="/dashboard">
              <FiList />
              Listar Servidores
            </Link>
            <Link to="/dashboard">
              <FiList />
              Listar Planos
            </Link>
          </div>
        </ControlPanel>

        <Actions className="content">
          <div className="title">
            <button type="button" onClick={handleActions}>
              {!isActions ? <FiFilePlus /> : <FiMinus />}
              <h2>Cadastrar</h2>
            </button>
          </div>
          <div className={isClassNameActions}>
            <Link to="/dashboard">
              <FiUserPlus />
              Cadastrar Clientes
            </Link>
            <Link to="/dashboard">
              <FiServer />
              Cadastrar Servidores
            </Link>
            <Link to="/dashboard">
              <FiPlusSquare />
              Cadastrar Planos
            </Link>
            <Link to="/dashboard">
              <FiMessageCircle />
              Mensagem WhatsApp
            </Link>
          </div>
        </Actions>

        <Services className="content" onClick={handleServices}>
          <div className="title">
            <button type="button">
              {!isServices ? <FiUser /> : <FiMinus />}
              <h2>Usuário</h2>
            </button>
          </div>
          <div className={isClassNameServices}>
            <Link to="/dashboard">
              <FiSettings />
              Meu Perfil
            </Link>
            <Link to="/">
              <FiLogOut />
              Sair
            </Link>
          </div>
        </Services>
      </Content>
    </Container>
  );
};

export default Header;
