import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://identitytoolkit.googleapis.com/v1/",
  }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (user) => ({
        url: "accounts:signInWithCustomToken?key=AIzaSyCd6kaJCrdPmzGrF5Mn5eVYPpfPLjtbMPM",
        method: "POST",
        body: user,
      }),
    }),
  }),
});

export const { useRegisterMutation } = authApi;
