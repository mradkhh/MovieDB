import React, {FC, memo} from 'react';
import Image from "next/image";
import A from "components/UI/A/A";
import cl from './styles/FilmCard.module.scss'

interface FilmCardProps {
    title: string,
    genre: string,
    image: any,
    year?: string,
    status?: string
}

const FilmCard: FC<FilmCardProps> = memo(({ title, genre, image, year, status}) => {
    return (
        <A href='film'>
            <div className={cl.Card}>
                <span className={cl.Year}>{year}</span>
                <span className={cl.Status}>{status}</span>
                <div className={cl.Img}>
                    <Image
                        objectFit='cover'
                        objectPosition='center'
                        width={200}
                        height={280}
                        src={image}
                        alt={title}
                        placeholder='blur'
                    />
                </div>
                <div className={cl.Body}>
                    <h2>{ title }</h2>
                    <p>{ genre }</p>
                </div>
            </div>
        </A>
    );
});


FilmCard.displayName = 'FilmCard'

export default FilmCard;