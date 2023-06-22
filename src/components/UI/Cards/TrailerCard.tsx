import React, {FC, memo, ReactNode} from 'react';
import A from "components/UI/A/A";
import Image from "next/image";
import cl from './styles/TrailerCard.module.scss'

interface TrailerCardProps {
    title: string,
    genre: string,
    image: any
}

const TrailerCard: FC<TrailerCardProps> = memo(({ title, genre, image }) => {
    return (
            <div className={cl.Card}>
        <A href='/trailer/:id'>
                <div className={cl.Img}>
                    <Image
                        width={280}
                        height={140}
                        objectFit='cover'
                        objectPosition='center'
                        src={image}
                        alt={title}
                        placeholder='blur'
                    />
                </div>
                <div className={cl.Body}>
                    <h2>{title}</h2>
                    <p>{ genre }</p>
                </div>
        </A>
            </div>
    );
});

TrailerCard.displayName = 'TrailerCard'

export default TrailerCard;