import styled from 'styled-components';

export const CanvasContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px; /* Margem inferior do gráfico */
  margin-top: 30px;
  

  /* Estilos responsivos usando @media */
  @media (max-width: 768px) {
    .recharts-wrapper {
      width: 100% !important; /* Garante que o gráfico ocupe 100% da largura em telas menores */
    }
  }

  @media (min-width: 769px) and (max-width: 1200px) {
    .recharts-wrapper {
      width: 80% !important; /* Ajusta para 80% da largura em telas médias */
    }
  }

  @media (min-width: 1201px) {
    .recharts-wrapper {
      width: 600px; /* Largura fixa em telas grandes */
    }
  }
`;
