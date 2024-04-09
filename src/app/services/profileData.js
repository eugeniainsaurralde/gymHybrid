import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://gym-hybrid-e-commerce-default-rtdb.firebaseio.com/",
  }),
  tagTypes: ["Images"],
  endpoints: (builder) => ({
    putImage: builder.mutation({
      query: ({ image, localId }) => ({
        url: `profile/${localId}.json`,
        method: "PUT",
        body: { image },
      }),
      invalidatesTags: ["Images"],
    }),
    getImage: builder.query({
      query: (localId) => `/profile/${localId}.json`,
      providesTags: ["Images"],
    }),
  }),
});

export const { usePutImageMutation, useGetImageQuery } = profileApi;
