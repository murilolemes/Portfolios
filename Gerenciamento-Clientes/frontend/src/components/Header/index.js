import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiMinus } from 'react-icons/fi';

import {
  Container,
  // Button,
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

  return (
    <Container>
      {/* <Button>
        <FiX size={34} />
      </Button> */}

      <Content>
        <ControlPanel className="content">
          <div className="title">
            <button type="button" onClick={handleControlPanel}>
              {!isControlPanel ? <FiPlus size={16} /> : <FiMinus size={16} />}
              <h2>Painel de controle</h2>
            </button>
          </div>
          <div className={isClassNameControlPanel}>
            <Link to="/dashboard">Listar Clientes Ativos</Link>
            <Link to="/dashboard">Listar Clientes Inativos</Link>
            <Link to="/dashboard">Listar Servidores</Link>
            <Link to="/dashboard">Listar Planos</Link>
          </div>
        </ControlPanel>

        <Actions className="content">
          <div className="title">
            <button type="button" onClick={handleActions}>
              {!isActions ? <FiPlus size={16} /> : <FiMinus size={16} />}
              <h2>Ações</h2>
            </button>
          </div>
          <div className={isClassNameActions}>
            <Link to="/dashboard">Cadastrar Clientes</Link>
            <Link to="/dashboard">Cadastrar Servidores</Link>
            <Link to="/dashboard">Cadastrar Planos</Link>
            <Link to="/dashboard">Mensagem WhatsApp</Link>
          </div>
        </Actions>

        <Services className="content" onClick={handleServices}>
          <div className="title">
            <button type="button">
              {!isServices ? <FiPlus size={16} /> : <FiMinus size={16} />}
              <h2>Usuário</h2>
            </button>
          </div>
          <div className={isClassNameServices}>
            <Link to="/dashboard">Meu Perfil</Link>
            <Link to="/">Sair</Link>
          </div>
        </Services>
      </Content>
    </Container>
  );
};

export default Header;
