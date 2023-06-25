import React, {useEffect} from 'react';
import Container from "components/Container/Container";
import Head from "components/UI/Head/Head";
import TrailerCard from "components/UI/Cards/TrailerCard";
import jurassic from 'static/images/jurassic.jpg'
import adam from 'static/images/BlackAdam.jpg'
import avatar from 'static/images/avatar.jpg'
import impossible from 'static/images/impossibe.jpg'
import cl from './styles/Trailer.module.scss'
import FilmsCarouselLayout from "layouts/FilmsCarouselLayout";
import {useFetchSearchByTitleMutation} from "services/services";


const Trailer = () => {

    const [ fetchSearch, { data: similar_movies, isLoading } ] = useFetchSearchByTitleMutation()

    useEffect(() => {
        fetchSearch({s: 'mission'})
    }, [])

    return (
            <FilmsCarouselLayout
                title="Tez kunda bizda"
                href="/trailer"
                data={similar_movies?.Search}
                autoplay={{
                    delay: 1500
                }}
                type='trailer'
                button={false}
            />
    );
};

export default Trailer;