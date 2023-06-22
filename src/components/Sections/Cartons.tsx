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
import cl from "./styles/Series.module.scss";
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
            href='/cartons'
        /> )
    }
]

const Cartons: FC = memo(() => {
    return (
        <FilmsCarouselLayout
            title="Multfilmlar"
            href="/tarjima-kinolar"
            data={data}
            autoplay={false}
            type='slider'
        />
    );
});

Cartons.displayName = "Cartons"

export default Cartons;