import React, {memo} from 'react';
import s from './Display.module.css'
import {Button} from "../Button/Button";
import {useDispatch} from "react-redux";
import {incrementAC, resetAC} from "../../State/counterReducer";

export type DisplayType = {
    start: number
    error: string | null
    blocker: () => boolean
}

export const Display: React.FC<DisplayType> = memo((
    {
        start,
        error,
        blocker,
    }) => {
    const dispatch = useDispatch()

    //Function for incrementation start value in display block (right side block)
    const increment = () => {
        dispatch(incrementAC(start))
    }

    //Function for reset value to start value in display block (right side block)
    const reset = () => {
        dispatch(resetAC())
    }




    return (
        <div className={s.displayContainer}>

            <div className={s.display}>
                {error ? <span className={s.error}>{error}</span> : start}
            </div>

            <div className={s.buttonsDisplay}>
                <Button
                    label={'INC'}
                    callBack={increment}
                    disabled={!!error || blocker()}
                />

                <Button
                    label={'RESET'}
                    callBack={reset}
                    disabled={!!error || !blocker()}
                />
            </div>

        </div>
    )
})