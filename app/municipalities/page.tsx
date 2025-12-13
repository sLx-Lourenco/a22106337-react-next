'use client'


import Link from 'next/link'
import useSWR from 'swr'
import { Municipality } from '@/models/interfaces'

export default function page() {

  const fetcher = (url: string) => fetch(url).then(res=>res.json())
  const{data, error, isLoading} = useSWR<Municipality[], Error>('/api/municipalities', fetcher)


  if(error) return <div>Error Loading</div>
  if(isLoading) return <div>Loading...</div>
  if(!data) return <div>No data</div>


  return<>
        <div>
            <h2>Municipios</h2>
            <Link href="https://api.carrismetropolitana.pt/municipalities">
            <p>Endpoint:https://api.carrismetropolitana.pt/municipalities</p>
            </Link>
            <br /><br />
            

            { data.map( m => <p>{m.name}</p>) }
        </div> 
  </>
} 
