import React, {FC, memo} from 'react';
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

const data = [
    {
        component: ( <FilmCard
            year='2021'
            title='Scorpion'
            genre='Fantastik'
            image={film1}
        /> )
    },
    {
        component: ( <FilmCard
            year='2020'
            title='Elparvar'
            genre='Tarixiy'
            image={film2}
        /> )
    },
    {
        component: ( <FilmCard
            year='2021'
            title='Men terrorchi emasman'
            genre='Jangari'
            image={film3}
        /> )
    },
    {
        component: ( <FilmCard
            year='2022'
            title='Snayper'
            genre='Jangari'
            image={film4}
        /> )
    },
    {
        component: ( <FilmCard
            year='2022'
            title='Notanish qotil'
            genre='Otishma'
            image={film5}
        /> )
    },
    {
        component: ( <FilmCard
            year='2022'
            title='Hamroh'
            genre='Melodrama'
            image={film6}
        /> )
    },
    {
        component: ( <FilmCard
            year='2022'
            title='Hamroh'
            genre='Melodrama'
            image={film6}
        /> )
    },
    {
        component: ( <LinkCard
            href='/tarjima-kinolar'
        /> )
    }
]


const UzbekFilm: FC = memo(() => {
    return (
        <FilmsCarouselLayout
            title="O'zbekcha kinolar"
            href="/tarjima-kinolar"
            data={data}
            autoplay={false}
            type='slider'
        />
    );
});

UzbekFilm.displayName = 'UzbekFilm'

export default UzbekFilm;