import { apiSlice } from "../api/apiSlice";

const registerCandidate = apiSlice.injectEndpoints({
    endpoints: (builder)=>({
        rc: builder.mutation({
            query:(data)=>({
                url:'/register/candidate',
                body:{
                    data: data
                },
                method:'post'

            })
        })
    })
})

export const {useRcMutation} = registerCandidate