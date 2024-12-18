// src/components/Navbar/styles.tsx
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Contêiner da Navbar
export const NavbarContainer = styled.nav<{ isScrolled: boolean }>`
  background-color: ${({ isScrolled }) => (isScrolled ? 'rgba(0, 0, 0, 0.1)' : 'rgba(0, 0, 0, 0.8)')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  position: fixed; /* Alterado de sticky para fixed */
  width: 100%; /* Garante que a navbar ocupe toda a largura da tela */
  top: 0;
  z-index: 1000;
  transition: background-color 0.3s ease; 
  pointer-events: auto; /* Permite interação com a navbar */
`;



// Estilo da Div da Marca
export const Brand = styled.div`
  display: flex;
  align-items: center;
`;

// Logo com Estilo Personalizado
export const Logo = styled(Link)`
  font-size: 2rem;
  color: #027ed1;
  text-decoration: none;
  font-weight: bold;
  margin-right: 30px;

  &:hover {
    color: #AB3428;
  }
`;

// Estilo da Lista de Links
export const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: none; /* Oculta os links normais no modo mobile */
  }
`;

// Estilo dos Itens da Lista de Links
export const NavLinkItem = styled.li`
  margin: 0;
`;

// Links Estilizados
export const StyledLink = styled(Link)`
  color: #027ed1;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
  transition: color 0.3s;
  padding: 5px 10px;

  &:hover {
    color: #AB3428;
  }
`;

// Botão do Menu Burger
export const BurgerButton = styled.button`
  display: none; /* Esconde o botão no modo desktop */
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  background: #027ed1;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;

  span {
    width: 100%;
    height: 3px;
    background: #027ed1;
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
    display: flex; /* Mostra o botão no modo mobile */
  }
`;

// Menu Lateral
export const SidebarContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 250px;
  height: 100%;
  background-color: #020202;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease;
  z-index: 1000;

  @media (min-width: 769px) {
    display: none; /* Esconde o menu lateral em telas grandes */
  }
`;
