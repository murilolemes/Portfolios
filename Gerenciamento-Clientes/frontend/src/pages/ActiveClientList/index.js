import React, { useState, useCallback } from 'react';
import { FiEye } from 'react-icons/fi';

import Header from '../../components/Header';

import { Container, Content, DivFilter, InputDiv, SelectDiv } from './styles';

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
    name: 'Servidor',
  },
  {
    id: '3',
    name: 'Situação',
  },
  {
    id: '4',
    name: 'Data de Contrato',
  },
  {
    id: '5',
    name: 'Data de Vencimento',
  },
];

const ActiveClientList = () => {
  const [isSelected, setIsSelected] = useState('');

  const handleSelect = useCallback(() => {
    const selected = document.getElementById('searchFor').value;

    setIsSelected(selected);
  }, []);

  const handleFilter = useCallback((id) => {
    const selectDiv = document.getElementById('SelectDiv');

    switch (id) {
      case '1':
        selectDiv.style.display = 'flex';
        selectDiv.innerHTML = `
          <div>
            <input type="text" placeholder="Digite o nome"/>
          </div>
          <button type="button">Enviar</button>
        `;
        break;

      case '2':
        selectDiv.style.display = 'flex';
        selectDiv.innerHTML = `
        <div>
            <input type="text" placeholder="Digite o servidor"/>
          </div>
          <button type="button">Enviar</button>
        `;
        break;

      case '3':
        selectDiv.style.display = 'flex';
        selectDiv.innerHTML = `
          <div>
            <input type="text" placeholder="Digite a situação"/>
          </div>
          <button type="button">Enviar</button>

        `;
        break;

      case '4':
        selectDiv.style.display = 'flex';
        selectDiv.innerHTML = `
          <div>
            <input type="date" />
          </div>
          <p>até</p>
          <div>
            <input type="date" />
          </div>
          <button type="button">Enviar</button>
        `;
        break;

      case '5':
        selectDiv.style.display = 'flex';
        selectDiv.innerHTML = `
          <div>
            <input type="date" />
          </div>
          <p>até</p>
          <div>
            <input type="date" />
          </div>
          <button type="button">Enviar</button>
        `;
        break;

      default:
        if (selectDiv === null) {
          break;
        } else {
          selectDiv.style.display = 'none';
        }

        break;
    }
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <h2>Lista de Clientes Ativos</h2>
        <DivFilter>
          <p>Filtrar por</p>
          <form action="">
            <SelectDiv>
              <select id="searchFor" onChange={handleSelect} required>
                <option value="">Selecione uma opção</option>
                {filterType.map((fiType) => (
                  <option key={fiType.id} value={fiType.id}>
                    {fiType.name}
                  </option>
                ))}
              </select>
            </SelectDiv>
            <InputDiv id="SelectDiv">{handleFilter(isSelected)}</InputDiv>
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
                  <button type="button">
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
};
export default ActiveClientList;
