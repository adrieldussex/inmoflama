import PropiedadCard from './PropiedadCard'
import { Link as LinkRouter} from 'react-router-dom'
import { useGetAllPropiedadesQuery } from '../../../features/propiedadesAPI'
  

  export default function Propiedades() {
    const {
      data : propiedad,
      // error,
      // isLoading,
      // isSuccess,
      // isFailed,
    } = useGetAllPropiedadesQuery()

    return (
      <div className="bg-white mb-4">
        <div className="container xl:w-3/5 flex flex-col gap-6 mx-auto px-6">
          <div className='flex items-center gap-4'>
            <h2 className="mt-8 text-4xl font-bold tracking-tight text-blue-900">Propiedades disponibles</h2>
            <LinkRouter to='/admin/agregar' className='mt-10  bg-blue-500 rounded-full flex items-center justify-center p-2'>
              <box-icon color='white' name='plus'/>
            </LinkRouter>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {propiedad?.map(PropiedadCard)}
          </div>
        </div>
      </div>
    )
  }
