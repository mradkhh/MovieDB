import React, {FC, memo, useEffect} from 'react';
import Container from "components/Container/Container";
import Head from "components/UI/Head/Head";
import FilmCard from "components/UI/Cards/FilmCard";
import FilmsCarouselLayout from "layouts/FilmsCarouselLayout";
import film1 from 'static/images/teskari.jpg'
import film2 from 'static/images/sumerki.jpg'
import film3 from 'static/images/yirtqich.jpg'
import film4 from 'static/images/jersi.jpg'
import film5 from 'static/images/thoree.jpg'
import film6 from 'static/images/film6.jpg'
import cl from './styles/Translation.module.scss'
import LinkCard from "components/UI/Cards/LinkCard";
import {useFetchSearchByTitleMutation} from "services/services";


const Translation: FC = memo(() => {

    const [ fetchSearch, { data: similar_movies, isLoading } ] = useFetchSearchByTitleMutation()

    useEffect(() => {
        fetchSearch({s: 'mission'})
    }, [])

    return (
        <FilmsCarouselLayout
            title="Tarjima kinolar"
            href="/tarjima-kinolar"
            data={similar_movies?.Search}
            autoplay={false}
            type='slider'
        />
    );
});

Translation.displayName = 'Translation'

export default Translation;