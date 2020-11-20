import React from 'react';
import { Bar } from 'react-chartjs-2';
import { shade } from 'polished';

import { Container } from './styles';

const listServers = [
  {
    server: 'Server 1',
    qtd: 517,
  },
  {
    server: 'Server 2',
    qtd: 833,
  },
  {
    server: 'Server 3',
    qtd: 478,
  },
  {
    server: 'Server 4',
    qtd: 654,
  },
  {
    server: 'Server 5',
    qtd: 159,
  },
  {
    server: 'Server 6',
    qtd: 957,
  },
  {
    server: 'Server 7',
    qtd: 777,
  },
];

const listPlans = [
  {
    plan: 'Plano 1 tela HD',
    qtd: '1205',
  },
  {
    plan: 'Plano 1 tela Full HD',
    qtd: '977',
  },
  {
    plan: 'Plano 2 tela HD',
    qtd: '1054',
  },
  {
    plan: 'Plano 2 tela Full HD',
    qtd: '899',
  },
  {
    plan: 'Plano 3 tela HD',
    qtd: '1368',
  },
  {
    plan: 'Plano 3 tela Full HD',
    qtd: '1295',
  },
  {
    plan: 'Plano 4 tela HD',
    qtd: '1580',
  },
  {
    plan: 'Plano 4 tela Full HD',
    qtd: '1445',
  },
  {
    plan: 'Plano Adulto HD',
    qtd: '1150',
  },
  {
    plan: 'Plano Adulto Full HD',
    qtd: '924',
  },
];

export const GraphicsServers = () => {
  const data = {
    labels: listServers.map((servers) => servers.server),
    datasets: [
      {
        label: 'Crédito disponível por servidor',
        data: listServers.map((servers) => servers.qtd),
        backgroundColor: shade(0.2, '#ff9000'),
        hoverBackgroundColor: '#ff9000',
      },
    ],
  };

  return (
    <Container>
      <Bar
        data={data}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </Container>
  );
};

export const GraphicsClient = () => {
  const data = {
    labels: listServers.map((servers) => servers.server),
    datasets: [
      {
        label: 'Clientes ativos por servidor',
        data: listServers.map((servers) => servers.qtd),
        backgroundColor: shade(0.2, '#ff9000'),
        hoverBackgroundColor: '#ff9000',
      },
    ],
  };

  return (
    <Container>
      <Bar
        data={data}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </Container>
  );
};

export const GraphicsPlans = () => {
  const data = {
    labels: listPlans.map((plans) => plans.plan),
    datasets: [
      {
        label: 'Clientes ativos por servidor',
        data: listPlans.map((plans) => plans.qtd),
        backgroundColor: shade(0.2, '#ff9000'),
        hoverBackgroundColor: '#ff9000',
      },
    ],
  };

  return (
    <Container>
      <Bar
        data={data}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </Container>
  );
};
