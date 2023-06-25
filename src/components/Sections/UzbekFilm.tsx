import React, {FC, memo, useEffect} from 'react';
import Head from "components/UI/Head/Head";
import FilmCard from "components/UI/Cards/FilmCard";
import Container from "components/Container/Container";
import film1 from "static/images/scorpion.jpg";
import film2 from "static/images/elparvar.jpg";
import film3 from "static/images/men.jpg";
import film4 from "static/images/snayper.jpg";
import film5 from "static/images/notanish.jpg";
import film6 from "static/images/hamroh.jpg";
import cl from "./styles/Translation.module.scss";
import FilmsCarouselLayout from "layouts/FilmsCarouselLayout";
import LinkCard from "components/UI/Cards/LinkCard";
import {useFetchSearchByTitleMutation} from "services/services";



const UzbekFilm: FC = memo(() => {

    const [ fetchSearch, { data, isLoading } ] = useFetchSearchByTitleMutation()

    useEffect(() => {
        fetchSearch({s: 'ask'})
    }, [])

    return (
        <FilmsCarouselLayout
            title="O'zbekcha kinolar"
            href="/tarjima-kinolar"
            data={data?.Search}
            autoplay={false}
            type='slider'
        />
    );
});

UzbekFilm.displayName = 'UzbekFilm'

export default UzbekFilm;