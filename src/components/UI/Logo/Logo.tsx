import React, {FC, memo} from 'react';
import A from "components/UI/A/A";
import cl from './Logo.module.scss'

const Logo: FC = memo(() => {
    return (
        <A href='/'>
            <div className={cl.Root}>
                UZ<span>MOVI</span><p>.com</p>
            </div>
        </A>
    );
});

Logo.displayName = 'Logo'

export default Logo;