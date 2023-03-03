import './Footer.css'
import { BoxIconElement } from 'boxicons'
import {Link as LinkRouter} from 'react-router-dom'

const social = [
  {
    link: 'https://es-la.facebook.com/pages/category/Real-Estate-Company/Flam%C3%A1-Inmobiliaria-337922310274573/',
    icon: 'facebook'
  },
  {
    link: 'https://www.instagram.com/inmoflama/?hl=es',
    icon: 'instagram'
  },
  {
    link: 'https://wa.me/5493512914719?text=Hola!%20Me%20gustar%C3%ADa%20consultar%20por%20una%20propiedad%20que%20v%C3%AD%20en%20la%20web.',
    icon: 'whatsapp'
  },
]

const nav = [
  {
    name: 'Propiedades',
    href: '/propiedades',
  },
  {
    name: 'Nosotros',
    href: '/nosotros',
  },
  {
    name: 'Contacto',
    href: '/contacto',
  },
  {
    name: 'Preguntas frecuentes',
    href: '/preguntas',
  },
]

export default function Footer() {
  return (
    <div className='Footer-container text-gray-200'>
        <LinkRouter className='mb-2' to='/'>
            <img src="logo2.png" alt="logo-footer"></img>
        </LinkRouter>
        <div className='font-semibold text-base md:text-lg text-center'>
            <p>50 años de trayectoria avalan nuestro servicio.</p>
            <p>Mucho más que una inmobiliaria.</p>
        </div>

        <div className='Footer-social'>           
            {social.map((item) => (
              <a href={item.link} target='_blank' className='Footer-icons'>
                <box-icon color='white' name={item.icon} type='logo' />
              </a>
            ))}
          {/* <div>
            <p>Horarios de atención</p>
            <p>Lunes a viernes de 09 a 12hs</p>
            <p>Invierno: de 15 a 18hs - Verano: de 16 a 19hs</p>
            <p>Teléfono: +54 351 4456789</p>
            <p>Avenida Fuerza Aérea 2836, Cba</p>
          </div> */}
        </div>
        <div>
          <nav className='flex flex-col items-center gap-2 md:flex-row md:gap-4 flex-wrap justify-center'>
            {nav.map((link) => (
              <LinkRouter
                to={link.href}
                className='group inline-flex items-center text-base font-medium hover:text-yellow-400'>{link.name}
              </LinkRouter>
            ))}
          </nav>
        </div>
    </div>

  )
}
