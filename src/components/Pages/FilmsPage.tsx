import React, {FC, memo, useState} from 'react';
import cl from './FilmsPage.module.scss'
import Breadcrumbs from "components/UI/Breadcrumbs/Breadcrumbs";
import Grid from "components/UI/Grid/Grid";
import FilmCard from "components/UI/Cards/FilmCard";
import film3 from "static/images/yirtqich.jpg";
import useRepeat from "hooks/useRepeat";
import FilmsCarouselLayout from "layouts/FilmsCarouselLayout";
import film1 from "static/images/teskari.jpg";
import film2 from "static/images/sumerki.jpg";
import film4 from "static/images/jersi.jpg";
import film5 from "static/images/thoree.jpg";
import film6 from "static/images/film6.jpg";
import Pagination from "components/UI/Pagination/Pagination";
import {Spinner} from "components/UI/Spiner/Spiner";

const breadcrumb = [
    { path: '/', text: 'Bosh sahifa' }
]

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
        component: ( <FilmCard
            year='2022'
            title='Bitiruvchilar uchrashuvi'
            genre='Melodrama, hindcha'
            image={film6}
        /> )
    }
]

const FilmsPage: FC = () => {

    const [ page, setPage ] = useState<number>(1)

    const component = useRepeat(12, <FilmCard
        year='2022'
        title='Yirtqich'
        genre='Fantastik'
        image={film3}
    />)
    return (
        <>
            <Breadcrumbs array={breadcrumb} current='Kinolar'/>
            <Grid>
                {
                    component.map(film =>
                        film
                    )
                }
            </Grid>
            <Pagination page={page} pages={300} setPage={setPage} />
            <Spinner />
            <FilmsCarouselLayout
                title='Tasodifiy'
                type='slider'
                data={data}
                autoplay={{
                    delay: 1500
                }}
                button={false}
            />
        </>
    );
};

export default memo(FilmsPage);