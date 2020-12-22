import React, { useCallback, useState } from 'react';
import { FiEye, FiX } from 'react-icons/fi';

import Header from '../../components/Header';
import { users, servers } from '../../services/server';

import {
  Container,
  ClientFilter,
  ContentFilter,
  Title,
  Body,
  InputDiv,
  Button,
  Content,
  Table,
  DivPages,
} from './styles';

const ClientList = () => {
  const [isFilterUser, setIsFilterUser] = useState(users);
  const filterStatus = useState([]);
  const filterServer = useState([]);
  const filterSituation = useState([]);
  // const filterDateContract = useState([]);

  const handleButtonClose = useCallback(() => {
    const displayContainer = document.getElementById('clientFilter');
    displayContainer.style.display = 'none';
  }, []);

  const handleButton = useCallback(() => {
    const displayContainer = document.getElementById('clientFilter');
    // const inputName = document.getElementById('inputName').value;
    const inputStatus = document.getElementById('inputStatus').value;
    const inputServer = document.getElementById('inputServer').value;
    const inputSituation = document.getElementById('inputSituation').value;
    // const inputDateContractInitial = document.getElementById(
    //   'inputDateContractInitial',
    // ).value;
    // const inputDateContractEnd = document.getElementById('inputDateContractEnd')
    //   .value;

    if (inputStatus !== '') {
      filterStatus.push(users.filter((user) => user.status === inputStatus));
    } else {
      filterStatus.push(users);
    }

    if (inputServer !== '') {
      filterServer.push(
        filterStatus[2].filter((user) => user.server === inputServer),
      );
    } else {
      filterServer.push(filterStatus[2]);
    }

    if (inputSituation !== '') {
      filterSituation.push(
        filterServer[2].filter((user) => user.situation === inputSituation),
      );
    } else {
      filterSituation.push(filterServer[2]);
    }

    setIsFilterUser(filterSituation[2]);

    displayContainer.style.display = 'none';
  }, [filterStatus, filterServer, filterSituation]);

  const handleFilter = useCallback(() => {
    const displayContainer = document.getElementById('clientFilter');
    displayContainer.style.display = 'flex';
  }, []);

  return (
    <Container>
      <ClientFilter id="clientFilter">
        <ContentFilter>
          <Title>
            <h1>Filtro</h1>
            <button type="button" onClick={handleButtonClose}>
              <FiX size={30} />
            </button>
          </Title>

          <Body>
            <InputDiv id="SelectDiv">
              <label htmlFor="name" disabled>
                Nome
                <div>
                  <input
                    type="text"
                    id="inputName"
                    placeholder="Digite o nome"
                    disabled
                  />
                </div>
              </label>

              <label htmlFor="status">
                Status
                <div>
                  <select id="inputStatus">
                    <option value="">Selecione um status</option>
                    <option value="Ativo">Ativo</option>
                    <option value="Inativo">Inativo</option>
                  </select>
                </div>
              </label>

              <label htmlFor="server">
                Servidor
                <div>
                  <select id="inputServer">
                    <option value="">Selecione um servidor</option>
                    {servers.map((server) => (
                      <option key={server.id} value={server.server}>
                        Servidor {server.id + 1}
                      </option>
                    ))}
                  </select>
                </div>
              </label>

              <label htmlFor="situation">
                Situação
                <div>
                  <select id="inputSituation" required>
                    <option value="">Selecione uma situação</option>
                    <option value="Pago">Pago</option>
                    <option value="Pendente">Pendente</option>
                    <option value="Deve">Deve</option>
                  </select>
                </div>
              </label>

              <div id="divInputDateContract">
                <label htmlFor="contractInitial">
                  Data de Contrato
                  <div>
                    <input type="date" id="inputDateContractInitial" disabled />
                  </div>
                </label>

                <label htmlFor="contractEnd">
                  Até
                  <div>
                    <input type="date" id="inputDateContractEnd" disabled />
                  </div>
                </label>
              </div>
              <div id="divInputExpirationDate">
                <label htmlFor="ExpirationDateInitial">
                  Data de Vencimento
                  <div>
                    <input
                      type="date"
                      id="inputExpirationDateInitial"
                      disabled
                    />
                  </div>
                </label>

                <label htmlFor="ExpirationDateEnd">
                  Até
                  <div>
                    <input type="date" id="inputExpirationDateEnd" disabled />
                  </div>
                </label>
              </div>
            </InputDiv>
          </Body>
          <Button type="button" id="filterButton" onClick={handleButton}>
            Enviar
          </Button>
        </ContentFilter>
      </ClientFilter>
      <Header />
      <Content>
        <h2>Lista de Clientes</h2>

        <button type="button" onClick={handleFilter}>
          Filtro
        </button>

        <Table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Data Contrato</th>
              <th>Servidor</th>
              <th>Plano</th>
              <th>Data Vencimento</th>
              <th>Situação</th>
              <th>Status</th>
              <th>Ver</th>
            </tr>
          </thead>
          <tbody>
            {isFilterUser.map((user) => (
              <tr key={user.id} id="tableBody">
                <td>{user.name}</td>
                <td>{user.contract}</td>
                <td>{user.server}</td>
                <td>{user.plan}</td>
                <td>{user.expirationDate}</td>
                <td>{user.situation}</td>
                <td>{user.status}</td>
                <td>
                  <button type="button">
                    <FiEye size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <DivPages>
          <button type="button">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button type="button">4</button>
          <button type="button">5</button>
        </DivPages>
      </Content>
    </Container>
  );
};
export default ClientList;
