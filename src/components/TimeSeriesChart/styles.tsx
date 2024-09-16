// src/components/TimeSeriesChart/styles.tsx
import styled from 'styled-components';

export const CanvasContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px; /* Margem inferior do gráfico */
  margin-top: 30px;
  canvas {
    border: none; /* Remove a borda do canvas */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Sombra sutil */
    background-color: transparent; /* Fundo transparente */
  }
`;
