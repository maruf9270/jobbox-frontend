import { apiSlice } from "../api/apiSlice";

const employerApi = apiSlice.injectEndpoints({
    endpoints: (builder)=>({
        registerEmpoyee: builder.mutation({
            query:(data)=>({
                url:'/register/employer',
                method:'post',
                body:{
                    data:data
                }
            })
        })
    })
})

export const {useRegisterEmpoyeeMutation} = employerApi