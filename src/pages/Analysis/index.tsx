import React, { useEffect, useState } from "react";
import * as d3 from "d3";
import { Container } from "./styles.tsx";
import Header from "../../components/Header/index.tsx";
import Navbar from "../../components/Navbar/index.tsx";
import Footer from "../../components/Footer/index.tsx";
import Contact from "../../components/Contact/index.tsx";
import axios from 'axios';

const Analysis: React.FC = () => {
  
  return (
    <Container>
      <Header url="img2" />
      <Navbar />
      


      <Contact/>
      <Footer/>
    </Container>
  );
};

export default Analysis;
