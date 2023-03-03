import { Link as LinkRouter} from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Details(props) {
  const propiedad = props.data
  const rango = props.rango
  const slides = (props.slides * rango)
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(start + rango)
  const [intervalId, setIntervalId] = useState()
  const tiempo = props.tiempo * 1000

  const carousel = (product) => (
    <img src={product} alt="imagen"/>
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
    <div className="min-h-[60vh] p-6 container mx-auto">
      <div className='flex flex-wrap flex-col xl:w-4/5 gap-6 mx-auto'>
        <LinkRouter to='/propiedades' className='font-medium text-gray-500 hover:text-gray-600'>Volver a propiedades</LinkRouter>
        <p className='text-5xl font-bold text-blue-900'>{propiedad.direccion}</p>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 text-zinc-700'>
          <div className='flex justify-center items-center gap-6 lg:gap-2 relative'>
            <button onClick={atras} className='absolute z-50 left-6 bg-gray-400 hover:bg-gray-500 rounded-full flex md:p-2'>
              <box-icon name='chevron-left' color='white' />
            </button>
            {propiedad.imagen?.slice(start, end).map(carousel)}
            <button onClick={siguiente} className='absolute z-50 right-6 bg-gray-400 hover:bg-gray-500 rounded-full flex md:p-2'>
              <box-icon name='chevron-right' color='white'/>
            </button>
          </div>
          <div className='flex flex-col'>
            <div>              
              <div>
                <LinkRouter to='/editar' className='px-4 py-2 text-zinc-500 font-semibold mb-2 mr-2 text-sm rounded-md text-center inline-block border'>Editar</LinkRouter>
                <p className='px-4 py-2 text-zinc-500 font-semibold mb-2 text-sm rounded-md text-center inline-block border'>{propiedad.operacion}</p>
                <p className='text-3xl font-bold mb-4'>${propiedad.precio} USD</p>
              </div>
              <p className='text-3xl font-bold'>Información</p>
              <ul>
                <div className='flex gap-2'>
                  <li className='font-semibold'>Tipo:</li>
                  <p>{propiedad.tipo}</p>
                </div>
                <div className='flex gap-2'>
                  <li className='font-semibold'>Superficie:</li>
                  <p>{propiedad.superficie}</p>
                </div>
                <div className='flex gap-2'>
                  <li className='font-semibold'>Dormitorios:</li>
                  <p>{propiedad.dormitorios}</p>
                </div>
                <div className='flex gap-2'>
                  <li className='font-semibold'>Baños:</li>
                  <p>{propiedad.baños}</p>
                </div>
              </ul>
            </div>
            <div>
              <p className='text-3xl font-bold'>Descripción</p>
              <p>{propiedad.descripcion}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
