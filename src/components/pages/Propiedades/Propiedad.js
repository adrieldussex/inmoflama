import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Details from './Details'
import axios from 'axios'
import api from '../../../api'

export default function Propiedad() {
    const {id} = useParams()
    const [name, setName] = useState([])
    
  useEffect(() => {
    axios.get(`${api}/propiedades/${id}`)
    .then(res => {setName(res.data.response)})
    .catch(err => console.log(err))
  },[])

  return (
    <Details data={name} rango={3} />
  )
}

