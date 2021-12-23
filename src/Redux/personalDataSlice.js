import { createSlice } from '@reduxjs/toolkit';
import * as EmailValidator from 'email-validator';

export const Slice = createSlice({
    name: "settings",
    initialState: {
            name:"",
            email:{
                email:"",
                isEmailValid:""
            },
            font:"",
            isSuccessfullySubmitted:false
    },
    reducers: {
        setName:(state,action)=>{
            const payload = action.payload;
            state.name = payload;
        },
        setEmail:(state,action)=>{
            const payload = action.payload;
            const isValid = EmailValidator.validate(payload);
            const newEmailData = {
                email: payload,
                isEmailValid: isValid
            }
            state.email = newEmailData;
        },
        setFont:(state,action)=>{
            const payload = action.payload;
            state.font = payload;
        },
        setIsSuccessfullySubmitted:(state,action)=>{
            const payload = action.payload;//true or false
            state.isSuccessfullySubmitted = payload;
        }

    }
})
export const selectPersonalData = (state) => state.personalData;
export const { setName,setEmail,setFont,setIsSuccessfullySubmitted } = Slice.actions;
export default Slice.reducer;