import React, {FC, memo, ReactNode} from 'react';
import Container from "components/Container/Container";
import cl from './Grid.module.scss'

interface GridProps {
    children: ReactNode
}

const Grid: FC<GridProps> = ({ children }) => {
    return (
        <Container id='grid'>
            <div className={cl.Root}>{children}</div>
        </Container>
    );
};

export default memo(Grid);