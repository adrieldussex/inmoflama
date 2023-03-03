import React from 'react'
import './Hero.css'
import { Link as LinkRouter } from 'react-router-dom'

export default function Hero() {
  return (
    <div className='Hero-container'>
      <div className='h-full bg-slate-900 bg-opacity-80'>
        <div className='flex flex-col gap-6 justify-center items-center h-full text-white text-center'>
          <h2 className='text-5xl font-bold'>Mucho más que una inmobiliaria</h2>
          <div className='flex gap-4'>
            <LinkRouter to='/propiedades' className='Hero-button'>Ver propiedades</LinkRouter>
            <LinkRouter to='/contacto' className='Hero-button'>Quiero vender</LinkRouter>
          </div>
        </div>
      </div>
    </div>
  )
}
