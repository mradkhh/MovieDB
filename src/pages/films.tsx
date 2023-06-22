import React, {FC, memo} from 'react';
import MainLayout from "layouts/MainLayout";
import FilmsPage from "components/Pages/FilmsPage";


const Films: FC = memo(() => {
    return (
        <MainLayout title='Films' description='films' mainClass='films_main'>
            <FilmsPage/>
        </MainLayout>
    );
});

Films.displayName = 'Films'

export default Films;