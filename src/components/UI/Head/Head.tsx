import React, {FC, memo} from 'react';
import A from "components/UI/A/A";
import cl from './Head.module.scss'

interface HeadProps {
    title?: string,
    href: string
}

const Head: FC<HeadProps> = memo(({ title, href }) => {
    return (
            <div className={cl.Root}>
                <A href={href}>
                <h2>{title}</h2>
                    <span className={cl.Icon}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.90991 19.92L15.4299 13.4C16.1999 12.63 16.1999 11.37 15.4299 10.6L8.90991 4.08" stroke="#292D32" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
                </A>
            </div>
    );
});

Head.displayName = 'Head'

export default Head;