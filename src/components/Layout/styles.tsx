// src/components/styles.tsx
import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #2f2f2f; /* Fundo cinza levemente escuro */
  color: #ffffff; /* Cor padrão da fonte em branco */
`;

export const ContentContainer = styled.main`
  flex: 1;
  padding: 20px;
  background-color: #030114; /* Fundo do conteúdo */
  color: #ffffff; /* Cor do texto */
  display: flex;
  justify-content: center;
  align-items: center;
`;
