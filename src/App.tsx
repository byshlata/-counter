import React, {useEffect, useState} from 'react';
import './App.css';
import s from "./App.module.sass"
import {WindowInformation} from "./Components/WindowInformation/WindowInformation";
import {WindowSettings} from "./Components/WindowSettings/WindowSettings";
import {blob} from "stream/consumers";
import * as buffer from "buffer";

export const App = () => {


    let startValueLocalStorage = localStorage.getItem('startValue');
    let endValueLocalStorage = localStorage.getItem('endValue');
    let startValue: number;
    let endValue: number;
    let error = false;
    let buttonSettingDisable = true;
    let buttonScoreDisable = false;
    let buttonResetDisable = true;
    let errorValue = false;


    if (startValueLocalStorage) {
        startValue = JSON.parse(startValueLocalStorage);
    } else {
        startValue = 0;
    }

    if (endValueLocalStorage) {
        endValue = JSON.parse(endValueLocalStorage);
    } else {
        endValue = 10;
    }

    const [valueSettings, setValue] = useState<Array<number>>([startValue, endValue])
    let [score, setScore] = useState<number>(startValue)
    const [indicatorButtonSetting, setIndicatorButtonSetting] = useState<boolean>(true)
    const [indicatorButtonInformation, setIndicatorButtonInformation] = useState<Array<boolean>>([false, true])


    useEffect(() => {
        setValue(valueSettings);
    }, [valueSettings])

    const setStartEndScore = () => {
        setScore(valueSettings[0]);
        localStorage.setItem('startValue', JSON.stringify(valueSettings[0]))
        localStorage.setItem('endValue', JSON.stringify(valueSettings[1]))
        setIndicatorButtonSetting(true);
        setIndicatorButtonInformation([false, true])
    }


    const changeScoreHandler = (value: number) => {
        setScore(value + 1)
        if (score >= endValue) {
            setIndicatorButtonInformation([true, false])
        }
        if (score === startValue){
            setIndicatorButtonInformation([false, false])
        } else {
            setIndicatorButtonInformation([false, true])
        }
    }

    const setResetHandler = () => {
        setScore(startValue)
        indicatorButtonInformation[0] = false
        indicatorButtonInformation[1] = true
    }

    const setMaxValueHandler = (value: number) => {
        setValue([...[valueSettings[0], value]])
    }

    const setMinValueHandler = (value: number) => {
        setValue([...[value, valueSettings[1]]])
    }

    const indicatorOnOff = () => {
        setIndicatorButtonSetting(false)
        setIndicatorButtonInformation([true, true])
    }

    (valueSettings[0] >= valueSettings[1])
        ? error = true
        : error = false;

    (valueSettings[0] >= valueSettings[1] || valueSettings[0] < 0 || valueSettings[1] < 0)
        ? buttonSettingDisable = true
        : buttonSettingDisable = false;

    (valueSettings[0] < 0 || valueSettings[1] < 0 || valueSettings[0] >= valueSettings[1])
        ? errorValue = true
        : errorValue = false;

    if (!indicatorButtonSetting) {
        buttonScoreDisable = true;
        buttonScoreDisable = true
    } else if (score === valueSettings[0]){
        buttonScoreDisable = false;
        buttonResetDisable = true;
    } else if (score < valueSettings[1]) {
        buttonScoreDisable = false;
        buttonResetDisable = false;
    } else {
        buttonScoreDisable = true;
        buttonResetDisable = false;
    }








    return (
        <div className={s.timer}>
            <WindowSettings
                indicatorButtonSetting={indicatorButtonSetting || buttonSettingDisable}
                indicatorOnOff={indicatorOnOff}
                error={error}
                minValue={valueSettings[0]}
                maxValue={valueSettings[1]}
                setMaxValue={setMaxValueHandler}
                setMinValue={setMinValueHandler}
                setStartEndScore={setStartEndScore}/>

            <WindowInformation
                buttonScoreDisable = {buttonScoreDisable}
                buttonResetDisable = {buttonResetDisable}
                indicatorButtonSetting={indicatorButtonSetting}
                errorValue={errorValue}
                score={score}
                endValue={endValue}
                startValue={startValue}
                setScore={changeScoreHandler}
                setReset={setResetHandler}
            />

        </div>
    );
}

