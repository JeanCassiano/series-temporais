import React from 'react';
import { HomeContainer, HeaderContainer} from './styles.tsx'; // Importando estilos personalizados
import Header from '../../components/Header/index.tsx';
import Navbar from '../../components/Navbar/index.tsx';
import WhatIs from '../../components/WhatIs/index.tsx';
const Home: React.FC = () => {
  return (
    
    <HomeContainer>
      <Navbar/>
      <HeaderContainer>
      <Header 
        url="img1" 
      />
      </HeaderContainer>
      <WhatIs/>
    </HomeContainer>
  );
};

export default Home;
