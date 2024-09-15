// src/components/Burger/index.tsx
import React from 'react';
import { BurgerButton } from './styles.tsx';

interface BurgerProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const Burger: React.FC<BurgerProps> = ({ isOpen, toggleMenu }) => {
  return (
    <BurgerButton onClick={toggleMenu}>
      <span className={isOpen ? 'open' : ''} />
      <span className={isOpen ? 'open' : ''} />
      <span className={isOpen ? 'open' : ''} />
    </BurgerButton>
  );
};

export default Burger;
