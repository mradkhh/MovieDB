import React, {FC, memo} from 'react';
import ListItem from "./ListItem";
import cl from './styles/FilmDetailsCard.module.scss'
import {IMovie} from "components/Pages/FilmPage";

interface FilmDetailsCardProps {
    movieInfo?: IMovie
}


const FilmDetailsCard: FC<FilmDetailsCardProps> = ({movieInfo}) => {

    return (
        <div className={[cl.Root, ' flex-start'].join('')}>
            <div className={cl.Img}>
                <img
                    src={movieInfo?.Poster !== 'N/A' ? movieInfo?.Poster : '/movie.png'}
                    width={300}
                    height={386}
                    alt={movieInfo?.Title}
                />
            </div>
            <table className={cl.Table}>
                <tbody className={cl.Body}>
                <ListItem
                    title='Nomi'
                    text={movieInfo?.Title}
                />
                <ListItem
                    title='Davlati'
                    text={movieInfo?.Country}
                />
                <ListItem
                    title='Sana'
                    text={movieInfo?.Year}
                />
                <ListItem
                    title='Janr'
                    text={movieInfo?.Genre}
                />
                <ListItem
                    title='Tili'
                    text={movieInfo?.Language}
                />
                <ListItem
                    title='Davomiyligi'
                    text={movieInfo?.Runtime}
                />
                <ListItem
                    title='Aktiyorlar'
                    text={movieInfo?.Actors}
                />
                <ListItem
                    title='Mukofotlar'
                    text={movieInfo?.Awards}
                />
                <ListItem
                    title='Rejissor'
                    text={movieInfo?.Director}
                />
                <ListItem
                    title='Ssenari muallifi'
                    text={movieInfo?.Writer}
                />
                <ListItem
                    title='IMDb reyting'
                    text={movieInfo?.imdbRating}
                />
                <ListItem
                    title='Budjet'
                    text={movieInfo?.BoxOffice}
                />
                </tbody>
            </table>
        </div>
    );
};

export default memo(FilmDetailsCard);