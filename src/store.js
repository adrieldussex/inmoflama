import { configureStore } from '@reduxjs/toolkit'
import propiedadesReducer from './features/propiedadesSlice'
import propiedadesAPI from './features/propiedadesAPI'


export default configureStore({
    reducer: {
        propiedades: propiedadesReducer,
        [propiedadesAPI.reducerPath] : propiedadesAPI.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        inmutableCheck: false,
        serializableCheck: false,
    })
})