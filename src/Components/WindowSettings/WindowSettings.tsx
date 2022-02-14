import React from 'react';
import {UniversalButton} from "../UniversalButton/UniversalButton";
import s from "./WindowSettings.module.sass"
import {UniversalInputWrapper} from "../UniversalInutWrapper/UniversalInputWrapper";


export type WindowInformation = {
    indicatorButtonSetting: boolean;
    error: boolean
    maxValue: number;
    minValue: number;
    setMaxValue: (value: number) => void;
    setMinValue: (value: number) => void;
    setStartEndScore: () => void
    indicatorOnOff: () => void
}


export const WindowSettings: React.FC<WindowInformation> = (
    {
        setStartEndScore,
        maxValue,
        minValue,
        setMaxValue,
        setMinValue,
        indicatorButtonSetting,
        error,
        indicatorOnOff
    }
) => {

const setTimerSettingsHandler = () => {
    setStartEndScore();
}

    const setValueMaxHandler = (value: number) => {
        setMaxValue(value);
    }

    const setValueMinHandler = (value: number) => {
        setMinValue(value);
    }

    return (
        <div className={s.table}>
            <div className={s.field}>
                <UniversalInputWrapper
                    error={error}
                    value={maxValue}
                    setValue={setValueMaxHandler}
                    indicatorOnOff={indicatorOnOff}

                />

                <UniversalInputWrapper
                    error={error}
                    value={minValue}
                    setValue={setValueMinHandler}
                    indicatorOnOff={indicatorOnOff}
                />

                <UniversalButton disabled={indicatorButtonSetting} onClick={setTimerSettingsHandler}>Set</UniversalButton>
            </div>
        </div>

    );
};
