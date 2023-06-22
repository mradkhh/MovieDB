import React, {FC, memo} from 'react';
import Image from "next/image";
import cl from './Banner.module.scss'

interface BannerProps {
    image: any,
}


const Banner: FC<BannerProps> = ({ image }) => {
    return (
        <div className={cl.Root}>
            <div className={cl.Content}>
                <span className={cl.Premiere}>Premyera</span>
                <Image
                    objectPosition='center'
                    objectFit='cover'
                    src={image}
                    alt='Premiere'
                    placeholder='blur'
                />
            </div>
        </div>
    );
};

export default memo(Banner);