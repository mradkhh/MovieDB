import React, {FC, memo} from 'react';
import cl from './Breadcrumbs.module.scss'
import A from "components/UI/A/A";
import Container from "components/Container/Container";

type Crumb = {
    path: string,
    text: string
}

interface BreadcrumbsProps {
    array: Crumb[],
    current: string
}


const Breadcrumbs: FC<BreadcrumbsProps> = memo(({ array, current }) => {
    return (
        <Container id='breadcrumbs'>
            <div className={cl.Root}>
                {
                    array.map(guide =>
                        <>
                            <A key={guide.path} href={guide.path}>{guide.text}</A>
                            <span>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.90991 19.92L15.4299 13.4C16.1999 12.63 16.1999 11.37 15.4299 10.6L8.90991 4.08" stroke="#292D32" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </span>
                        </>
                    )
                }
                <div>{current}</div>
            </div>
        </Container>
    );
});

Breadcrumbs.displayName = 'Breadcrumbs'

export default Breadcrumbs;