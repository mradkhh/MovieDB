import React, {FC, memo} from 'react';
import dynamic from 'next/dynamic';

const Premiere = dynamic(() => import('components/Sections/Premiere'))
const Translation = dynamic(() => import('components/Sections/Translation'))
const UzbekFilm = dynamic(() => import('components/Sections/UzbekFilm'))
const HindFilm = dynamic(() => import('components/Sections/HindFilm'))
const Series = dynamic(() => import('components/Sections/Series'))
const Cartons = dynamic(() => import('components/Sections/Cartons'))

const Home: FC = memo(() => {
    return (
        <>
            <Premiere/>
            <Translation/>
            <UzbekFilm/>
            <HindFilm/>
            <Series/>
            <Cartons/>
        </>
    );
});

Home.displayName = 'Home'

export default Home;