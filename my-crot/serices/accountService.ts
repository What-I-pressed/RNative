import { createApi } from '@reduxjs/toolkit/query/react'
import { createBaseQuery } from '@/utils/createBaseQuery'
import {ILogin, ILoginResponse, IRegister} from '@/interfaces/account'
import { serialize } from 'object-to-formdata';

export const accountApi = createApi({
    reducerPath: 'accountApi',
    baseQuery: createBaseQuery('account'),
    tagTypes: ['Account'],

    endpoints: (builder) => ({
        login: builder.mutation<ILoginResponse, ILogin>({
            query: (data : ILogin) => {
                return {
                    url: 'login',
                    method: 'POST',
                    body: data
                }
            },
        }),

        register: builder.mutation<ILoginResponse, IRegister>({
            query: (data : IRegister) => {
                const formData = serialize(data);
                return {
                    url: 'register',
                    method: 'POST',
                    body: formData
                }
            },
        }),

    })
})

export const { useLoginMutation, useRegisterMutation } = accountApi;