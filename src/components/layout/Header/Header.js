import NavMobile from './NavMobile'

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {Link, Link as LinkRouter} from 'react-router-dom'
import {
  Bars3Icon,
  HandRaisedIcon,
  ChatBubbleBottomCenterTextIcon,
  BuildingOfficeIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

// const callsToAction = [
//   { name: 'Watch Demo', href: '#', icon: PlayIcon },
//   { name: 'Contact Sales', href: '#', icon: PhoneIcon },
// ]

const nosotros = [
  {
    name: 'La empresa',
    description: 'Más de 50 años de trayectoria avalan nuestro servicio. Mucho más que una inmobiliaria.',
    href: '/nosotros',
    icon: BuildingOfficeIcon,
  },
  {
    name: 'Contacto',
    description: 'Charlá con nosotros y enterate de las últimas novedades en nuestras redes sociales.',
    href: '/contacto',
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    name: 'Preguntas Frecuentes',
    description: 'Consultá tus principales dudas.',
    href: '/preguntas',
    icon: HandRaisedIcon,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
    <Popover className="relative shadow-md bg-white">
        {/* NAV DESKTOP */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-4 md:space-x-10">

          {/* LOGO NAV */}
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <LinkRouter to='/'>
              <span className="sr-only">Inmobiliaria Flamá</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="logo.png"
                alt="logo-flama"
              />
            </LinkRouter>
          </div>

          {/* MENU HAMBURGUESA */}
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          <Popover.Group as="nav" className="hidden space-x-10 md:flex">

            <LinkRouter
            to='/'
            className='text-gray-500 group inline-flex items-center bg-white text-base font-medium hover:text-blue-900'>Inicio</LinkRouter>

            <LinkRouter
            to='/propiedades'
            className='text-gray-500 group inline-flex items-center bg-white text-base font-medium hover:text-blue-900'>Propiedades</LinkRouter>

            {/* Nosotros */}
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-blue-900' : 'text-gray-500',
                      'text-gray-500 group inline-flex items-center bg-white text-base font-medium hover:text-blue-900'
                    )}
                  >
                    <span>Nosotros</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {nosotros.map((item) => (
                            <LinkRouter
                              key={item.name}
                              to={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                            >
                              <item.icon className="h-6 w-6 flex-shrink-0 text-blue-900" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-blue-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </LinkRouter>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

          </Popover.Group>

          {/* SIGN IN Y SIGN UP */}
          {/* <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
              Sign in
            </a>
            <a
              href="#"
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-blue-900 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-700"
            >
              Iniciar sesión
            </a>
          </div> */}
        </div>
        </div>
        <NavMobile/>    
    </Popover>
  )
}
