import React, {FC, memo} from 'react';
import Image from "next/image";
import A from "components/UI/A/A";
import cl from './styles/FilmCard.module.scss'
import { useFetchGetMovieByIDQuery } from 'services/services';

interface FilmCardProps {
    title: string,
    genre: string,
    image: any,
    year?: string,
    status?: string,
    id: string,
}

const FilmCard: FC<FilmCardProps> = memo(({ title, genre, image, year, status, id}) => {

    const { data: movie } = useFetchGetMovieByIDQuery(id)


    console.log(movie)


    return (
        <A href={`/film/${id}`}>
            <div className={cl.Card}>
                <span className={cl.Year}>{year}</span>
                <span className={cl.Status}>{movie?.imdbRating}</span>
                <div className={cl.Img}>
                    <img
                        src={image}
                        width={200}
                        height={280}
                        alt="film"/>
                </div>
                <div className={cl.Body}>
                    <h2>{ title }</h2>
                    <p>{ movie?.Country }</p>
                </div>
            </div>
        </A>
    );
});


FilmCard.displayName = 'FilmCard'

export default FilmCard;