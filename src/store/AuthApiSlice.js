import { apiSlice } from "./apiSlice";
export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ email, password }) => {
        return {
          url: `http://an4m.runasp.net/api/Accounts/login`,
          body: { email, password },
          method: "POST",
        };
      },
    }),
    register: builder.mutation({
      query: ({ userName, email, password }) => {
        return {
          url: `http://an4m.runasp.net/api/Accounts/register`,
          body: { userName, email, password },
          method: "POST",
        };
      },
    }),
  }),
});
export const { useLoginMutation, useRegisterMutation } = authApiSlice;
