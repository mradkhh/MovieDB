import React, {FC, memo} from 'react';
import cl from './styles/ListItem.module.scss'

interface ListItemProps {
    title: string,
    text: string | undefined
}


const ListItem: FC<ListItemProps> = ({ title, text }) => {
    return (
        <tr className={[cl.Root].join('')}>
            <td>{title}</td>
            <td>{text}</td>
        </tr>
    );
};

export default memo(ListItem);