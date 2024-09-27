import React from 'react'
import Sections from '../Components/Sections'
import QueEsMystery from '../Components/QueEsMystery'
import ReasonDash from '../Components/ReasonDash'
import ComoFunciona from '../Components/ComoFunciona'
import Contacto from '../Components/Contacto'
import Nav from '../Components/Nav'

export default function Home() {
    return (
        <div>
            <Sections />
            <QueEsMystery />
            <ReasonDash />
            <ComoFunciona />
            <Contacto backgrodColor='bg-gray-900' coloTitle='text-white' bgInput="" colorLabel='text-white' padTop='pt-10' />
        </div>
    )
}
