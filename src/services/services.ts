import {BaseQueryFn, createApi, FetchArgs} from "@reduxjs/toolkit/query/react";
import {fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IMovie} from "components/Pages/FilmPage";

interface CustomError {
    status: number
}


const API = `https://www.omdbapi.com`


export const fetchApi = createApi({
    reducerPath: 'fetchApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API}) as BaseQueryFn<string | FetchArgs, unknown, CustomError>,
    tagTypes: ['Fetch'],
    endpoints(builder)  {
        return {
            // =--------- USER FETCH -------------------=
            fetchGetMovies: builder.query<[], {}>({
                query: (params) => ({
                    url: '',
                    params : {
                        ...params
                    }
                }),
                providesTags: () => ['Fetch'],
            }),
            fetchGetMovieByID: builder.query<IMovie, string | undefined>({
                query: (id) => ({
                    url: `/?i=${id}&apikey=6721955c`,
                }),
                providesTags: () => ['Fetch'],
            }),
            fetchSearchByTitle: builder.mutation<any, {}>({
                query: (params) => ({
                    url: `/?apikey=6721955c`,
                    params : {
                        ...params
                    }
                }),
                invalidatesTags: () => ['Fetch'],
            })
        }
    }
})

export const {
    useFetchGetMoviesQuery,
    useFetchGetMovieByIDQuery,
    useFetchSearchByTitleMutation,
} = fetchApi










