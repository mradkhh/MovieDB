import React, {FC, memo, useEffect} from 'react';
import dynamic from 'next/dynamic';
import Breadcrumbs from "components/UI/Breadcrumbs/Breadcrumbs";
import FilmDetailsCard from "components/UI/Cards/FilmDetailsCard/FilmDetailsCard";
import Container from "components/Container/Container";
import {useFetchGetMovieByIDQuery, useFetchSearchByTitleMutation} from "services/services";
import {useRouter} from "next/router";
import {Spinner} from "components/UI/Spiner/Spiner";
import cl from './FilmPage.module.scss';


// =------------------ DYNAMIC IMPORTS ------------------------------=
const FilmsCarouselLayout = dynamic(() => import("layouts/FilmsCarouselLayout"))

interface FilmPageProps {

}

const breadcrumb = [
    { path: '/', text: 'Bosh sahifa' },
    { path: '/films', text: 'Kinolar' },
]


export interface IMovie {
    Actors: string;
    Awards: string;
    BoxOffice: string;
    Country: string;
    DVD: string;
    Director: string;
    Genre: string;
    Language: string;
    Metascore: string;
    Plot: string;
    Poster: string;
    Production: string;
    Rated: string;
    Ratings: Rating[];
    Released: string;
    Response: string;
    Runtime: string;
    Title: string;
    Type: string;
    Website: string;
    Writer: string;
    Year: string;
    imdbID: string;
    imdbRating: string;
    imdbVotes: string;
}

interface Rating {
    Source: string;
    Value: string;
}


const FilmPage: FC<FilmPageProps> = memo(({  }) => {


    const { query } = useRouter()

    const { data: movie } = useFetchGetMovieByIDQuery(`${query.id}`)
    const [ fetchSearch, { data: similar_movies, isLoading } ] = useFetchSearchByTitleMutation()

    useEffect(() => {
        fetchSearch({s: 'mission'})
    }, [])

    return (
        <>
            <Breadcrumbs array={breadcrumb} current='Film name'/>
            <Container id='film-details_card'>
                {
                    (movie)
                        ? <FilmDetailsCard
                            movieInfo={movie}
                        />
                        : (isLoading)
                            ? <Spinner/>
                        : null
                }
            </Container>
            <FilmsCarouselLayout
                title="O'xshash"
                href="/favorites"
                data={similar_movies?.Search}
                type="slider"
                autoplay={{
                    delay: 1500
                }}
                button={false}
            />
        </>
    );
});

FilmPage.displayName = 'FilmPage'

export default FilmPage;