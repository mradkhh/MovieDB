import React, {createRef, FC, memo, ReactNode} from 'react';
import useHover from "hooks/useHover";
import cl from './Dropdown.module.scss'

type Items = {
    value: number,
    title: string
}

interface DropdownProps {
    children?: ReactNode,
    items: Items[]
}

const Dropdown: FC<DropdownProps> = memo(({ children, items }) => {

    const refTitle = createRef<HTMLDivElement>()
    const refDropdown = createRef<HTMLDivElement>()
    const isTitle = useHover(refTitle)
    const isDropdown = useHover(refDropdown)

    return (
        <div className={cl.Root}>
            <div ref={refTitle} className={cl.Title}>{children}
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.81348 6.53336L7.55348 9.27336C7.67838 9.39752 7.84735 9.46722 8.02348 9.46722C8.1996 9.46722 8.36857 9.39752 8.49348 9.27336L11.1601 6.60669" stroke="#F5F5F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="bevel"/>
                    </svg>
            </div>
            <div ref={refDropdown}  className={cl.Dropdown} style={{display: isTitle || isDropdown ? 'block' : 'none'}}>
                { items.map((item) =>
                        <div key={item.title} className={cl.DropdownItem}>{item.title}</div>
                    ) }
            </div>
        </div>
    );
});

Dropdown.displayName = 'Dropdown'

export default Dropdown;