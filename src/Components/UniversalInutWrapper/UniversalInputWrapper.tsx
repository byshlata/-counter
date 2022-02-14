import React, {useEffect, useState} from 'react';
import {UniversalInput} from "../UniversalInput/UniversalInput";
import s from "./UniversalInputWrapper.module.sass";
import {UniversalButton} from "../UniversalButton/UniversalButton";
import {UniversalButtonUpDown} from "../UniversalButtonUpDown/UniversalButtonUpDown";


export type UniversalInputWrapperPropsType = {
    error: boolean
    value: number;
    setValue: (value: number) => void;
    indicatorOnOff: () => void
}


export const UniversalInputWrapper: React.FC<UniversalInputWrapperPropsType> = ({
                                                                                    error,
                                                                                    value,
                                                                                    setValue,
                                                                                    indicatorOnOff
                                                                                }
) => {



    const [valueState, setValueState] = useState<number>(value)

    useEffect(() => {
        setValue(valueState);
    }, [valueState])


    const changeHandler = (value: number) => {
        setValueState(value)
    }

    const changeUpHandler = () => {
        setValueState(valueState + 1);
        indicatorOnOff()
    }

    const changeDawnHandler = () => {
        setValueState(valueState - 1);
        indicatorOnOff();
    }

    return (
        <div className={s.inputWrapper}>

            <UniversalInput
                indicatorInput={value < 0 || error}
                indicatorOnOff={indicatorOnOff}
                change={changeHandler}
                value={valueState}/>

            <div className={s.buttonWrapper}>
                <UniversalButtonUpDown className={s.buttonUp}
                                       onClick={changeUpHandler}
                >+</UniversalButtonUpDown>

                <UniversalButtonUpDown className={s.buttonDown}
                                       onClick={changeDawnHandler}
                >-</UniversalButtonUpDown>
            </div>
        </div>
    );
};
