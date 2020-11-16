import React from 'react';
import { FiEdit } from 'react-icons/fi';

import Header from '../../components/Header';

import {
  Container,
  Content,
  Body,
  Title,
  ActiveClient,
  InativeCustomers,
  ServersList,
  PlansList,
  DivTable,
  DivButton,
} from './styles';

const Dashboard = () => (
  <Container>
    <Header />
    <Content>
      <Body>
        <div id="title">
          <Title>Sistema de Gerenciamento de Clientes</Title>
        </div>
        <div className="tables">
          <ActiveClient className="activeClients">
            <h2>Lista de Clientes Ativos</h2>
            <DivTable>
              <table>
                <tr>
                  <th>Nome</th>
                  <th>Servidor</th>
                  <th>Vencimento</th>
                  <th>Situação</th>
                  <th>Ver</th>
                </tr>
                <tr>
                  <td>Murilo Henrique Lemes</td>
                  <td>Blade</td>
                  <td>16/11/2020</td>
                  <td>Pago</td>
                  <td>
                    <button type="button">
                      <FiEdit />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Murilo Henrique Lemes</td>
                  <td>Blade</td>
                  <td>16/11/2020</td>
                  <td>Pago</td>
                  <td>
                    <button type="button">
                      <FiEdit />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Murilo Henrique Lemes</td>
                  <td>Blade</td>
                  <td>16/11/2020</td>
                  <td>Pago</td>
                  <td>
                    <button type="button">
                      <FiEdit />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Murilo Henrique Lemes</td>
                  <td>Blade</td>
                  <td>16/11/2020</td>
                  <td>Pago</td>
                  <td>
                    <button type="button">
                      <FiEdit />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Murilo Henrique Lemes</td>
                  <td>Blade</td>
                  <td>16/11/2020</td>
                  <td>Pago</td>
                  <td>
                    <button type="button">
                      <FiEdit />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Murilo Henrique Lemes</td>
                  <td>Blade</td>
                  <td>16/11/2020</td>
                  <td>Pago</td>
                  <td>
                    <button type="button">
                      <FiEdit />
                    </button>
                  </td>
                </tr>
              </table>
            </DivTable>
            <DivButton className="divButton">
              <button type="button">Ver Todos</button>
            </DivButton>
          </ActiveClient>
          <InativeCustomers className="inativeCustomers">
            <h2>Lista de clientes Inativos</h2>
            <DivTable>
              <table>
                <tr>
                  <th>Nome</th>
                  <th>Servidor</th>
                  <th>Vencimento</th>
                  <th>Situação</th>
                  <th>Ver</th>
                </tr>
                <tr>
                  <td>Murilo Henrique Lemes</td>
                  <td>Blade</td>
                  <td>16/11/2020</td>
                  <td>Deve</td>
                  <td>
                    <button type="button">
                      <FiEdit />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Murilo Henrique Lemes</td>
                  <td>Blade</td>
                  <td>16/11/2020</td>
                  <td>Deve</td>
                  <td>
                    <button type="button">
                      <FiEdit />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Murilo Henrique Lemes</td>
                  <td>Blade</td>
                  <td>16/11/2020</td>
                  <td>Deve</td>
                  <td>
                    <button type="button">
                      <FiEdit />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Murilo Henrique Lemes</td>
                  <td>Blade</td>
                  <td>16/11/2020</td>
                  <td>Deve</td>
                  <td>
                    <button type="button">
                      <FiEdit />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Murilo Henrique Lemes</td>
                  <td>Blade</td>
                  <td>16/11/2020</td>
                  <td>Deve</td>
                  <td>
                    <button type="button">
                      <FiEdit />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Murilo Henrique Lemes</td>
                  <td>Blade</td>
                  <td>16/11/2020</td>
                  <td>Deve</td>
                  <td>
                    <button type="button">
                      <FiEdit />
                    </button>
                  </td>
                </tr>
              </table>
            </DivTable>
            <DivButton className="divButton">
              <button type="button">Ver Todos</button>
            </DivButton>
          </InativeCustomers>
        </div>
        <div className="tables">
          <ServersList className="serversList">
            <h2>Lista de Servidores</h2>
            <DivTable>
              <table>
                <tr>
                  <th>Nome</th>
                  <th>Vencimento</th>
                  <th>Creditos</th>
                  <th>Ver</th>
                </tr>
                <tr>
                  <td>Blade</td>
                  <td>16/11/2020</td>
                  <td>300</td>
                  <td>
                    <button type="button">
                      <FiEdit />
                    </button>
                  </td>
                </tr>
              </table>
            </DivTable>
            <DivButton className="divButton">
              <button type="button">Ver Todos</button>
            </DivButton>
          </ServersList>
          <PlansList className="plansList">
            <h2>Lista de Planos</h2>
            <DivTable>
              <table>
                <tr>
                  <th>Nome</th>
                  <th>Servidor</th>
                  <th>Status</th>
                  <th>Ver</th>
                </tr>
                <tr>
                  <td>Plano Anual</td>
                  <td>Blade</td>
                  <td>Ativo</td>
                  <td>
                    <button type="button">
                      <FiEdit />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Plano Mensal</td>
                  <td>Blade</td>
                  <td>Ativo</td>
                  <td>
                    <button type="button">
                      <FiEdit />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Plano Semanal</td>
                  <td>Blade</td>
                  <td>Ativo</td>
                  <td>
                    <button type="button">
                      <FiEdit />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Plano Di[ario</td>
                  <td>Blade</td>
                  <td>Ativo</td>
                  <td>
                    <button type="button">
                      <FiEdit />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Plano anual</td>
                  <td>Blade</td>
                  <td>Ativo</td>
                  <td>
                    <button type="button">
                      <FiEdit />
                    </button>
                  </td>
                </tr>
              </table>
            </DivTable>
            <DivButton className="divButton">
              <button type="button">Ver Todos</button>
            </DivButton>
          </PlansList>
        </div>
      </Body>
    </Content>
  </Container>
);
export default Dashboard;
