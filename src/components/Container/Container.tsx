import React, {FC, memo, ReactNode} from 'react';

interface ContainerProps {
    children: ReactNode,
    id: string
}

const Container: FC<ContainerProps> = memo(({ children, id }) => {
    return (
        <section id={id}>
            <div className="container">
                {children}
            </div>
        </section>
    );
});

Container.displayName = 'Container'

export default Container;