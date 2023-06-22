import React, {FC, memo, ReactNode} from 'react';
import Link from "next/link";

interface AProps {
    href: string,
    children: ReactNode
}

const A: FC<AProps> = memo(({ href, children }) => {
    return (
        <Link href={href}>
            <a>{children}</a>
        </Link>
    );
});

A.displayName = 'A'

export default A;