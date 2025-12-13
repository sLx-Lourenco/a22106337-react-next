"use client";

import{ useState, useEffect } from 'react';

/**
 * Componente Relogio: Exibe a hora atual e a atualiza a cada segundo,
 * evitando erros de hidratação no Next.js.
 */
function Relogio() {
  // 1. Inicializa o estado como null. 
  // O servidor renderizará um valor vazio (ou '...')
  const [hora, setHora] = useState<Date | null>(null);

  useEffect(() => {
    // 2. A hora SÓ é definida APÓS o componente montar (no CLIENTE).
    setHora(new Date()); 
    
    // 3. Define o intervalo
    const intervalId = setInterval(() => {
      setHora(new Date());
    }, 1000);

    // Limpeza
    return () => {
      clearInterval(intervalId);
    };
  }, []); 

  // Se 'hora' for null, retorna um placeholder ou vazio.
  if (!hora) {
      // Opcional: Retorne um placeholder para que o layout não "salte"
      return <div className="text-xl font-bold font-mono text-white">--:--:--</div>; 
  }

  // Se 'hora' estiver definido (após a montagem no cliente), formate e exiba.
  const horaFormatada = hora.toLocaleTimeString('pt-BR');

  return (
    <div className="text-xl font-bold font-mono">
      {horaFormatada}
    </div>
  );
}

export default Relogio;