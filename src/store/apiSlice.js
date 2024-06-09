import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
const token = Cookies.get("token");
const baseQuery = fetchBaseQuery({
  // credentials: "include",
  prepareHeaders: (headers) => {
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

// const baseQueryWithReAuth = async (args, api, extraOptions) => {
//   let result = await baseQuery(args, api, extraOptions);
//   if (result?.error?.status === 403 || result?.error?.status === 401) {
//     const res = await baseQuery(
//       "/api/accounts/refresh-token",
//       api,
//       extraOptions
//     );
//     if (res?.data?.isSuccessed) {
//       result = await baseQuery(args, api, extraOptions);
//     } else {
//       if (res.error.status === 403 || res.error.status === 401) {
//         res.error.data.message = "Your Session has expired !";
//       }
//       console.log(res);
//       return res;
//     }
//   }
//   return result;
// };
export const apiSlice = createApi({
  baseQuery: baseQuery,
  endpoints: () => ({}),
  tagTypes: ["favorites", "rates"],
});
