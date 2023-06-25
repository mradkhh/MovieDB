import React, {FC, memo, useEffect, useState} from 'react';
import Breadcrumbs from "components/UI/Breadcrumbs/Breadcrumbs";
import FilmsCarouselLayout from "layouts/FilmsCarouselLayout";
import FilmDetailsCard from "components/UI/Cards/FilmDetailsCard/FilmDetailsCard";
import Container from "components/Container/Container";
import FilmCard from "components/UI/Cards/FilmCard";
import Tabs from "components/UI/Tabs/Tabs";
import Video from "components/UI/Video/Video";
import TrailerVideo from "components/UI/Video/TrailerVideo";
import Download from "components/UI/Video/Download";
import img from 'static/images/thoree.jpg';
import film1 from "static/images/teskari.jpg";
import film2 from "static/images/sumerki.jpg";
import film3 from "static/images/yirtqich.jpg";
import film4 from "static/images/jersi.jpg";
import film5 from "static/images/thoree.jpg";
import film6 from "static/images/film6.jpg";
import cl from './FilmPage.module.scss';
import {useFetchGetMovieByIDQuery, useFetchSearchByTitleMutation} from "services/services";
import {useRouter} from "next/router";

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
                <FilmDetailsCard
                    movieInfo={movie}
                />
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