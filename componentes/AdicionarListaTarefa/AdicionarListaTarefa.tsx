"use client"


import React, { useState } from 'react'

export default function AdicionarListaTarefa() {
  const [tarefas, setTarefas] = useState<string[]>([])
  const [novaTarefa, setNovaTarefa] = useState<string>("")


  const [tarefaEditando, setTarefaEditando] = useState<number | null>(null)
  const [textoEditado, setTextoEditado] = useState("")
  

  function adicionarTarefa(){
    setTarefas([... tarefas, novaTarefa])
    setNovaTarefa("")
  }

  function apagarTarefa(index: number){
    const novasTarefas = tarefas.filter((_, i) => i !== index);
    setTarefas(novasTarefas);
  }

  function editarTarefa(index: number, txt: string) {

  const novasTarefas = [...tarefas]
  novasTarefas[index] = txt

  setTarefas(novasTarefas)
  }
  



  return (
    <>
    <section className="bg-blue-300 p-2 pb-4 mt-6 rounded-xl">

      <input
            className="bg-green-500 hover:bg-green-600 active:bg-green-700 hover:pointer text-white font-bold py-2 px-4 m-2 border border-green-700 rounded"
            type="text"
            placeholder="Edita aqui..."
            value={textoEditado}
            onChange={(e) =>{
              setTextoEditado(e.target.value)
            }}
          />
          <br />
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
      {tarefas.map((tarefa, index)=>{
          
        return (
        <>
        <li key={index}>{tarefa}</li>
        <button 
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          onClick={() => apagarTarefa(index)}>Apagar</button> 

           <button 
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          onClick={() =>editarTarefa(index,textoEditado)}>Editar</button> 

        </>
      )
      })}

      </ul>


    </section>
    

    </>
      
    
  )
}
