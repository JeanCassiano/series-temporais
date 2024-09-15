// src/components/Burger/styles.tsx
import styled from 'styled-components';

export const BurgerButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;

  span {
    width: 100%;
    height: 3px;
    background: #add8e6;
    border-radius: 10px;
    transition: all 0.3s ease;
  }

  /* Animação do ícone de hambúrguer ao abrir */
  & span.open:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }
  
  & span.open:nth-child(2) {
    opacity: 0;
  }

  & span.open:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;
