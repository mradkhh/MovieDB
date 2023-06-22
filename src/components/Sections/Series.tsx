import React, {FC, memo} from 'react';
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

const data = [
    {
        component: ( <FilmCard
            year='2022'
            title='Bitiruvchilar uchrashuvi'
            genre='Melodrama, hindcha'
            image={film1}
        /> )
    },
    {
        component: ( <FilmCard
            year='2018'
            title='Tezlik'
            genre='Fantasyik, Jangari'
            image={film2}
        /> )
    },
    {
        component: ( <FilmCard
            year='2014'
            title='Uch savdoi'
            genre='Komedia'
            image={film3}
        /> )
    },{
        component: ( <FilmCard
            year='2019'
            title='Chinnai express'
            genre='Komadia, Melodrama'
            image={film4}
        /> )
    },
    {
        component: ( <FilmCard
            year='2008'
            title='Muhabbat'
            genre='Drama, Melodrama'
            image={film5}
        /> )
    },
    {
        component: ( <FilmCard
            year='2014'
            title='Qasos'
            genre='Melodrama, Jangari'
            image={film6}
        /> )
    },
    {
        component: ( <FilmCard
            year='2014'
            title='Qasos'
            genre='Melodrama, Jangari'
            image={film6}
        /> )
    },
    {
        component: ( <LinkCard
            href='/tarjima-kinolar'
        /> )
    }
]

const Series: FC = memo(() => {
    return (
        <FilmsCarouselLayout
            title="Seriallar"
            href="/tarjima-kinolar"
            data={data}
            autoplay={false}
            type='slider'
        />
    );
});

Series.displayName = 'Series'

export default Series;