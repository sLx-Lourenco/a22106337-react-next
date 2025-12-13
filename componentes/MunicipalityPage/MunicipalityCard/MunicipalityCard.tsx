import { Municipality } from '@/models/interfaces'
import React from 'react'

export interface MunicipalityProps{
    displayName: string;
    addRemoveMunicipality: ()=> void;
    isSelected: boolean;
}

export default function MunicipalityCard({displayName, addRemoveMunicipality, isSelected}: MunicipalityProps){

    

    return <article className={`m-2 p-2 ${isSelected ? 'bg-amber-600':  'bg-yellow-300' } hover:bg-yellow-400 flex justify-between`}>
            <p>{displayName}</p>
            <button
                className="px-2 bg-amber-600 hover:bg-amber-500"
                onClick={addRemoveMunicipality}>
            <p className='text-black'>{isSelected ? '-' : '+'}</p>
            </button>

    </article>
}