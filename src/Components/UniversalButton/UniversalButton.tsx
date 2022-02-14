import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import s from "./UniversalButton.module.sass"

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export const UniversalButton: React.FC<DefaultButtonPropsType> = (
    {
        className,
        ...restProps
    }
) => {

    const finalClassName = `${restProps.disabled ? s.disabledButton : s.button} ${className}`

    return (
        <button className={finalClassName}
                {...restProps}/>
    );
};

