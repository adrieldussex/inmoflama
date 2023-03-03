import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const propiedadesAPI = createApi({
    reducerPath : "propiedadesAPI",

    baseQuery : fetchBaseQuery({
        baseUrl : "http://localhost:4000"
    }),

    endpoints : (builder) => ({
        getAllPropiedades: builder.query({
            query : () => "/propiedades"
        }),
        readPropiedad: builder.query({
            query: (id) => `/propiedades/${id}`,
            transformResponse: res => res.response
        }),
        createPropiedad: builder.mutation({
        query: (data) => ({
            url: "/propiedades/",
            method: "POST",
            body: data,
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
                }
            })
        }),
        editPropiedad: builder.mutation({
            query: ({ dataPropiedad, id }) => ({
                url: `/cities/${id}`,
                method: "PATCH",
                body: dataPropiedad,
            })
        }),
    })
})

export const {
    useGetAllPropiedadesQuery,
    useReadPropiedadQuery,
    useCreatePropiedadMutation,
    useEditPropiedadMutation,
    } = propiedadesAPI
    
export default propiedadesAPI