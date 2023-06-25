import React, {FC, memo, useEffect} from 'react';
import Head from "components/UI/Head/Head";
import FilmCard from "components/UI/Cards/FilmCard";
import Container from "components/Container/Container";
import FilmsCarouselLayout from "layouts/FilmsCarouselLayout";
import film1 from 'static/images/teskari.jpg'
import film2 from 'static/images/sumerki.jpg'
import film3 from 'static/images/yirtqich.jpg'
import film4 from 'static/images/jersi.jpg'
import film5 from 'static/images/thoree.jpg'
import film6 from 'static/images/film6.jpg'
import cl from "./styles/Series.module.scss";
import LinkCard from "components/UI/Cards/LinkCard";
import {useFetchSearchByTitleMutation} from "services/services";


const Series: FC = memo(() => {
    const [ fetchSearch, { data, isLoading } ] = useFetchSearchByTitleMutation()

    useEffect(() => {
        fetchSearch({s: 'atom'})
    }, [])


    return (
        <FilmsCarouselLayout
            title="Seriallar"
            href="/tarjima-kinolar"
            data={data?.Search}
            autoplay={false}
            type='slider'
        />
    );
});

Series.displayName = 'Series'

export default Series;