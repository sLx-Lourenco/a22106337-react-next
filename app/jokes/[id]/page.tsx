'use client'

import { useParams } from 'next/navigation';
import React from 'react'
import { Joke } from '@/models/interfaces'
import useSWR from 'swr';


const fetcher = async (url: string) => {
    const res = await fetch(url)
    if(!res.ok){
        throw new Error(`Erro: ${res.status} ${res.statusText}`);
    }
    return res.json();
}


export default function JokePage() {

    const params = useParams()
    const id = params.id;
    const[visivel, setVisivel]=React.useState(false);


    const url = `/api/jokes/${id}`
    const{data, error, isLoading}=useSWR<Joke>(url, fetcher);




    if(error) return <p>Error loading jokes: {error.message}</p>
    if(isLoading) return <p>Loading jokes...</p>
    if(!data) return <p>No jokes found.</p>

  return (
    <article className='min-h-[70vh] p-5 rounded-2xl flex flex-col items-center justify-center bg-yellow-500'>
        <h2>{data.setup}</h2>
        
        { !visivel ? 
        (<button 
            className='font-bold bg-gray-800 text-white p-2 m-4 rounded-2xl hover:bg-gray-600 active:bg-gray-700'
            onClick={()=>setVisivel(true)}
        >
            Mostrar
        </button>):  (<p>{data.punchline}</p>)}
    </article>
  )
}
