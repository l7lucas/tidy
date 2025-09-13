import React from "react";

function Tarefas() {
  return (
    <div>
      <h2>Página de Tarefas</h2>
      {[...Array(100)].map((_, i) => (
        <p key={i}>Linha de tarefa número {i + 1}</p>
      ))}
    </div>
  );
}

export default Tarefas;
