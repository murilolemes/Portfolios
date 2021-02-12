import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiChevronDown } from 'react-icons/fi';

import {
  Container,
  Header,
  Content,
  Body,
  DivSelectCity,
  DivCards,
} from './styles';

function CityList() {
  return (
    <Container>
      <Header>
        <div id="contentHeader">
          <Link to="/">
            <img src="/assets/Logo.svg" alt="Logo" />
          </Link>
          <div>
            <FiSearch />
            <input type="text" placeholder="Qual cidade você procura?" />
          </div>
          <button type="button">Acesso Restrito</button>
        </div>
      </Header>
      <Content>
        <Body>
          <DivSelectCity>
            <h2>Selecione uma cidade</h2>
            <ul>
              <li>Todas</li>
              <li>Mais acessadas</li>
              <li>A - Z</li>
              <li>
                <FiChevronDown />
              </li>
            </ul>
          </DivSelectCity>
          <DivCards>
            <div className="card">
              <img src="/assets/image3.png" alt="Florianópolis" />
              <div className="descriptionCard">
                <h3>Florianópolis</h3>
                <p>98 locais</p>
              </div>
            </div>
            <div className="card">
              <img src="/assets/image2.png" alt="Florianópolis" />
              <div className="descriptionCard">
                <h3>Florianópolis</h3>
                <p>98 locais</p>
              </div>
            </div>
            <div className="card">
              <img src="/assets/image1.png" alt="Florianópolis" />
              <div className="descriptionCard">
                <h3>Florianópolis</h3>
                <p>98 locais</p>
              </div>
            </div>
            <div className="card">
              <img src="/assets/image4.png" alt="Florianópolis" />
              <div className="descriptionCard">
                <h3>Florianópolis</h3>
                <p>98 locais</p>
              </div>
            </div>
            <div className="card">
              <img src="/assets/image3.png" alt="Florianópolis" />
              <div className="descriptionCard">
                <h3>Florianópolis</h3>
                <p>98 locais</p>
              </div>
            </div>
            <div className="card">
              <img src="/assets/image2.png" alt="Florianópolis" />
              <div className="descriptionCard">
                <h3>Florianópolis</h3>
                <p>98 locais</p>
              </div>
            </div>
            <div className="card">
              <img src="/assets/image1.png" alt="Florianópolis" />
              <div className="descriptionCard">
                <h3>Florianópolis</h3>
                <p>98 locais</p>
              </div>
            </div>
            <div className="card">
              <img src="/assets/image4.png" alt="Florianópolis" />
              <div className="descriptionCard">
                <h3>Florianópolis</h3>
                <p>98 locais</p>
              </div>
            </div>
            <div className="card">
              <img src="/assets/image3.png" alt="Florianópolis" />
              <div className="descriptionCard">
                <h3>Florianópolis</h3>
                <p>98 locais</p>
              </div>
            </div>
            <div className="card">
              <img src="/assets/image2.png" alt="Florianópolis" />
              <div className="descriptionCard">
                <h3>Florianópolis</h3>
                <p>98 locais</p>
              </div>
            </div>
            <div className="card">
              <img src="/assets/image1.png" alt="Florianópolis" />
              <div className="descriptionCard">
                <h3>Florianópolis</h3>
                <p>98 locais</p>
              </div>
            </div>
            <div className="card">
              <img src="/assets/image4.png" alt="Florianópolis" />
              <div className="descriptionCard">
                <h3>Florianópolis</h3>
                <p>98 locais</p>
              </div>
            </div>
            <div className="card">
              <img src="/assets/image3.png" alt="Florianópolis" />
              <div className="descriptionCard">
                <h3>Florianópolis</h3>
                <p>98 locais</p>
              </div>
            </div>
            <div className="card">
              <img src="/assets/image2.png" alt="Florianópolis" />
              <div className="descriptionCard">
                <h3>Florianópolis</h3>
                <p>98 locais</p>
              </div>
            </div>
            <div className="card">
              <img src="/assets/image1.png" alt="Florianópolis" />
              <div className="descriptionCard">
                <h3>Florianópolis</h3>
                <p>98 locais</p>
              </div>
            </div>
            <div className="card">
              <img src="/assets/image4.png" alt="Florianópolis" />
              <div className="descriptionCard">
                <h3>Florianópolis</h3>
                <p>98 locais</p>
              </div>
            </div>
            <div className="card">
              <img src="/assets/image3.png" alt="Florianópolis" />
              <div className="descriptionCard">
                <h3>Florianópolis</h3>
                <p>98 locais</p>
              </div>
            </div>
            <div className="card">
              <img src="/assets/image2.png" alt="Florianópolis" />
              <div className="descriptionCard">
                <h3>Florianópolis</h3>
                <p>98 locais</p>
              </div>
            </div>
            <div className="card">
              <img src="/assets/image1.png" alt="Florianópolis" />
              <div className="descriptionCard">
                <h3>Florianópolis</h3>
                <p>98 locais</p>
              </div>
            </div>
            <div className="card">
              <img src="/assets/image4.png" alt="Florianópolis" />
              <div className="descriptionCard">
                <h3>Florianópolis</h3>
                <p>98 locais</p>
              </div>
            </div>
            <div className="card">
              <img src="/assets/image3.png" alt="Florianópolis" />
              <div className="descriptionCard">
                <h3>Florianópolis</h3>
                <p>98 locais</p>
              </div>
            </div>
            <div className="card">
              <img src="/assets/image2.png" alt="Florianópolis" />
              <div className="descriptionCard">
                <h3>Florianópolis</h3>
                <p>98 locais</p>
              </div>
            </div>
            <div className="card">
              <img src="/assets/image1.png" alt="Florianópolis" />
              <div className="descriptionCard">
                <h3>Florianópolis</h3>
                <p>98 locais</p>
              </div>
            </div>
            <div className="card">
              <img src="/assets/image4.png" alt="Florianópolis" />
              <div className="descriptionCard">
                <h3>Florianópolis</h3>
                <p>98 locais</p>
              </div>
            </div>
            <div className="card">
              <img src="/assets/image3.png" alt="Florianópolis" />
              <div className="descriptionCard">
                <h3>Florianópolis</h3>
                <p>98 locais</p>
              </div>
            </div>
            <div className="card">
              <img src="/assets/image2.png" alt="Florianópolis" />
              <div className="descriptionCard">
                <h3>Florianópolis</h3>
                <p>98 locais</p>
              </div>
            </div>
            <div className="card">
              <img src="/assets/image1.png" alt="Florianópolis" />
              <div className="descriptionCard">
                <h3>Florianópolis</h3>
                <p>98 locais</p>
              </div>
            </div>
            <div className="card">
              <img src="/assets/image4.png" alt="Florianópolis" />
              <div className="descriptionCard">
                <h3>Florianópolis</h3>
                <p>98 locais</p>
              </div>
            </div>
            <div className="card">
              <img src="/assets/image3.png" alt="Florianópolis" />
              <div className="descriptionCard">
                <h3>Florianópolis</h3>
                <p>98 locais</p>
              </div>
            </div>
            <div className="card">
              <img src="/assets/image2.png" alt="Florianópolis" />
              <div className="descriptionCard">
                <h3>Florianópolis</h3>
                <p>98 locais</p>
              </div>
            </div>
            <div className="card">
              <img src="/assets/image1.png" alt="Florianópolis" />
              <div className="descriptionCard">
                <h3>Florianópolis</h3>
                <p>98 locais</p>
              </div>
            </div>
            <div className="card">
              <img src="/assets/image4.png" alt="Florianópolis" />
              <div className="descriptionCard">
                <h3>Florianópolis</h3>
                <p>98 locais</p>
              </div>
            </div>
          </DivCards>
        </Body>
      </Content>
    </Container>
  );
}

export default CityList;
