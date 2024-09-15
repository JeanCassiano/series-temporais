// src/components/Layout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/index.tsx';
import { LayoutContainer, ContentContainer } from './styles.tsx';

const Layout: React.FC = () => {
  return (
    <LayoutContainer>
      <Navbar />
      <ContentContainer>
        <Outlet /> {/* Renderiza o componente correspondente à rota */}
      </ContentContainer>
    </LayoutContainer>
  );
};

export default Layout;
