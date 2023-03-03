import React, { useState, useEffect } from 'react'
import {Link as LinkRouter} from 'react-router-dom' 

export default function PropiedadesDestacadas(props) {
    const rango = props.rango
    const slides = (props.slides * rango)
    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(start + rango)
    const [intervalId, setIntervalId] = useState()
    const items = props.data
    const tiempo = props.tiempo * 1000

    const propiedad = (product) => (
        <LinkRouter to={`/propiedades/${product._id}`} key={product.id} className="PropiedadCard">
            <img
            src={product.imagen}
            alt={product.id} className='PropiedadCard-imagen' />
            <div
            className='mx-4 mt-2'>
            <div className='flex items-center justify-between'>
                <div>
                <h3>{product.localidad}</h3>
                <h3>{product.direccion}</h3>
                </div>
                <div className='font-bold text-xl'>
                ${product.precio}
                </div>
            </div>
            <div className='flex gap-4 mt-4'>
                <div>
                <p>Superficie</p>
                <p className='font-semibold'>{product.superficie}</p>
                </div>
                <div>
                <p>Dormitorios</p>
                <p className='font-semibold'>{product.dormitorios}</p>
                </div>
                <div>
                <p>Baños</p>
                <p className='font-semibold'>{product.baños}</p>
                </div>
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
    <div className='container flex flex-col justify-center mx-auto'>
        <h2 className='text-center text-4xl font-bold leading-8 text-blue-900 mb-6'>Propiedades destacadas</h2>
        <div className='flex justify-center items-center gap-6 lg:gap-2'>
            <button onClick={atras} className='hidden md:flex lg:p-3 bg-blue-500 hover:bg-blue-600 transition duration-100 p-3 rounded-full'>
                <box-icon name='chevron-left' color='white' />
            </button>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                { items?.slice(start, end).map(propiedad)}
            </div>
            <button onClick={siguiente} className='hidden md:flex lg:p-3 bg-blue-500 hover:bg-blue-600 transition duration-100 p-3 rounded-full'>
                <box-icon name='chevron-right' color='white'/>
            </button>
        </div>
        <LinkRouter to='/propiedades' className='mt-6 text-center text-white font-semibold bg-blue-500 hover:bg-blue-600 p-4 rounded-lg w-64 mx-auto'>Ver todas las propiedades</LinkRouter>
    </div>
    )
}
