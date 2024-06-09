import { apiSlice } from "./apiSlice";
const baseUrl = "https://api.themoviedb.org/3/";
export const movieApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    pages: builder.query({
      query: (page) => {
        return {
          url: `${baseUrl}/discover/movie?page=${page}&api_key=1462ca39f0670599390d22b7dcefa9e8`,
        };
      },
    }),
    listGenres: builder.query({
      query: () => {
        return {
          url: `${baseUrl}genre/movie/list?language=en&api_key=1462ca39f0670599390d22b7dcefa9e8`,
        };
      },
    }),
    trending: builder.query({
      query: ({ type }) => {
        return {
          url: `${baseUrl}trending/all/${type}?language=en-US&api_key=1462ca39f0670599390d22b7dcefa9e8`,
        };
      },
    }),
    popular: builder.query({
      query: () => {
        return {
          url: `${baseUrl}movie/popular?language=en-US&page=1&api_key=1462ca39f0670599390d22b7dcefa9e8`,
        };
      },
    }),
    topRated: builder.query({
      query: () => {
        return {
          url: `${baseUrl}/movie/top_rated?language=en-US&page=1&api_key=1462ca39f0670599390d22b7dcefa9e8`,
        };
      },
    }),
    relatedMovies: builder.query({
      query: ({ id }) => {
        return {
          url: `${baseUrl}movie/${id}/recommendations?language=en-US&page=1&api_key=1462ca39f0670599390d22b7dcefa9e8`,
        };
      },
    }),
    search: builder.query({
      query: ({ search, page }) => {
        if (!page) page = 1;
        if (search)
          return {
            url: `${baseUrl}search/movie?query=${search}&include_adult=false&language=en-US&page=${page}&api_key=1462ca39f0670599390d22b7dcefa9e8`,
          };
        return {
          url: `${baseUrl}/discover/movie?page=${page}&api_key=1462ca39f0670599390d22b7dcefa9e8`,
        };
      },
    }),
    video: builder.query({
      query: ({ movieId }) => {
        return {
          url: `${baseUrl}movie/${movieId}/videos?language=en-US&api_key=1462ca39f0670599390d22b7dcefa9e8`,
        };
      },
    }),
    searchWith: builder.query({
      query: ({ GenreId, page }) => {
        return {
          url: `${baseUrl}discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${GenreId}&api_key=1462ca39f0670599390d22b7dcefa9e8`,
        };
      },
    }),
    movie: builder.query({
      query: ({ movieId }) => {
        return {
          url: `${baseUrl}movie/${movieId}?language=en-US&api_key=1462ca39f0670599390d22b7dcefa9e8`,
        };
      },
    }),
    addFavorite: builder.mutation({
      query: ({ userId, movieId }) => {
        return {
          url: `http://an4m.runasp.net/api/Movies/addFavorite?UserId=${userId}&MovieId=${movieId}`,
          method: "GET",
        };
      },
      invalidatesTags: ["favorites"],
    }),
    getFavourite: builder.query({
      query: ({ userId }) => {
        return {
          url: `http://an4m.runasp.net/api/Movies/gatFavorite?userId=${userId}`,
        };
      },
      providesTags: ["favorites"],
    }),
    addRate: builder.mutation({
      query: (rate) => {
        return {
          url: `http://an4m.runasp.net/api/Movies/addRate`,
          body: rate,
          method: "POST",
        };
      },
      invalidatesTags: ["rates"],
    }),
    getRate: builder.query({
      query: ({ userId, movieId }) => {
        return {
          url: `http://an4m.runasp.net/api/Movies/gatRate?UserId=${userId}&MovieId=${movieId}`,
        };
      },
      providesTags: ["rates"],
    }),
    getUserInfo: builder.query({
      query: ({ userId }) => {
        return {
          url: `http://an4m.runasp.net/api/Movies/getUserInfo?userId=${userId}`,
        };
      },
      providesTags: ["rates"],
    }),
  }),
});
export const {
  usePagesQuery,
  useListGenresQuery,
  useTrendingQuery,
  useTopRatedQuery,
  usePopularQuery,
  useVideoQuery,
  useRelatedMoviesQuery,
  useSearchWithQuery,
  useSearchQuery,
  useMovieQuery,
  useGetFavouriteQuery,
  useGetRateQuery,
  useAddRateMutation,
  useAddFavoriteMutation,
  useGetUserInfoQuery,
} = movieApiSlice;
