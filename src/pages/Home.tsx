import React, { useState } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import "./Home.css";

import Tarefas from "./Tarefas";
import Compras from "./Compras";
import Financas from "./Financas";
import Veiculos from "./Veiculos";

function Home() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="home-container">
      {/* Botão sempre acessível no mobile */}
      <button
        className={`toggle-btn ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "←" : "≡"}
      </button>

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? "open" : "collapsed"}`}>
        <nav className="menu">
          {isOpen && (
            <>
              <NavLink to="/tarefas" className={({ isActive }) => (isActive ? "active" : "")}>
                Tarefas
              </NavLink>
              <NavLink to="/compras" className={({ isActive }) => (isActive ? "active" : "")}>
                Compras
              </NavLink>
              <NavLink to="/financas" className={({ isActive }) => (isActive ? "active" : "")}>
                Finanças
              </NavLink>
              <NavLink to="/veiculos" className={({ isActive }) => (isActive ? "active" : "")}>
                Veículos
              </NavLink>
            </>
          )}
        </nav>
      </aside>

      {/* Conteúdo central */}
      <div className="content">
        <div className="pad">
          <Routes>
            <Route path="/tarefas" element={<Tarefas />} />
            <Route path="/compras" element={<Compras />} />
            <Route path="/financas" element={<Financas />} />
            <Route path="/veiculos" element={<Veiculos />} />
            <Route path="/" element={<h2>Bem-vindo ao Tidy!</h2>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Home;
