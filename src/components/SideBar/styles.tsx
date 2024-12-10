// src/components/Sidebar/styles.tsx
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
`;

export const NavLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const NavLinkItem = styled.li`
  margin: 0;
`;

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
