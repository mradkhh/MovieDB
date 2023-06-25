import React, {FC, memo, useEffect} from 'react';
import Head from "components/UI/Head/Head";
import FilmCard from "components/UI/Cards/FilmCard";
import Container from "components/Container/Container";
import FilmsCarouselLayout from "layouts/FilmsCarouselLayout";
import film1 from "static/images/film6.jpg";
import film2 from "static/images/tezlik.jpg";
import film3 from "static/images/idiot.jpg";
import film4 from "static/images/chinnai.jpg";
import film5 from "static/images/muhabbat.jpeg";
import film6 from "static/images/qasos.jpg";
import cl from "./styles/Translation.module.scss";
import LinkCard from "components/UI/Cards/LinkCard";
import {useFetchSearchByTitleMutation} from "services/services";


const HindFilm: FC = memo(() => {

    const [ fetchSearch, { data, isLoading } ] = useFetchSearchByTitleMutation()

    useEffect(() => {
        fetchSearch({s: 'meri'})
    }, [])

    return (
            <FilmsCarouselLayout
                title="Hindcha filmlar"
                href="/tarjima-kinolar"
                data={data?.Search}
                autoplay={false}
                type='slider'
            />
    );
});

HindFilm.displayName = "HindFilm"

export default HindFilm;