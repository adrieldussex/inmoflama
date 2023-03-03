import { Link as LinkRouter} from 'react-router-dom'

import Servicios from "./Servicios";
import Team from "./Team";

export default function Nosotros() {
  return (
    <div className="flex flex-col mx-auto p-2 lg:w-3/5 gap-6 mt-6">
        <Team />
        <Servicios />
        <div className='py-6'>
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">¿Tenés alguna duda?</span>
            <span className="block text-blue-900">Escribínos</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <LinkRouter
                to="/contacto"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-900 px-5 py-3 text-base font-medium text-white hover:bg-blue-700"
              >
                Contacto
              </LinkRouter>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <LinkRouter
                to="/preguntas"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-blue-900 hover:bg-indigo-50"
              >
                Preguntas frecuentes
              </LinkRouter>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
