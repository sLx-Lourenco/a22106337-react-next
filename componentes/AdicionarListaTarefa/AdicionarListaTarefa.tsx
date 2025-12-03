"use client"


import React, { useState } from 'react'

export default function AdicionarListaTarefa() {
  const [tarefas, setTarefas] = useState<string[]>([])
  const [novaTarefa, setNovaTarefa] = useState<string>("")

  function adicionarTarefa(){
    setTarefas([... tarefas, novaTarefa])
    setNovaTarefa("")
  }

  return (
    <>
    <section className="bg-blue-300 p-2 pb-4 mt-6 rounded-xl">
      <input
        className="bg-green-500 hover:bg-green-600 active:bg-green-700 hover:pointer text-white font-bold py-2 px-4 m-2 border border-green-700 rounded"

        type="text"
        placeholder="Escreve algo..."
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        />
      
      
      <button 
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      onClick={adicionarTarefa}>Adicionar</button>
      
      <p>Tarefas:</p>
      <ul>
      {tarefas.map((tarefa, index)=>(
        <li key={index}>{tarefa}</li>
      ))}

      </ul>


    </section>
    

    </>
      
    
  )
}
