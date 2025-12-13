'use client'


import Link from 'next/link'
import useSWR from 'swr'
import { Municipality } from '@/models/interfaces'
import MunicipalityCard from '@/componentes/MunicipalityPage/MunicipalityCard/MunicipalityCard'
import { useEffect, useState } from 'react'

export default function page() {

//
//A. Gestao de Estados
  const[municipalitiesList, setMunicipalitiesList] = useState<string[]>([])

//
//B. Fetch de Dados
  const fetcher = (url: string) => fetch(url).then(res=>res.json())
  const{data, error, isLoading} = useSWR<Municipality[], Error>('/api/municipalities', fetcher)
    
//
//C. Transformacao/Processamento de dados

//
//D. Funcoes auxiliares

//
//E. Handlers (interacao do utilizador)
function addRemoveMunicipality(municipio:string) {
        setMunicipalitiesList((prev) => 
            prev.includes(municipio)? prev.filter(m => m != municipio) : [...prev, municipio]
        )
    }


//
//F. Efeitos
  useEffect(()=>{
        console.log(municipalitiesList)
  }, [municipalitiesList])



  
  if(error) return <div>Error Loading</div>
  if(isLoading) return <div>Loading...</div>
  if(!data) return <div>No data</div>

    

  return <section>
    {data.map(m => (
        <MunicipalityCard
            key={m.id}
            id={m.id}
            name={m.name}
            district_name={m.district_name}
            addRemoveMunicipality = {()=> addRemoveMunicipality(m.name)}
        />
    ))}
        
  </section>
} 
