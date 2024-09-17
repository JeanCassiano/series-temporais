// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/index.tsx';
/*import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';*/
import GlobalStyles from './GlobalStyles/styles.tsx'; // Importando estilos globais

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        //<Route path="/" element={<Home />}>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
