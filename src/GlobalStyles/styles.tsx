// src/styles/GlobalStyles.tsx
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #030114; /* Fundo cinza levemente escuro */
    color: #ffffff; /* Cor padrão da fonte em branco */
    font-family: 'Poppins', sans-serif; /* Aplicando a nova fonte */
    line-height: 1.6;
  }

  a {
    color: #add8e6; /* Azul claro para links */
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #ffffff; /* Branco ao passar o mouse */
    }
  }
`;

export default GlobalStyles;
