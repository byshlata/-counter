import React from 'react';
import {Scoreboard} from "../Scoreboard/Scoreboard";
import {UniversalButton} from "../UniversalButton/UniversalButton";
import s from "./WindowInformation.module.sass"


export type WindowInformation = {
    buttonScoreDisable: boolean;
    buttonResetDisable: boolean;
    indicatorButtonSetting: boolean;
    errorValue: boolean;
    score: number;
    endValue: number;
    startValue: number;
    setScore: (value: number) => void
    setReset: () => void
}


export const WindowInformation: React.FC<WindowInformation> = (
    {
        buttonScoreDisable,
        buttonResetDisable,
        indicatorButtonSetting,
        errorValue,
        score,
        endValue,
        startValue,
        setScore, setReset

    }
) => {

    const OnClickScoreHelper = () => {
        setScore(score)
    }

    const OnClickResetHelper = () => {
        setReset();
    }

    return (
        <div className={s.table}>
            <div className={s.field}>

                <Scoreboard score={score}
                            indicatorSet={indicatorButtonSetting}
                            indicatorScore={buttonScoreDisable}
                            errorValue={errorValue}
                            endValue={endValue}
                />
                <section className={s.buttonSection}>


                    <UniversalButton disabled={buttonScoreDisable} onClick={OnClickScoreHelper}>Score</UniversalButton>

                    <UniversalButton disabled={buttonResetDisable}
                                     onClick={OnClickResetHelper}>Reset</UniversalButton>

                </section>
            </div>
        </div>

    );

};

