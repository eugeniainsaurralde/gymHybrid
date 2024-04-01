import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://gym-hybrid-e-commerce-default-rtdb.firebaseio.com/",
  }),
  endpoints: (builder) => ({
    putProfile: builder.mutation({
      query: ({ image, localId }) => ({
        url: `profile/${localId}.json`,
        method: "PUT",
        body: image,
      }),
    }),
  }),
});

export const { usePutProfileMutation } = profileApi;
