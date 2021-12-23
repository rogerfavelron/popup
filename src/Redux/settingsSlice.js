import { createSlice } from '@reduxjs/toolkit';

export const Slice = createSlice({
    name: "settings",
    initialState: {
            /*
            headline:"NEW STUFF",
            description:"Sign up for our newsletter and get 15% off your first order!",
            successMessage:"Success",
            */
            
            headline:"",
            description:"",
            successMessage:"",
    },
    reducers: {
        setHeadline:(state,action)=>{
            const payload = action.payload;
            state.headline = payload;
        },
        setDescription:(state,action)=>{
            const payload = action.payload;
            state.description = payload;
        },
        setSuccessMessage:(state,action)=>{
            const payload = action.payload;
            state.successMessage = payload;
        }
    }
})
export const selectSettings = (state) => state.settings;
export const { setHeadline,setDescription,setSuccessMessage } = Slice.actions;
export default Slice.reducer;