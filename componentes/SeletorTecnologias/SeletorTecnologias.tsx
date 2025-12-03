"use client"

import React, { useState } from 'react'
import tecnologias from "@/app/data/tecnologias.json"


export default function SeletorTecnologias() {

    const [opcao, setOpcao] = useState("")



  return (

    <section className="bg-blue-300 p-2 pb-4 mt-6 rounded-xl">
      <h2>Escolha uma opção:</h2>

      <select value={opcao} 
      onChange={(e) => setOpcao(e.target.value)}
      className="bg-orange-300 hover:bg-orange-400 active:bg-orange-500 hover:pointer text-white font-bold py-2 px-4 m-2 border border-green-700 rounded">

        <option value="">Selecione...</option>

        {tecnologias.map((tecnologia, index) => (
        <option key={index} value={`${tecnologia.title}`}>{`${tecnologia.title}`}</option>
            ))}

      </select>

      <p>Opção escolhida: {opcao}</p>
    </section>


  )
}
