'use client'
import { useEffect, useState } from "react"

interface PreferidaProps {
   tecnologia: string;
}

export default function ContadorPorTecnologia({tecnologia}:PreferidaProps) {

    //
    // A. Gestão de estados
    const [likes, setLikes] = useState(() => {
        const storedLikes = localStorage.getItem(tecnologia)||'0'
        return parseInt(storedLikes)
    })

    //
    // B. Efeitos
    useEffect(() => {
        localStorage.setItem(tecnologia, `${likes}`);
        document.title = tecnologia + ` ${likes} ❤️`;
    }, [likes])


    //
    // C. Renderização de componentes
    return (
        <>
            <button
      onClick={(e) => { 
        // Nao estava a perceber pk entrava na msm nos cards o chat deu me esta 2 linhas de codigo resolveu
        e.stopPropagation();   
        e.preventDefault(); 
        setLikes(likes + 1);
        }}
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-800 shadow hover:bg-gray-200 active:scale-95 transition-all"
    >
      ❤️
      {likes}
    </button>
        </>
    )
}
