import React from 'react';
import { HomeContainer, HeaderContainer} from './styles.tsx'; // Importando estilos personalizados
import Header from '../../components/Header/index.tsx';
import Navbar from '../../components/Navbar/index.tsx';
import WhatIs from '../../components/WhatIs/index.tsx';
import OurDataSet from '../../components/OurDataset/index.tsx';
import Footer from '../../components/Footer/index.tsx';
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

      <OurDataSet/>
      <Footer/>
    </HomeContainer>
  );
};

export default Home;
