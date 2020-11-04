import React from 'react';

import {
  Container,
  Content,
  Title,
  AboutMe,
  PersonalData,
  Formations,
  Improvement,
  Knowledge,
  ProfessionalExperience,
  Objective,
  Avatar,
  Footer,
} from './styles';

import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import whatsapp from '../../assets/whatsapp.svg';

const Home = () => {
  const message = 'Olá Murilo Lemes, tudo bem?';
  const cell = '5517982152311';

  const apiWhats = `https://api.whatsapp.com/send?phone=${cell}&text=${message}`;

  return (
    <Container>
      <Title>
        <h1>Murilo Henrique Lemes</h1>
      </Title>

      <Content>
        <div id="backgroundAvatar">
          <AboutMe>
            <h2>Sobre Mim</h2>
            <p>
              Iniciante em desenvolvimento front-end e back-end com as
              tecnologias ReactJs e Node.js. Estou sempre tentando ser melhor
              que ontem, gosto de enfrentar novos desafios e meus medos para
              melhorar a cada dia, estou sempre disposto a aprender e a ajudar
              as pessoas.
            </p>
          </AboutMe>

          <PersonalData>
            <h2>Dados Pessoais</h2>
            <div>
              <h4>Data de nascimento:</h4>
              <p>10/12/1992</p>
            </div>
            <div>
              <h4>Estado Civil:</h4>
              <p>Solteiro</p>
            </div>
            <div>
              <h4>Endereço:</h4>
              <p>Alameda Maria Mazer Moré, 27 - Jd. Universitário</p>
            </div>

            <div>
              <h4>Cidade:</h4>
              <p>Olímpia - SP</p>
            </div>
            <div>
              <h4>Cep:</h4>
              <p>15407-054</p>
            </div>
            <div>
              <h4>Telefone:</h4>
              <a href={apiWhats}>(17) 98215-2311</a>
            </div>
            <div>
              <h4>CNH:</h4>
              <p>A/B</p>
            </div>
            <div>
              <h4>E-mail:</h4>
              <p>murilo.lemes.ml@gmail.com</p>
            </div>
          </PersonalData>

          <Formations>
            <h2>Formações</h2>
            <p>Ensino Médio Completo - Dalva Vieira Itavo</p>
            <p>
              Técnico em Automação Industrial - LiceuTec - (Barretos/SP) - 2012
            </p>
            <p>
              Cursando Ciência da Computação - Unip - (São José do Rio Preto/SP)
            </p>
          </Formations>

          <Improvement>
            <h2>Atividades de Aperfeiçoamento</h2>
            <p>Informática Avançada (Programador) - Prepara Cursos</p>
            <p>Formação Node.js - Alura</p>
            <p>Formação React - Alura</p>
            <p>Bootcamp GoStack - Rocketseat</p>
          </Improvement>

          <Knowledge>
            <h2>Conhecimentos</h2>
            <p>HTML 5, CSS 3, JavaScript, ReactJs, Node.js, API Rest e Git</p>
          </Knowledge>

          <ProfessionalExperience>
            <h2>Experiência Proficional</h2>
            <p>
              Setembro de 2018 à Agosto de 2020 - Rossi Empreendimentos
              Imobiliários LTDA
            </p>
            <div>
              <h4>Cargo:</h4>
              <p>Auxiliar de Analista de Sistema</p>
            </div>
            <div>
              <h4>Atividades:</h4>
              <p>
                Suporte Técnico, manutenção em computadores e atendimento ao
                usuário
              </p>
            </div>
          </ProfessionalExperience>

          <Objective>
            <h2>Objetivos</h2>
            <p>
              Pretendo com meu conhecimento colaborar com o crescimento da
              empresa com empenho e dedicação.
            </p>
          </Objective>
        </div>
        <Avatar />
      </Content>
      <Footer>
        <div id="links">
          <div className="git">
            <a href="https://github.com/murilolemes">
              <img src={github} alt="GitHub" />
            </a>
          </div>

          <div className="linkedIn">
            <a href="https://www.linkedin.com/in/murilolemes/">
              <img src={linkedin} alt="LinkedIn" />
            </a>
          </div>

          <div className="facebook">
            <a href="https://facebook.com/murilo.lemes.5">
              <img src={facebook} alt="Facebook" />
            </a>
          </div>

          <div className="instagram">
            <a href="https://instagram.com/murilo.lemes/">
              <img src={instagram} alt="Instagram" />
            </a>
          </div>

          <div className="whatsapp">
            <a href={apiWhats}>
              <img src={whatsapp} alt="WhatsApp" />
            </a>
          </div>
        </div>

        <p>Desenvolvido por Murilo Lemes</p>
      </Footer>
    </Container>
  );
};
export default Home;
