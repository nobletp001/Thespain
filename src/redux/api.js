import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { formatError } from './errorHandler';


// Define a service using a base URL and expected endpoints
export const textApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://thespain.onrender.com/' }),
  endpoints: (builder) => ({
    sendText: builder.mutation({
      query({text, email}) {
        return {
          url: `text?email=${email}&text=${text}`,
          method: "POST"
        };

      },
      transformErrorResponse: (response, meta, arg) => ({
        message: formatError(response),
        error: formatError(response),
      }),
      
     
    }),
    register: builder.mutation({
      query(text) {
        return {
          url: `getstarted?email=${text}`,
          method: "POST"
        };

      },
      transformErrorResponse: (response, meta, arg) => ({
        message: formatError(response),
        error: formatError(response),
      }),
    }),

    getMessage: builder.query({
      query: (email) => `history/?email=${email}`,
      transformErrorResponse: (response, meta, arg) => ({
        message: formatError(response),
        error: formatError(response),
      }),
    }),  


  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useSendTextMutation , useRegisterMutation, useGetMessageQuery} = textApi