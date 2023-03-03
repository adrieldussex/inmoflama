import {useRef} from 'react'
import { useCreatePropiedadMutation } from '../../../features/propiedadesAPI'
import Input from '../../Input'
import { Link as LinkRouter } from 'react-router-dom'

export default function NuevaPropiedad() {
    const inputArray = [
        {
            name: 'direccion',
            type: 'text',
            placeholder: 'Escribir dirección',
            value: '',
        },
        {
            name: 'localidad',
            type: 'text',
            placeholder: 'Escribir localidad',
            value: '',
        },
        {
            name: 'tipo',
            type: 'text',
            placeholder: 'Escribir tipo de propiedad',
            value: '',
        },
        {
            name: 'precio',
            type: 'number',
            placeholder: 'Escribir precio',
            value: '',
        },
        {
            name: 'superficie',
            type: 'text',
            placeholder: 'Escribir superficie',
            value: '',
        },
        {
            name: 'dormitorios',
            type: 'number',
            placeholder: 'Escribir dormitorios',
            value: '',
        },
        {
            name: 'baños',
            type: 'number',
            placeholder: 'Escribir baños',
            value: '',
        },
        {
            name: 'operacion',
            type: 'text',
            placeholder: 'Escribir tipo de operación',
            value: '',
        },
        {
            name: 'descripcion',
            type: 'text',
            placeholder: 'Escribir una descripción',
            value: '',
        },
        {
            name: 'imagen',
            type: 'text',
            placeholder: 'Link de imagen',
            value: '',
        },
    ]

    let [createPropiedad] = useCreatePropiedadMutation()
    const crearPropiedad = (arrayform) => {
        let inputsForm = arrayform.filter(element => element.value)
        let data = inputsForm.reduce((values,input) => {
            values[input.name.toLowerCase()] = input.value
            return values
        }, {})
        createPropiedad(data)
    }

  return (
    <div className='min-h-[65vh] container mx-auto w-1/4 pt-4'>
        <LinkRouter to='/propiedades'>Propiedades</LinkRouter>
        <Input inputsData={inputArray} event={(arrayform)=>crearPropiedad(arrayform)}/>
    </div>
  )
}