import React from 'react';
import { Container, HeaderContainer } from './styles.tsx';
import Header from '../../components/Header/index.tsx';
import Navbar from '../../components/Navbar/index.tsx';
import Footer from '../../components/Footer/index.tsx';
import AboutDiv from '../../components/AboutDiv/index.tsx';

const Questions: React.FC = () => {
  return (
    <Container>
      <Navbar/>

        <HeaderContainer>
        <Header url="img3"/>
        </HeaderContainer>
        
        <AboutDiv/>
        
        <Footer/>
    </Container>
  );
};

export default Questions;
