"use client";

import { useEffect, useState } from "react";

export default function Contador() {
  const [count, setCount] = useState(0);
    const [history, setHistory] = useState<number[]>([]);

  // Carregar do localStorage ao iniciar
  useEffect(() => {
    const storedCount = localStorage.getItem("contador");
    const storedHistory = localStorage.getItem("contadorHistorico");

    if (storedCount !== null) {
      setCount(Number(storedCount));
    }

    if (storedHistory !== null) {
      setHistory(JSON.parse(storedHistory));
    }
  }, []);

  // Guardar no localStorage sempre que mudar
  useEffect(() => {
    localStorage.setItem("contador", count.toString());
    localStorage.setItem("contadorHistorico", JSON.stringify(history));
  }, [count, history]);


  function increment() {
  if (count < 10) {
    const newValue = count + 1;
    setCount(newValue);
    setHistory((previousHistory) => [...previousHistory, newValue]);
  }
}

  function decrement() {
  if (count > 0) {
    const newValue = count - 1;
    setCount(newValue);
    setHistory((previousHistory) => [...previousHistory, newValue]);
  }
}

  function reset() {
    setCount(0);
    setHistory([0]);
  }

  function getColor() {
    if (count >= 0 && count <= 3) return "text-red-500";
    if (count >= 4 && count <= 7) return "text-yellow-500";
    if (count >= 8 && count <= 10) return "text-green-500";
  }

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-2xl shadow space-y-6 text-center">
      <h1 className="text-2xl font-bold text-black">Contador</h1>

      <div className={`text-5xl font-bold ${getColor()}`}>{count}</div>

      <div className="flex justify-center gap-4">
        <button
          onClick={decrement}
          className="px-4 py-2 rounded-xl bg-red-400 hover:bg-gray-300"
        >-</button>

        <button
          onClick={reset}
          className="px-4 py-2 rounded-xl bg-gray-400 hover:bg-gray-300"
        >Reset</button>
        
        <button
          onClick={increment}
          className="px-4 py-2 rounded-xl bg-blue-400 hover:bg-gray-300"
        >+</button>
      </div>

      <div className="text-left">
        <h2 className="text-lg font-semibold mb-2">Histórico:</h2>
            <ul className="list-disc list-inside space-y-1">
                {history.map((value, index) => (
                <li key={index}>{value}</li>
                ))}
            </ul>
        </div>
    </div>
    );
}