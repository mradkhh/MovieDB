import React, {ButtonHTMLAttributes, forwardRef, memo, ReactNode, useRef} from 'react';
import {useRipple} from "react-use-ripple";
import cl from './styles/Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    ripple?: boolean,
    startIcon?: ReactNode,
    endIcon?: ReactNode,
    animationDuration?: number
}


const Button =
    forwardRef<HTMLButtonElement, ButtonProps>(
        ({
             className,
             startIcon= null,
             endIcon= null,
             ripple= false,
            animationDuration= 500,
            children,
            ...props
        }, ref) => {

    return (
        <button
            className={[cl.btn, className].join('')}
            ref={ref}
            {...props}
        >
            {startIcon && <span className={cl.startIcon}>{startIcon}</span>}
            {children}
            {endIcon && <span className={cl.endIcon}>{endIcon}</span>}
        </button>
    );
});

Button.displayName = 'Button'

export default memo(Button);