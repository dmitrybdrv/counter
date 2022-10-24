import React, {useState} from 'react';
import {Button} from "../Button/Button";
import s from './Display.module.css'

export type DisplayType = {
    counter: number
    increment: () => void
    reset: () => void
    dis: boolean
    dis2: boolean
    coloredDisplay: string
}


export const Display: React.FC<DisplayType> = ({increment, reset, counter, dis, dis2, coloredDisplay,}) => {



    return (
        <div>
            <div className={s.display}>
                <input type="text" value={counter} className={coloredDisplay}/>
            </div>

            <div className={s.buttons}>
                <Button buttonName={'inc'} callBack={increment} disabled={dis} className={s.inc}/>
                <Button buttonName={'reset'} callBack={reset} disabled={dis2} className={s.res}/>
            </div>
        </div>
    );
};