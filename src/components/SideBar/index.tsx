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
        <NavLinkItem><StyledLink to="/skills" onClick={toggleMenu}>Skills</StyledLink></NavLinkItem>
        <NavLinkItem><StyledLink to="/projects" onClick={toggleMenu}>Projects</StyledLink></NavLinkItem>
        <NavLinkItem><StyledLink to="/contact" onClick={toggleMenu}>Contact</StyledLink></NavLinkItem>
      </NavLinks>
    </SidebarContainer>
  );
};

export default Sidebar;
