import React, {FC, memo} from 'react';
import A from "components/UI/A/A";
import cl from './styles/LinkCard.module.scss'

interface LinkCardProps {
    href: string
}

const LinkCard: FC<LinkCardProps> = ({ href }) => {
    return (
        <div className={cl.Root} >
            <A href={href}>
                <h2 className={cl.Title} >Barchasi</h2>
            </A>
        </div>
    );
};

export default memo(LinkCard);