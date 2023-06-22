import React, {FC, memo} from 'react';
import Premiere from "components/Sections/Premiere";
import Trailer from "components/Sections/Trailer";
import Translation from "components/Sections/Translation";
import UzbekFilm from "components/Sections/UzbekFilm";
import HindFilm from "components/Sections/HindFilm";
import Series from "components/Sections/Series";
import Cartons from "components/Sections/Cartons";

const Home: FC = memo(() => {
    return (
        <>
            <Premiere/>
            <Trailer/>
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