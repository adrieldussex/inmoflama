import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {Link as LinkRouter} from 'react-router-dom'
import {
  HandRaisedIcon,
  HomeIcon,
  XMarkIcon,
  HomeModernIcon,
  HeartIcon,
  ChatBubbleBottomCenterTextIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const navegador = [
  {
    name: 'Inicio',
    description: '',
    href: '/',
    icon: HomeIcon,
  },
  {
    name: 'Propiedades',
    description: '',
    href: '/propiedades',
    icon: HomeModernIcon,
  },
  {
    name: 'Contacto',
    description: '',
    href: '/contacto',
    icon: ChatBubbleBottomCenterTextIcon,
  },
]
const ayuda = [
  {
    name: 'La empresa',
    description: '',
    href: '/nosotros',
    icon: HeartIcon,
  },
  {
    name: 'Preguntas frecuentes',
    description: '',
    href: '/preguntas',
    icon: HandRaisedIcon,
  },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="z-50 absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">

            <div className="px-5 pt-5 pb-6">

              {/* LOGO */}
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="logo.png"
                    alt="Your Company"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>

              {/* LINKS CON ICONOS */}
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {navegador.map((item) => (
                    <LinkRouter
                      key={item.name}
                      to={item.href}
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                    >
                      <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                      <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                    </LinkRouter>
                  ))}
                </nav>
              </div>
            </div>
            
            {/* LINKS SUELTOS */}
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                {ayuda.map((item) => (
                  <LinkRouter
                    key={item.name}
                    to={item.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {item.name}
                  </LinkRouter>
                ))}
              </div>
              
              {/* SIGN IN Y SIGN UP */}
              {/* <div>
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                >
                  Sign up
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{' '}
                  <a href="#" className="text-indigo-600 hover:text-indigo-500">
                    Sign in
                  </a>
                </p>
              </div> */}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
  )
}