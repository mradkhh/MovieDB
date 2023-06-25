import {BaseQueryFn, createApi, FetchArgs} from "@reduxjs/toolkit/query/react";
import {fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IMovie} from "components/Pages/FilmPage";

interface CustomError {
    status: number
}

const apiKey = process.env.API_KEY;


const API = `http://www.omdbapi.com`


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
            fetchGetMovieByID: builder.query<IMovie, { id: string }>({
                query: ({id}) => ({
                    url: `/?i=${id}&apikey=6721955c`,
                }),
                providesTags: () => ['Fetch'],
            }),
            fetchSearchByTitle: builder.mutation<{}, {}>({
                query: (params) => ({
                    url: `/?apikey=6721955c`,
                    params : {
                        ...params
                    }
                }),
                invalidatesTags: () => ['Fetch'],
            }),
            fetchSearchByType: builder.mutation<{}, {}>({
                query: (params) => ({
                    url: `/?type=${params?.type}&apikey=6721955c`,
                }),
                invalidatesTags: () => ['Fetch'],
            }),
        }
    }
})

export const {
    useFetchGetMoviesQuery,
    useFetchGetMovieByIDQuery,
    useFetchSearchByTitleMutation,
    useFetchSearchByTypeMutation
} = fetchApi










