import React from 'react';
import s from './Display.module.css'
import {Button} from "../Button/Button";

export type DisplayType = {
    startValue: number
    increment: () => void
    reset: () => void
    maxValue: number
    error: string | null
}


export const Display: React.FC<DisplayType> = ({startValue, increment, reset, maxValue, error,}) => {
    const coloredNumber = startValue !== maxValue


    const monitor = error ? <input type="text" value={error} className={s.error}/> :
        <input type="number" value={startValue} className={coloredNumber ? s.inputDisplay : s.error}/>
    const disBut = maxValue === startValue || !!error || startValue < 0 || maxValue < 0
    const disBurReset = !!error

    const incrementHandler = () => {
        increment()
    }
    const resetHandler = () => {
        reset()
    }


    return (
        <div className={s.display}>
            <div className={s.mainTablo}>
                {monitor}
            </div>
            <div className={s.buttonsDisplay}>
                <Button buttonName={'inc'} callBack={incrementHandler}
                        className={disBut ? s.disabledDisplayButton : s.displayButton}/>
                <Button buttonName={'reset'} callBack={resetHandler}
                        className={disBurReset ? s.disabledDisplayButton : s.displayButton}/>
            </div>
        </div>
    );
};