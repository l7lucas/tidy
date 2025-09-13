import React, { useState } from "react";

function Tarefas() {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [tarefas, setTarefas] = useState<string[]>([]);

  const urlWebApp = "https://script.google.com/macros/s/AKfycbxYeeyaaLXNC_Mh3jnjBl6n-s0ziPF_ox5RkEx5F_LSQUXgmlzkBRIjoYwRW1_hg07n/exec";

  const adicionarTarefa = async () => {
    if (!novaTarefa) return;

    try {
      const res = await fetch(urlWebApp, {
        method: "POST",
        body: JSON.stringify({ tarefa: novaTarefa }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (data.status === "ok") {
        setTarefas([...tarefas, novaTarefa]);
        setNovaTarefa("");
      }
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
