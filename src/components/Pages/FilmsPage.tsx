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
import FilmsCarouselLayout from "layouts/FilmsCarouselLayout";
import {EmptyIcon} from "static/svg";

const breadcrumb = [
    { path: '/', text: 'Bosh sahifa' }
]


const FilmsPage: FC = () => {

    const [ page, setPage ] = useState<number>(1)
    const { query } = useRouter()

    const [ fetchSearch, { data, isLoading, error, status } ] = useFetchSearchByTitleMutation()
    const [ fetchSearchStatic, { data: static_movies, } ] = useFetchSearchByTitleMutation()

    useEffect(() => {
        fetchSearchStatic({s: 'george'})
    }, [])

    useEffect(() => {
        fetchSearch({s: query?.id, page: page})
    }, [query, page])


    return (
        <>
            <Breadcrumbs array={breadcrumb} current='Kinolar'/>
            {
                (data?.Search?.length && !isLoading)
                    ? <>
                        <Grid>
                            {
                                data?.Search ? data?.Search?.map((film: IMovie) =>
                                    <FilmCard
                                        genre={film?.Type}
                                        key={film?.imdbID}
                                        id={film?.imdbID}
                                        title={film?.Title}
                                        year={film?.Year}
                                        image={film?.Poster !== 'N/A' ? film?.Poster : '/movie.png' }
                                    />
                                ) : null
                            }
                        </Grid>
                        <Pagination page={page} pages={Math.floor(data?.totalResults / 10)} setPage={setPage} />
                    </>
                    : isLoading
                        ? <Spinner/> :
                        (!data?.Search?.length && !isLoading) ? <div className={cl.empty_page}>
                            <div>
                                <EmptyIcon/>
                                <h3>{data?.Error}</h3>
                            </div>
                        </div> : null
            }
            <FilmsCarouselLayout
                title='Tasodifiy'
                type='slider'
                data={static_movies?.Search}
                autoplay={{
                    delay: 1500
                }}
                button={false}
            />
        </>
    );
};

export default memo(FilmsPage);