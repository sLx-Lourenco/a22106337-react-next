'use client'
import React, { useEffect, useState } from 'react'
import { Joke } from '@/models/interfaces'
import useSWR from 'swr'
import { Key } from 'lucide-react'
import Link from 'next/link'

const fetcher = async (url: string) => {
    const res = await fetch(url)
    if(!res.ok){
        throw new Error(`Erro: ${res.status} ${res.statusText}`);
    }
    return res.json();
}


export default function JokesPage() {

    //Estados
    const [type, setType] = useState('')

    const [filteredJokes, setFilteredJokes] = useState<Joke[]>([])

    // Fetch de Dados
    const url = 'api/jokes';
    const{data, error, isLoading}=useSWR<Joke[]>(url, fetcher);
    //Efects

    useEffect(() => {
        if(!data) return;
        setFilteredJokes(data.filter(data => data.type === type))
    }, [type])

    

    if(error) return <p>Error loading jokes: {error.message}</p>
    if(isLoading) return <p>Loading jokes...</p>
    if(!data) return <p>No jokes found.</p>

return (<>

    <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className='text-2xl font-bold bg-blue-400 rounded-2xl p-2 m-2'
    >
        <option value="">Jokes Selector</option>
        <option value="programming">Programming Jokes</option>
        <option value="general">General Jokes</option>
        <option value="dad">Dad Jokes</option>
    </select>

    {/* <button
        className='p-2 m-2 bg-blue-400 hover:bg-blue-600 active:bg-blue-700 rounded-2xl'
        onClick={() => setType('programming')}
    >Programing Jokes</button>

    <button
        className='p-2 m-2 bg-blue-400 hover:bg-blue-600 active:bg-blue-700 rounded-2xl'
        onClick={() => setType('general')}
    >General Jokes</button> */}

    {filteredJokes.map(joke => (
        <Link
            href={`jokes/${joke.id}`}
        >
            <div className='py-2 px-4 m-2 bg-yellow-500 rounded-2xl'>
                <h2>{joke.setup}</h2>
                {/* <p>{joke.punchline}</p> */}
            </div>
        </Link>
        
        
    ))}
  </>
)

}
