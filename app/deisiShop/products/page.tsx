'use client'

import React from 'react'
import { useEffect, useState } from 'react'
import { Product } from '@/models/interfaces'
import ProductCard from '@/componentes/ProductCard/ProductCard'
import useSWR from 'swr'
import { Loader2 } from "lucide-react"
import { useMemo } from 'react'

export default function page() {
 //
//A. Gestao de Estados
  const[productsList, setProductList] = useState<string[]>([])

  const[search, setSearch]= useState<string>('')
  


//
//B. Fetch de Dados
  const fetcher = (url: string) => fetch(url).then(res=>res.json())
  const{data, error, isLoading} = useSWR<Product[], Error>('/api/productsShop', fetcher)
    

  const filteredData = useMemo(() => {
  if (!data) return []

  return data.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  )
}, [search, data])

//
//D. Funcoes utilitarias
  function toggleItemList(list: string[], item: string): string[]{
    return list.includes(item)? list.filter(i => i != item) : [...list, item];
  }

//
//E. Handlers (interacao do utilizador)
function addRemoveProduct(product:string) {
        setProductList((prev) => toggleItemList(prev, product))
    }


//
//F. Efeitos
  useEffect(()=>{
    const localProductsList = localStorage.getItem('productsList') || '[]';
    setProductList(JSON.parse(localProductsList));
  }, [])

  useEffect(()=>{
        localStorage.setItem('productsList', JSON.stringify(productsList))
  }, [productsList])

  
//
//G. Renderizacao de Componentes

  if (error) {
    return (
      <div className="flex justify-center items-center h-full text-red-500">
        Erro ao carregar os dados.
      </div>
    )
  }
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full">
        <Loader2 className="h-8 w-8 animate-spin text-gray-600" />
      </div>
    )
  }
  if(!data) return <div>No data</div>

    

  return <section>
  <input
        type="text"
        placeholder="Procurar..."
        className="border border-black rounded px-3 py-2 "
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
      />
  
  <section className='h-full flex'>

  <article className='overflow-auto w-1/3 bg-gray-200 p-2 m-2'>
    <p className='p-2 font-semibold'>Produtos Escolhidos:</p>
    {productsList.map(p => (
      <div key={p} className='p-2 bg-gray-400 text-black m-2 rounded'>
        {p}
      </div>
    ))}
  </article>

  {/* Grid de produtos */}
  <article className='overflow-auto w-2/3 p-2 grid grid-cols-2 gap-2'>
    {filteredData.map(p => (
      <ProductCard
        key={p.id}
        title={p.title}
        image={p.image}
        addRemoveProduct={() => addRemoveProduct(p.title)}
        isSelected={productsList.includes(p.title)}
      />
    ))}
  </article>
</section>

  </section>
  
  

} 
