import React from 'react';
import s from "./Scoreboard.module.sass"

type ScoreboardProps = {
    indicatorSet: boolean;
    indicatorScore: boolean;
    errorValue: boolean;
    score: number;
    endValue: number;
}

export const Scoreboard: React.FC<ScoreboardProps> = (
    {
        score,
        endValue,
        indicatorSet,
        indicatorScore,
        errorValue

    }) => {


    let error = indicatorSet || errorValue ? 'Incorrect value!' : 'Enter value and press \'set\''


    return (
        <div className={s.scoreboard}>
            <span className={(indicatorScore && !indicatorSet) ? s.textScore : score === endValue ? s.textScoreNumberRed : s.textScoreNumber }>
                {indicatorSet ? score : error}
            </span>
        </div>
    );
};

