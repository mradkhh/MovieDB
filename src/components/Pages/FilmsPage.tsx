import React, {FC, memo, useEffect, useState} from 'react';
import Breadcrumbs from "components/UI/Breadcrumbs/Breadcrumbs";
import Grid from "components/UI/Grid/Grid";
import FilmCard from "components/UI/Cards/FilmCard";
import Pagination from "components/UI/Pagination/Pagination";
import {useFetchSearchByTitleMutation} from "services/services";
import {IMovie} from "components/Pages/FilmPage";
import {Spinner} from "components/UI/Spiner/Spiner";
import cl from './FilmsPage.module.scss'
import {useRouter} from "next/router";

const breadcrumb = [
    { path: '/', text: 'Bosh sahifa' }
]


const FilmsPage: FC = () => {

    const [ page, setPage ] = useState<number>(1)
    const { query } = useRouter()

    const [ fetchSearch, { data, isLoading } ] = useFetchSearchByTitleMutation()

    console.log(data)
    useEffect(() => {
        fetchSearch({s: query?.id})
    }, [query])


    return (
        <>
            <Breadcrumbs array={breadcrumb} current='Kinolar'/>
            {
                (data?.Search?.length && !isLoading)
                    ? <Grid>
                        {
                            data?.Search ? data?.Search?.map((film: IMovie) =>
                                <FilmCard
                                    genre={film?.Type}
                                    key={film?.imdbID}
                                    id={film?.imdbID}
                                    title={film?.Title}
                                    year={film?.Year}
                                    image={film?.Poster}
                                />
                            ) : null
                        }
                    </Grid> : isLoading ? <Spinner/> : null
            }
            <Pagination page={page} pages={300} setPage={setPage} />
            {/*<FilmsCarouselLayout*/}
            {/*    title='Tasodifiy'*/}
            {/*    type='slider'*/}
            {/*    data={data}*/}
            {/*    autoplay={{*/}
            {/*        delay: 1500*/}
            {/*    }}*/}
            {/*    button={false}*/}
            {/*/>*/}
        </>
    );
};

export default memo(FilmsPage);