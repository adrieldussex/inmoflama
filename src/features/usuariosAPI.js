import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import apiurl from '../api'

const usuarioAPI = createApi({
    reducerPath: "usuarioAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: apiurl,
    }),
    endpoints: (builder) => ({
        signUp: builder.mutation({
            query: (data) => ({
                url: `/admin/signup`,
                method: "POST",
                body: data,
            }),
        }),
        signIn: builder.mutation({
            query: (data) => ({
                url: `/admin/signin`,
                method: "POST",
                body: data,
            }),
        }),
        signOut: builder.mutation({
            query: (data) => ({
                url: `/admin/signout`,
                method: "POST",
                body: data,
            }),
        }),
    })
})

export default usuarioAPI;

export const {
    useSignInMutation,
    useSignUpMutation,
    useSignOutMutation,
} = usuarioAPI