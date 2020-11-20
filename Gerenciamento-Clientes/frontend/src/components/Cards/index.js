import React from 'react';

import {
  Container,
  CardActiveClient,
  CardInativeClient,
  CardActiveServers,
  CardInativeServers,
} from './styles';

const Cards = () => (
  <Container>
    <CardActiveClient>
      <h2>Clientes Ativos</h2>
      <p>1.250</p>
    </CardActiveClient>
    <CardInativeClient>
      <h2>Clientes Inativos</h2>
      <p>50</p>
    </CardInativeClient>
    <CardActiveServers>
      <h2>Servidores Ativos</h2>
      <p>15</p>
    </CardActiveServers>
    <CardInativeServers>
      <h2>Servidores Inativos</h2>
      <p>15</p>
    </CardInativeServers>
  </Container>
);
export default Cards;
