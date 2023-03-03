import { createSlice } from "@reduxjs/toolkit";

export const propiedadesSlice = createSlice({
    name: 'propiedades',

    initialState: {
        propiedades : [],
    },

    reducers : {
        fetchFromServer : (state) => {
            state.propiedades = []
        }
    }
})

export const {fetchFromServer} = propiedadesSlice.actions

export default propiedadesSlice.reducer