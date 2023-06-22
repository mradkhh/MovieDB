import React, {FC, memo} from 'react';
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

const data = [
    {
        component: ( <FilmCard
            year='2022'
            title='Teskari voqelik'
            genre='Fantastik'
            image={film1}
        /> )
    },
    {
        component: ( <FilmCard
            year='2022'
            title='Sumerki 5 - Tong otishi'
            genre='Fantastik'
            image={film2}
        /> )
    },
    {
        component: ( <FilmCard
            year='2022'
            title='Yirtqich'
            genre='Fantastik'
            image={film3}
        /> )
    },
    {
        component: ( <FilmCard
            year='2022'
            title='Jersi'
            genre='Fantastik'
            image={film4}
        /> )
    },
    {
        component: ( <FilmCard
            year='2022'
            title='Tor 4 - sevgi va momaqaldiroq'
            genre='Fantastik'
            image={film5}
        /> )
    },
    {
        component: ( <FilmCard
            year='2022'
            title='Bitiruvchilar uchrashuvi'
            genre='Melodrama, hindcha'
            image={film6}
        /> )
    },
    {
        component: ( <FilmCard
            year='2022'
            title='Bitiruvchilar uchrashuvi'
            genre='Melodrama, hindcha'
            image={film6}
        /> )
    },
    {
        component: ( <FilmCard
            year='2022'
            title='Bitiruvchilar uchrashuvi'
            genre='Melodrama, hindcha'
            image={film6}
        /> )
    },
    {
        component: ( <LinkCard
            href='/tarjima-kinolar'
        /> )
    }
]

const Translation: FC = memo(() => {
    return (
        <FilmsCarouselLayout
            title="Tarjima kinolar"
            href="/tarjima-kinolar"
            data={data}
            autoplay={false}
            type='slider'
        />
    );
});

Translation.displayName = 'Translation'

export default Translation;