// src/components/Navbar/index.tsx
import React, { useState } from 'react';
import { NavbarContainer, Brand, Logo, NavLinks, NavLinkItem, StyledLink } from './styles.tsx';
import Burger from '../Burger/index.tsx';
import Sidebar from '../SideBar/index.tsx';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>
      <Brand>
        <Logo to="/">Temporal Analysis</Logo>
      </Brand>
      <NavLinks>
        <NavLinkItem><StyledLink to="/">Home</StyledLink></NavLinkItem>
        <NavLinkItem><StyledLink to="/about">About</StyledLink></NavLinkItem>
        <NavLinkItem><StyledLink to="/database">DataBase</StyledLink></NavLinkItem>
        <NavLinkItem><StyledLink to="/projects">Analysis</StyledLink></NavLinkItem>
        <NavLinkItem><StyledLink to="/contact">Contact</StyledLink></NavLinkItem>
      </NavLinks>
      <Burger isOpen={isOpen} toggleMenu={toggleMenu} />
      <Sidebar isOpen={isOpen} toggleMenu={toggleMenu} />
    </NavbarContainer>
  );
};

export default Navbar;
