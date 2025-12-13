import { Municipality } from '@/models/interfaces'
import React from 'react'

export interface MunicipalityProps{
    id: string;
    name: string;
    district_name: string;
    addRemoveMunicipality: ()=> void;
}

export default function MunicipalityCard({id, name, district_name, addRemoveMunicipality}: MunicipalityProps){

    return <article className='m-2 p-2 bg-yellow-300 hover:bg-yellow-400 flex justify-between'>
            <p>{name} ({district_name})</p>
            <button
                className="px-2 bg-amber-500"
                onClick={addRemoveMunicipality}>
            +</button>

    </article>
}