import React, { useState, useEffect } from 'react'
import './Hero.css'
import {Link as LinkRouter} from 'react-router-dom' 

export default function Hero(props) {
    const rango = props.rango
    const slides = (props.slides * rango)
    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(start + rango)
    const [intervalId, setIntervalId] = useState()
    const items = props.data
    const tiempo = props.tiempo * 1000

    const propiedad = (product) => (
        <LinkRouter to={`/propiedades/${product._id}`} key={product.id} className="h-[65vh] w-screen overflow-hidden relative object-cover">
            <img
            src={product.imagen}
            alt={product.id}
            className='absolute w-full h-full object-cover object-center'/>
            <div className='relative flex flex-col justify-center h-full bg-[#00000078] text-white text-left'>
                <div className='w-2/3 mx-auto gap-2 flex flex-col'>
                    <div className='text-5xl font-semibold'>
                        <p className='text-sky-500 font-bold'>{product.direccion}</p>
                        <p>{product.localidad}</p>
                    </div>
                    <p className='text-2xl'>{product.operacion} | ${product.precio}</p>
                </div>
            </div>
      </LinkRouter>
    )

    useEffect( () => {
        let id = setInterval(function () {
            siguiente()
        }, tiempo)
        setIntervalId(id)

        return () => clearInterval(id)
    }, [start])

    function atras() {
        if (start >= rango) {
            setStart( start - rango )
            setEnd( end - rango )
        } else {
            setStart( slides - rango )
            setEnd(slides)
        }
        clearInterval(intervalId)
    }

    function siguiente() {
        if (start < slides - rango) {
            setStart( start + rango )
            setEnd( end + rango )
        } else {
            setStart(0)
            setEnd(rango)
        }
        clearInterval(intervalId)
    }

    return (
    <div className='h-[65vh] flex justify-center items-center overflow-hidden mb-4'>
        <button onClick={atras} className='absolute z-50 left-6'>
            <box-icon name='chevron-left' color='white' />
        </button>
        { items?.slice(start, end).map(propiedad)}
        <button onClick={siguiente} className='absolute right-6'>
            <box-icon name='chevron-right' color='white'/>
        </button>
    </div>
    )
}

