
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Tarefas from './pages/Tarefas';
import Compras from './pages/Compras';
import Financas from './pages/Financas';
import Veiculos from './pages/Veiculos';



function App() {
  return (

    
    <Router>
      <Header />
      <Navbar />
      <main style={{ textAlign: 'center' }}>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Navigate to="/tarefas" replace />} />
            <Route path="tarefas" element={<Tarefas />} />
            <Route path="compras" element={<Compras />} />
            <Route path="financas" element={<Financas />} />
            <Route path="veiculos" element={<Veiculos />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>


    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );
}

export default App;
