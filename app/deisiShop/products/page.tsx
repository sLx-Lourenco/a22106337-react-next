'use client'

import React from 'react'
import { useEffect, useState } from 'react'
import { Product } from '@/models/interfaces'
import ProductCard from '@/componentes/ProductCard/ProductCard'
import useSWR from 'swr'


export default function page() {
 //
//A. Gestao de Estados
  const[productsList, setProductList] = useState<string[]>([])

//
//B. Fetch de Dados
  const fetcher = (url: string) => fetch(url).then(res=>res.json())
  const{data, error, isLoading} = useSWR<Product[], Error>('/api/productsShop', fetcher)
    

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

  if(error) return <div>Error Loading</div>
  if(isLoading) return <div>Loading...</div>
  if(!data) return <div>No data</div>

    

  return <section className='h-full flex'>
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
    {data.map(p => (
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

} 
