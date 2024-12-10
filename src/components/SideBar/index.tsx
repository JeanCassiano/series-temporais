// src/components/Sidebar/index.tsx
import React from 'react';
import { SidebarContainer, NavLinks, NavLinkItem, StyledLink } from './styles.tsx';

interface SidebarProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleMenu }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <NavLinks>
        <NavLinkItem><StyledLink to="/" onClick={toggleMenu}>Home</StyledLink></NavLinkItem>
        <NavLinkItem><StyledLink to="/about" onClick={toggleMenu}>About</StyledLink></NavLinkItem>
        <NavLinkItem><StyledLink to="/questions" onClick={toggleMenu}>Questions</StyledLink></NavLinkItem>
        <NavLinkItem><StyledLink to="/Analysis" onClick={toggleMenu}>Analysis</StyledLink></NavLinkItem>
      </NavLinks>
    </SidebarContainer>
  );
};

export default Sidebar;
