import React, {FC, memo} from 'react';
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

const HindFilm: FC = memo(() => {
    return (
            <FilmsCarouselLayout
                title="Hindcha filmlar"
                href="/tarjima-kinolar"
                data={data}
                autoplay={false}
                type='slider'
            />
    );
});

HindFilm.displayName = "HindFilm"

export default HindFilm;