'use client'


import Link from 'next/link'
import useSWR from 'swr'
import { Municipality } from '@/models/interfaces'
import MunicipalityCard from '@/componentes/MunicipalityPage/MunicipalityCard/MunicipalityCard'
import { useEffect, useState } from 'react'
import { stringify } from 'querystring'
import { listenerCount } from 'process'
import { Spinner } from '@/componentes/ui/spinner'

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
  const transformMuni = data?.map(m=> ({
    ...m,
    displayName: `${m.name} (${m.district_name})`
  })) || [];

//
//D. Funcoes utilitarias
  function toggleItemList(list: string[], item: string): string[]{

    return list.includes(item)? list.filter(i => i != item) : [...list, item];
  }

//
//E. Handlers (interacao do utilizador)
function addRemoveMunicipality(municipio:string) {
        setMunicipalitiesList((prev) => toggleItemList(prev, municipio))
    }


//
//F. Efeitos
  useEffect(()=>{
    const localMunicipalitiesList = localStorage.getItem('municipalitiesList') || '[]';
    setMunicipalitiesList(JSON.parse(localMunicipalitiesList));
  }, [])

  useEffect(()=>{
        localStorage.setItem('municipalitiesList', JSON.stringify(municipalitiesList))
  }, [municipalitiesList])

//
//G. Renderizacao de Componentes

  if(error) return <div>Error Loading</div>
  if (isLoading) {
      return (
        <div className="flex justify-center items-center h-full">
          <Spinner className="size-6 text-yellow-600" />
        </div>
      )
    }
  if(!data) return <div>No data</div>

    

  return <section className='h-full flex'>
    
    <article className='overflow-auto w-1/3 bg-gray-200 p-2 m-2'>
      <p className='p-2'>Municipios Escolhidos:</p>
      {municipalitiesList.map(m =>
        <div key={m} className='p-2 bg-gray-400 text-black m-2'>{m}</div>
      )}
    </article>
    
    
    <article className='overflow-auto w-2/3'>
      {transformMuni.map(m => (
        <MunicipalityCard
            key={m.id}
            displayName= {m.displayName}
            addRemoveMunicipality = {()=> addRemoveMunicipality(m.name)}
            isSelected = {municipalitiesList.includes(m.name)}
        />
    ))}
    </article>
    
        
  </section>
} 
