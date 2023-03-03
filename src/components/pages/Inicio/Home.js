import React from 'react'
import Servicios from '../Nosotros/Servicios'
import Team from '../Nosotros/Team'
import PropiedadesDestacadas from './PropiedadesDestacadas'
import Hero from './Hero'
import { useGetAllPropiedadesQuery } from '../../../features/propiedadesAPI'
import Contacto from '../Contacto/Contacto'
import Preguntas from '../Preguntas/Preguntas'
import { useParams } from 'react-router-dom'


export default function PropiedadCard() {
  const {
    data : propiedades,
    // error,
    // isLoading,
    // isSuccess,
    // isFailed,
  } = useGetAllPropiedadesQuery()
  
  return (
    <>
    <Hero data={propiedades} rango={1} slides={4} tiempo={5}/>
    <div className='flex flex-col xl:w-4/5 gap-6 mx-auto p-2 '>
      <PropiedadesDestacadas data={propiedades} rango={3} slides={3} tiempo={10}/>
      <Servicios/>
    </div>
    <div className='bg-blue-900 mt-20 mb-20 transform skew-y-3 h-[65vh]'>
      <div className='transform -skew-y-3 text-left text-white container mx-auto w-3/4 text-xl flex flex-col justify-center h-full'>
        <Preguntas />
      </div>
    </div>
    <Team />
    <Contacto />
    </>
  )
}
