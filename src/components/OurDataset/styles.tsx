import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; /* Ocupa toda a altura da tela */
  background-color: transparent;
  padding: 20px;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem; /* Ajusta o tamanho da fonte em telas menores */
  }
`;

export const Description = styled.p`
  font-size: 1.2rem;
  color: #e0e0e0;
  margin-bottom: 40px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem; /* Ajusta o tamanho da fonte em telas menores */
  }
`;

export const ChartWrapper = styled.div`
  width: 100%;
  height: 70vh; /* Faz o gráfico ocupar 70% da altura da tela */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px auto 0 auto; /* Adiciona uma margem no topo de 50px */

  @media (max-width: 1024px) {
    height: 50vh; /* Reduz a altura do gráfico em telas médias */
  }

  @media (max-width: 768px) {
    height: 40vh; /* Reduz a altura do gráfico em telas pequenas */
  }

  @media (max-width: 480px) {
    height: 30vh; /* Reduz ainda mais a altura do gráfico em telas muito pequenas */
  }
`;
