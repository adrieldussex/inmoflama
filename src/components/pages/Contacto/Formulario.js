import { useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function Formulario() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY').then((result) => {
      console.log(result.text)
    }, (error) => {
      console.log(error.text)
    })
  }

  return (
    <div>
        <div className="sm:text-center">
            <h2 className="text-4xl font-bold leading-8 text-blue-900">Contacto</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Comunicate con nosotros. Tenemos un staff capacitado para evacuar tus dudas y ayudarte en lo que necesites!
            </p>
            <form className='container grid grid-cols-1 md:grid-cols-2 mx-auto max-w-4xl py-4 gap-2' ref={form} onSubmit={sendEmail}>
                <input
                required='true'
                type="text"
                name="user_name"
                placeholder='Nombre'
                className='
                rounded-md
                border-t-4
                border-blue-300
                shadow-lg'
                />
                <input
                required='true'
                type="email"
                name="user_email"
                placeholder='Email'
                className='
                rounded-md
                border-t-4
                border-blue-300
                shadow-lg'
                />
                <textarea
                required='true'
                rows="10"
                name='message'
                placeholder='Mensaje'
                className='
                md:col-span-3
                rounded-md
                border-t-4
                border-blue-300
                shadow-lg'
                />
                <input
                value='Enviar'
                type='submit'
                className='
                hover:cursor-pointer
                font-semibold
                uppercase
                text-blue-600
                border-t-4
                py-3
                px-5
                rounded-md
                border-blue-600
                shadow-lg'/>
            </form>
        </div>
    </div>
  )
}
