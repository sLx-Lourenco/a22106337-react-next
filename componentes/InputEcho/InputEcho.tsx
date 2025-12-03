'use client'
import { useState } from 'react'

export default function InputEcho() {
  
    //
    // A. Gestão de Estados
    const [texto, setTexto] = useState("")


    // 
    // B. Renderização de componentes
    return (
        <section className="bg-blue-300 p-2 pb-4 mt-6 rounded-xl">

            <h2>Input de Texto e seu Input</h2>
            
            <input
                type="text"
                placeholder="Escreva algo..."
                className="bg-green-500 hover:bg-green-600 active:bg-green-700 hover:pointer text-white font-bold py-2 px-4 m-2 border border-green-700 rounded"
                value={texto}
                onChange={(e) => setTexto(e.target.value)}

            />
            <p>Texto digitado: {texto}</p> 
        </section>
    )
}
