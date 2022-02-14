import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';


type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export const UniversalButtonUpDown: React.FC<DefaultButtonPropsType> = (
    {
        className,
        ...restProps
    }
) => {

    return (
        <button className={className}
               {...restProps}
                />
    );
};

