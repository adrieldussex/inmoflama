import Formulario from './Formulario'

export default function Contacto() {
return (
  <div className='md:w-3/5 p-2 mx-auto mt-6'>
    <div className="sm:text-center">
      <Formulario />
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 max-w-4xl gap-2 py-4'>
        <div>
          <div className='flex md:justify-center items-center gap-2'>
            <box-icon name='map' color='#1e3a8a'/>
            <p className='font-semibold text-xl text-blue-900'>Dirección</p>
          </div>
          <a href="https://goo.gl/maps/WiMrMbc797iqwes28" target='_blank' className="hover:underline hover:text-blue-700">Avenida Fuerza Aérea 2836, Córdoba</a>
        </div>
        <div>
          <div className='flex md:justify-center items-center gap-2'>
          <box-icon name='time-five' color='#1e3a8a'/>  
          <p className='font-semibold text-xl text-blue-900'>Horarios de atención</p>
          </div>
          <p>Lunes a viernes de 09 a 12hs</p>
          <p>Invierno: 15 a 18hs - Verano: 16 a 19hs</p>
        </div>
        <div>
          <div className='flex md:justify-center items-center gap-2'>
          <box-icon name='phone-call' color='#1e3a8a'/>  
          <p className='font-semibold text-xl text-blue-900'>Teléfono</p>
          </div>
          <a href="https://wa.me/5493512914719?text=Hola!%20Me%20gustar%C3%ADa%20consultar%20por%20una%20propiedad%20que%20v%C3%AD%20en%20la%20web." target='_blank' className="hover:underline hover:text-blue-700">+54 351 4456789</a>
        </div>
      </div>
      <h2 className="text-4xl mt-4 font-bold leading-8 text-blue-900">Seguinos en redes</h2>
      <div className='flex md:justify-center mt-4 gap-2 md:gap-4'>
        <a href='https://es-la.facebook.com/pages/category/Real-Estate-Company/Flam%C3%A1-Inmobiliaria-337922310274573/' target='_blank' className='Footer-icons'>
          <box-icon color='#1e3a8a' name='facebook' type='logo' />
        </a>
        <a href='https://www.instagram.com/inmoflama/?hl=es' target='_blank' className='Footer-icons'>
          <box-icon color='#1e3a8a' name='instagram' type='logo' />
        </a>
      </div>
    </div>
  </div>
)
}

