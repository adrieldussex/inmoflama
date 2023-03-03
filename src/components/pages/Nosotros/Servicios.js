import {
    BoltIcon,
    CurrencyDollarIcon,
    DevicePhoneMobileIcon,
    GlobeAltIcon,
    ChartBarIcon, 
    ClipboardDocumentListIcon,
    BuildingOfficeIcon}
    from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Alquiler',
    description: '',
    icon: BuildingOfficeIcon,
  },
  {
    name: 'Compra/Venta',
    description: '',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Administración',
    description: '',
    icon: ChartBarIcon,
  },
  {
    name: 'Tasaciones',
    description: '',
    icon: ClipboardDocumentListIcon,
  },
]


export default function Servicios() {
  return (
    <div className='mx-auto max-w-7xl'>
      <div className="sm:text-center">
        <h2 className="text-4xl font-bold leading-8 text-blue-900">Servicios</h2>
        {/* <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better way to send money</p> */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
        Ya sea que necesites alquilar un departamento, comprar tu primer hogar o  administrar alguna propiedad: ¡estás en el lugar indicado!
        </p>
      </div>

      <div className="mt-10 max-w-lg sm:mx-auto md:max-w-none flex md:justify-center">
        <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative flex md:flex-col items-center gap-6 sm:flex-row lg:flex-row">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-900 text-white sm:shrink-0">
                <feature.icon className="h-8 w-8" aria-hidden="true" />
              </div>
              <div className="sm:min-w-0 sm:flex-1">
                <p className="text-lg font-semibold leading-8 text-gray-900">{feature.name}</p>
                <p className="mt-2 text-base leading-7 text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
