import React, { useState } from "react";

function Tarefas() {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [tarefas, setTarefas] = useState<string[]>([]);

  const urlWebApp = "https://script.google.com/macros/s/AKfycbylNfIZuUFY-0z3ybcvWao6ZpdzNuJ8jWn1yYgj1O8uLSEMqHcoRgA9-thD6shZ8Tk8/exec";

  const adicionarTarefa = async () => {
    if (!novaTarefa) return;

    try {
      const formData = new FormData();
      formData.append("tarefa", novaTarefa);

      const res = await fetch(urlWebApp, {
        method: "POST",
        body: formData,
      });

      // Como a resposta pode não ser legível em alguns casos,
      // vamos apenas assumir que deu certo se não der erro no fetch.
      setTarefas([...tarefas, novaTarefa]);
      setNovaTarefa("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Página de Tarefas</h2>

      <input
        type="text"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        placeholder="Digite a nova tarefa"
      />
      <button onClick={adicionarTarefa}>Nova Tarefa</button>

      <ul>
        {tarefas.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default Tarefas;
