import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import {createUserWithEmailAndPassword, onAuthStateChanged, signInAnonymously, signInWithEmailAndPassword} from 'firebase/auth'
import auth from "../../firebase/firebase.config"


const initialState = {
    email:'',
    role:'',
    isLoading:false,
    isError:false,
    error: ''

}

// Thunk funcction for creating new user with email and password
export const createUser = createAsyncThunk('authentication/createUser',async({email,password})=>{
    const data = await createUserWithEmailAndPassword(auth,email,password)
    return data.user.email;
})

// Thunk middleware for login with email and password
export const loginWithEmail = createAsyncThunk('authentication/login',async({email,password})=>{
    const data = await signInWithEmailAndPassword(auth,email,password);
    return data.user.email;
})

const authenticationSlice = createSlice({
    name:'authentication',
    initialState,
    reducers:{
        manageUser: (state,action)=>{
            state.email = action.payload.email;
            state.isLoading = false;
        },
        manageLoading: (state)=>{
            state.isLoading = true
        },
        logOut: (state)=>{
            state.email = ""
        }

    },
    extraReducers: (builder)=>{
        builder.addCase(createUser.pending,(state)=>{
            state.isLoading = true;
            state.isError = false;
            state.error = ''

        })
        .addCase(createUser.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isError = false;
            state.error = '';
            state.email =  action.payload

        })
        .addCase(createUser.rejected,(state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message;
        })
        .addCase(loginWithEmail.pending,(state,action)=>{
            state.isLoading = true;
            state.isError = false;
            state.error = '';
        })
        .addCase(loginWithEmail.fulfilled,(state,action)=>{
            state.email = action.payload;
            state.isLoading = true;
            state.isError = false;
            state.error= ''

        })
        .addCase(loginWithEmail.rejected,(state,action)=>{
            state.isError = true;
            state.error = action.error.message;
            state.isLoading = false;
            state.email = false;
        })
        

    }
})

export default authenticationSlice.reducer;
export const {manageLoading,manageUser,logOut} = authenticationSlice.actions
