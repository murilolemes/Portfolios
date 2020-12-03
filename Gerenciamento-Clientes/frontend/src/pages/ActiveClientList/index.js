import React from 'react';
import { FiEye } from 'react-icons/fi';

import Header from '../../components/Header';

import { Container, Content, DivFilter } from './styles';

const users = [
  {
    id: '1',
    name: 'Murilo Henrique Lemes',
    contract: '03/12/2020',
    server: 'Servidor 1',
    expirationDate: '03/12/2020',
    situation: 'Pago',
    status: 'Ativo',
  },
  {
    id: '2',
    name: 'Murilo Henrique Lemes',
    contract: '03/12/2020',
    server: 'Servidor 1',
    expirationDate: '03/12/2020',
    situation: 'Pago',
    status: 'Ativo',
  },
  {
    id: '3',
    name: 'Murilo Henrique Lemes',
    contract: '03/12/2020',
    server: 'Servidor 1',
    expirationDate: '03/12/2020',
    situation: 'Pago',
    status: 'Ativo',
  },
  {
    id: '4',
    name: 'Murilo Henrique Lemes',
    contract: '03/12/2020',
    server: 'Servidor 1',
    expirationDate: '03/12/2020',
    situation: 'Pago',
    status: 'Ativo',
  },
  {
    id: '5',
    name: 'Murilo Henrique Lemes',
    contract: '03/12/2020',
    server: 'Servidor 1',
    expirationDate: '03/12/2020',
    situation: 'Pago',
    status: 'Ativo',
  },
  {
    id: '6',
    name: 'Murilo Henrique Lemes',
    contract: '03/12/2020',
    server: 'Servidor 1',
    expirationDate: '03/12/2020',
    situation: 'Pago',
    status: 'Ativo',
  },
  {
    id: '7',
    name: 'Murilo Henrique Lemes',
    contract: '03/12/2020',
    server: 'Servidor 1',
    expirationDate: '03/12/2020',
    situation: 'Pago',
    status: 'Ativo',
  },
  {
    id: '8',
    name: 'Murilo Henrique Lemes',
    contract: '03/12/2020',
    server: 'Servidor 1',
    expirationDate: '03/12/2020',
    situation: 'Pago',
    status: 'Ativo',
  },
  {
    id: '9',
    name: 'Murilo Henrique Lemes',
    contract: '03/12/2020',
    server: 'Servidor 1',
    expirationDate: '03/12/2020',
    situation: 'Pago',
    status: 'Ativo',
  },
  {
    id: '10',
    name: 'Murilo Henrique Lemes',
    contract: '03/12/2020',
    server: 'Servidor 1',
    expirationDate: '03/12/2020',
    situation: 'Pago',
    status: 'Ativo',
  },
  {
    id: '11',
    name: 'Murilo Henrique Lemes',
    contract: '03/12/2020',
    server: 'Servidor 1',
    expirationDate: '03/12/2020',
    situation: 'Pago',
    status: 'Ativo',
  },
  {
    id: '12',
    name: 'Murilo Henrique Lemes',
    contract: '03/12/2020',
    server: 'Servidor 1',
    expirationDate: '03/12/2020',
    situation: 'Pago',
    status: 'Ativo',
  },
  {
    id: '13',
    name: 'Murilo Henrique Lemes',
    contract: '03/12/2020',
    server: 'Servidor 1',
    expirationDate: '03/12/2020',
    situation: 'Pago',
    status: 'Ativo',
  },
  {
    id: '14',
    name: 'Murilo Henrique Lemes',
    contract: '03/12/2020',
    server: 'Servidor 1',
    expirationDate: '03/12/2020',
    situation: 'Pago',
    status: 'Ativo',
  },
  {
    id: '15',
    name: 'Murilo Henrique Lemes',
    contract: '03/12/2020',
    server: 'Servidor 1',
    expirationDate: '03/12/2020',
    situation: 'Pago',
    status: 'Ativo',
  },
  {
    id: '16',
    name: 'Murilo Henrique Lemes',
    contract: '03/12/2020',
    server: 'Servidor 1',
    expirationDate: '03/12/2020',
    situation: 'Pago',
    status: 'Ativo',
  },
  {
    id: '17',
    name: 'Murilo Henrique Lemes',
    contract: '03/12/2020',
    server: 'Servidor 1',
    expirationDate: '03/12/2020',
    situation: 'Pago',
    status: 'Ativo',
  },
];

const filterType = [
  {
    id: '1',
    name: 'Nome',
  },
  {
    id: '2',
    name: 'Data de Contrato',
  },
  {
    id: '3',
    name: 'Servidor',
  },
  {
    id: '4',
    name: 'Data de Vencimento',
  },
  {
    id: '5',
    name: 'Situação',
  },
];

const ActiveClientList = () => (
  <Container>
    <Header />
    <Content>
      <h2>Lista de Clientes Ativos</h2>
      <DivFilter>
        <h4>Filtrar por</h4>
        <form action="">
          <select name="subject" id="subject" required>
            <option value="">Selecione uma opção</option>
            {filterType.map((fiType) => (
              <option value={fiType.id}>{fiType.name}</option>
            ))}
          </select>
          {/* {console.log(document.getElementById('subject'))} */}
        </form>
      </DivFilter>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Data Contrato</th>
            <th>Servidor</th>
            <th>Data Vencimento</th>
            <th>Situação</th>
            <th>Status</th>
            <th>Ver</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} id="tableBody">
              <td>{user.name}</td>
              <td>{user.contract}</td>
              <td>{user.server}</td>
              <td>{user.expirationDate}</td>
              <td>{user.situation}</td>
              <td>{user.status}</td>
              <td>
                <button type="submit">
                  <FiEye size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Content>
  </Container>
);

export default ActiveClientList;
