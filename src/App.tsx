// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/index.tsx';
/*import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';*/
import Layout from './components/Layout/index.tsx';
import GlobalStyles from './GlobalStyles/styles.tsx'; // Importando estilos globais

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyles /> {/* Aplicando estilos globais */}
      <Routes>
        {/* Definimos um layout geral que envolve todas as rotas */}
        //<Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
