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



    const url = 'https://official-joke-api.appspot.com/jokes/' + id;
    const{data, error, isLoading}=useSWR<Joke>(url, fetcher);




    if(error) return <p>Error loading jokes: {error.message}</p>
    if(isLoading) return <p>Loading jokes...</p>
    if(!data) return <p>No jokes found.</p>

  return (
    <article className='min-h-[70vh] p-5 rounded-2xl flex flex-col items-center justify-center bg-yellow-500'>
        <button 
            className='font-bold'
        >
            {data.setup}
        </button>
        <p>{data.punchline}</p>
    </article>
  )
}
