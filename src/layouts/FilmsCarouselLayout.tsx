import React, { FC, memo} from 'react';
import Carousel from "components/UI/Carousel/Carousel";
import {SwiperSlide} from "swiper/react";
import FilmCard from "components/UI/Cards/FilmCard";
import Container from "components/Container/Container";
import Head from "components/UI/Head/Head";
import cl from './FilmsCarouselLayout.module.scss'

type FilmType = {
    Type: string,
    imdbID: string,
    Title: string,
    Poster: string,
    Year: string,
    component: JSX.Element
}

interface FilmsFilmsCarouselLayoutProps {
    title?: string,
    href?: string,
    type: string,
    data: any,
    autoplay?: any,
    button?: boolean
}

const FilmsCarouselLayout: FC<FilmsFilmsCarouselLayoutProps> = ({
                                                                    type ,
                                                                    title,
                                                                    href,
                                                                    data,
                                                                    autoplay,
                                                                    button
}) => {


    return (
        <Container id='carousel'>
            { data?.length && ((type === 'slider') || (type === 'trailer')) ? <Head title={title} href={href ? href : ''}/> : null  }
            <Carousel type={type} autoplay={autoplay} button={button} >
                {
                   (type !== 'banner' && data) && data?.map((film: FilmType, index: number) =>
                        <SwiperSlide key={index} >
                            <FilmCard
                                genre={film?.Type}
                                key={film?.imdbID}
                                id={film?.imdbID}
                                title={film?.Title}
                                year={film?.Year}
                                image={film?.Poster}
                            />
                        </SwiperSlide>
                    )

                }
                {
                    (type === 'banner' && data) && data?.map((film: FilmType, index: number) =>
                        <SwiperSlide key={index} >
                            { film?.component }
                        </SwiperSlide>
                    )

                }
            </Carousel>
        </Container>
    );
};

export default memo(FilmsCarouselLayout);