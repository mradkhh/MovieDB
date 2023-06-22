import React, {FC, memo} from 'react';
import Container from "components/Container/Container";
import Image from "next/image";
import thor from 'static/images/thor.jpg'
import jurassic from 'static/images/jurassic.webp'
import impossible from 'static/images/impossibe.jpg'
import FilmsCarouselLayout from "layouts/FilmsCarouselLayout";
import Banner from "components/UI/Banner/Banner";
import cl from './styles/Premiere.module.scss'

const data = [
    {
        component: ( <Banner image={thor} /> )
    },
    {
        component: ( <Banner image={jurassic} /> )
    },
    {
        component: ( <Banner image={impossible} /> )
    },
]

const Premiere: FC = memo(() => {
    return (
            <FilmsCarouselLayout
                title='premiere'
                href="/premiere"
                data={data}
                type="banner"
                autoplay={{
                    delay: 3000
                }}
                button={false}
            />
    );
});

Premiere.displayName = 'Premiere'

export default Premiere;