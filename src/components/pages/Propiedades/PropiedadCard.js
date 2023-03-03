import './PropiedadCard.css'
import { Link as LinkRouter } from 'react-router-dom'

export default function PropiedadCard(props) {
  const propiedad = props

  return (  
    <LinkRouter to={`/propiedades/${propiedad._id}`} key={propiedad.id} className="PropiedadCard">
      <img
      src={propiedad.imagen}
      alt={propiedad.id} className='PropiedadCard-imagen' />
      <div
      className='mx-4 mt-2'>
        <div className='flex items-center justify-between'>
          <div>
            <h3>{propiedad.localidad}</h3>
            <h3>{propiedad.direccion}</h3>
          </div>
          <div className='font-bold text-xl'>
            ${propiedad.precio}
          </div>
        </div>
        <div className='flex gap-4 mt-4'>
          <div>
            <p>Superficie</p>
            <p className='font-semibold'>{propiedad.superficie}</p>
          </div>
          <div>
            <p>Dormitorios</p>
            <p className='font-semibold'>{propiedad.dormitorios}</p>
          </div>
          <div>
            <p>Baños</p>
            <p className='font-semibold'>{propiedad.baños}</p>
          </div>
        </div>
      </div>
    </LinkRouter>
  )
}

