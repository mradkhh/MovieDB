import React, {FC, memo} from 'react';
import MainLayout from "layouts/MainLayout";
import FilmPage from "components/Pages/FilmPage";


const Film: FC = memo(() => {
    return (
        <MainLayout title='Film' description='film' mainClass='film_main'>
            <FilmPage/>
        </MainLayout>
    );
});

Film.displayName = 'Film'

export default Film;