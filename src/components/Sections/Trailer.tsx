import React from 'react';
import Container from "components/Container/Container";
import Head from "components/UI/Head/Head";
import TrailerCard from "components/UI/Cards/TrailerCard";
import jurassic from 'static/images/jurassic.jpg'
import adam from 'static/images/BlackAdam.jpg'
import avatar from 'static/images/avatar.jpg'
import impossible from 'static/images/impossibe.jpg'
import cl from './styles/Trailer.module.scss'
import FilmsCarouselLayout from "layouts/FilmsCarouselLayout";

const data = [
    {
        component: <TrailerCard
                        title="Yura davri 3"
                        genre="Jangari, Fantastik"
                        image={jurassic}
                    />
    },
    {
        component: <TrailerCard
                        title="Uddalab bo'lmas topshiriq 7"
                        genre="Jangari, Otishma"
                        image={impossible}
                    />
    },
    {
        component: <TrailerCard
                        title="Avatar 2"
                        genre="Jangari, Fantastik"
                        image={avatar}
                    />
    },
    {
        component: <TrailerCard
                        title="Qora Adam"
                        genre="Jangari, Fantastik"
                        image={adam}
                    />
    },
]

const Trailer = () => {
    return (
            <FilmsCarouselLayout
                title="Tez kunda bizda"
                href="/trailer"
                data={data}
                autoplay={{
                    delay: 1500
                }}
                type='trailer'
                button={false}
            />
    );
};

export default Trailer;