import React from 'react'
import Sections from '../Components/Sections'
import QueEsMystery from '../Components/QueEsMystery'
import ReasonDash from '../Components/ReasonDash'
import ComoFunciona from '../Components/ComoFunciona'
import Contacto from '../Components/Contacto'

export default function Home() {
    return (
        <div>
            <Sections />
            <QueEsMystery />
            <ReasonDash />
            <ComoFunciona />
            <Contacto backgrodColor='bg-gray-800' coloTitle='text-white' bgInput="" colorLabel='text-white' />
        </div>
    )
}
