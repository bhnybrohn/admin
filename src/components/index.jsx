import React from 'react'
import Sidebar from './sidebar'
import Admin from './admin'

export default function Index(){

    return(
    <>
    <div className="flex-col w-full bg-gray-200 md:flex md:flex-row md:min-h-screen">

    <Sidebar/>

    <Admin/>
  
    </div>
    </>
    )
}