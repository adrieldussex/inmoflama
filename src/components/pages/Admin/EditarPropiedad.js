import { useState, useRef } from 'react'
import Input from '../../Input'
import { useGetAllPropiedadesQuery, useEditPropiedadMutation } from '../../../features/propiedadesAPI'

export default function EditarPropiedad() {
    const {data: propiedades} = useGetAllPropiedadesQuery()

    const [editPropiedad] = useEditPropiedadMutation()

    const [id, setId] = useState()

    const direccionRef = useRef()
    const localidadRef = useRef()
    const precioRef = useRef()
    const tipoRef = useRef()
    const operacionRef = useRef()
    const superficieRef = useRef()
    const dormitoriosRef = useRef()
    const bañosRef = useRef()
    const descripcionRef = useRef()
    const imagenRef = useRef()

    const form = [
        {
            label: 'Dirección',
            htmLFor: 'direccion',
            type: 'text',
            value: direccionRef,
        },
        {
            label: 'Localidad',
            htmLFor: 'localidad',
            type: 'text',
            value: localidadRef,
        },
        {
            label: 'Precio',
            htmLFor: 'precio',
            type: 'text',
            value: precioRef,
        },
        {
            label: 'Tipo',
            htmLFor: 'tipo',
            type: 'text',
            value: tipoRef,
        },
        {
            label: 'Operacion',
            htmLFor: 'operacion',
            type: 'text',
            value: operacionRef,
        },
        {
            label: 'Superficie',
            htmLFor: 'superficie',
            type: 'text',
            value: superficieRef,
        },
        {
            label: 'Dormitorios',
            htmLFor: 'dormitorios',
            type: 'text',
            value: dormitoriosRef,
        },
        {
            label: 'Baños',
            htmLFor: 'baños',
            type: 'text',
            value: bañosRef,
        },
        {
            label: 'Descripcion',
            htmLFor: 'descripcion',
            type: 'text',
            value: descripcionRef,
        },
        {
            label: 'Imagen',
            htmLFor: 'imagen',
            type: 'text',
            value: imagenRef,
        },
    ]

    function updatePropiedad(e) {
        e.preventDefault()

        const dataPropiedad = {
            direccion: direccionRef.current.value,
            localidad: localidadRef.current.value,
            precio: precioRef.current.value,
            tipo: tipoRef.current.value,
            operacion: operacionRef.current.value,
            superficie: superficieRef.current.value,
            dormitorios: dormitoriosRef.current.value,
            baños: bañosRef.current.value,
            descripcion: descripcionRef.current.value,
            imagen: imagenRef.current.value,
        };
        editPropiedad({dataPropiedad,id})
    }

    function getID(e){
        setId(e.target.value)
    }

  return (
    <div>
        <div>
            <form onSubmit={updatePropiedad}>
                <select onChange={getID}>
                    <option hidden>Elegir propiedad a editar</option>
                    {propiedades?.map((propiedad) => (
                        <option key={propiedad._id} value={propiedad._id}>{propiedad.propiedad}</option>
                    ))}
                </select>
                {form.map((input) => (
                    <Input
                    label={input.label}
                    htmlFor={input.htmlFor}
                    type={input.type}
                    key={input.label}
                    value={input.value}
                    />
                ))}
                <button type='submit'>Editar ciudad</button>
            </form>
        </div>
    </div>
  )
}

