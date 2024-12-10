import React from 'react';
import Header from '../../components/Header/index.tsx';
import Navbar from '../../components/Navbar/index.tsx';
import { Container } from './styles.tsx';
import Footer from '../../components/Footer/index.tsx';
import QuestionsCarousel from '../../components/Questions/index.tsx';
import Contact from '../../components/Contact/index.tsx'
const Questions: React.FC = () => {
  return (
    <Container>
        <Header url="img4"/>
        <Navbar/>

        <QuestionsCarousel/>

        <Contact/>

        <Footer/>
    </Container>
  );
};

export default Questions;
