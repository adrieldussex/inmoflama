// import { Link as LinkRouter } from 'react-router-dom'

export default function Preguntas() {
    return (
      // <div className="bg-gray-50">
      //   <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
      //     <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      //       <span className="block">¿Tenés alguna duda?</span>
      //       <span className="block text-indigo-600">Escribínos</span>
      //     </h2>
      //     <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
      //       <div className="inline-flex rounded-md shadow">
      //         <LinkRouter
      //           to="/contacto"
      //           className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
      //         >
      //           Contacto
      //         </LinkRouter>
      //       </div>
      //       <div className="ml-3 inline-flex rounded-md shadow">
      //         <LinkRouter
      //           to="/preguntas"
      //           className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"
      //         >
      //           Preguntas frecuentes
      //         </LinkRouter>
      //       </div>
      //     </div>
      //   </div>
      // </div>
        <div className='container xl:w-3/5 flex flex-col justify-center min-h-[60vh] mx-auto px-6'>
          <p className='text-4xl font-semibold mb-6'>Preguntas frecuentes</p>
          <p>¿Cuáles son los requisitos para alquilar?</p>
          <p>¿Cuáles son los principales cambios que trajo la nueva ley de alquileres?</p>
          <p>¿Cuáles son los gastos de contrato que por Ley se deben abonar?</p>
          <p>¿Cuándo entró en vigencia la nueva ley de alquileres 2021?</p>
          <p>¿Dónde se puede calcular el índice de actualización de alquiler?</p>
          <p>¿Cómo hago para solicitar una tasación?</p>
        </div>
    )
  }
