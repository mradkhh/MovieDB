import React, {FC, memo} from 'react';
import Container from "components/Container/Container";
import Image from "next/image";
import m1 from 'static/images/m1.jpg'
import m2 from 'static/images/m2.jpg'
import m3 from 'static/images/m3.jpg'
import FilmsCarouselLayout from "layouts/FilmsCarouselLayout";
import Banner from "components/UI/Banner/Banner";
import cl from './styles/Premiere.module.scss'

const data = [
    {
        component: ( <Banner image={m1} /> )
    },
    {
        component: ( <Banner image={m2} /> )
    },
    {
        component: ( <Banner image={m3} /> )
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