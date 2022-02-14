import React, {ChangeEvent} from 'react';
import s from "./UniversalInput.module.sass"

export type UniversalInputPropsType = {
    indicatorOnOff: () => void
    change: (value: number) => void;
    value: number;
    indicatorInput: boolean
}



export const UniversalInput: React.FC<UniversalInputPropsType> = (
    {
        change, value, indicatorInput, indicatorOnOff
    }
) => {

   const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
       change(JSON.parse(e.currentTarget.value))
       indicatorOnOff();
   }




    return (
        <input pattern={'^[1-9]+$'}
               value={value}
               onInput={onChangeHandler}
               className={indicatorInput ?  s.inputError: s.input}
        />
    )
};

