import React, {FC, memo} from 'react';
import cl from './styles/Video.module.scss'

interface VideoProps {

}


const Video: FC<VideoProps> = ({  }) => {
    return (
        <h1>Video Player</h1>
    );
};

export default memo(Video);