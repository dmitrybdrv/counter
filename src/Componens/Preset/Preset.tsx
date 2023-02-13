import React, {ChangeEvent, memo, useCallback} from 'react';
import s from './Preset.module.css'
import {Button} from "../Button/Button";
import {useDispatch} from "react-redux";
import {setMaxValueAC, setStartValueAC} from "../../State/counterReducer";

export type PresetType = {
    error: string | null
    startValue: number
    maxValue: number
    preset: () => void
    blocker: () => boolean
}

export const Preset: React.FC<PresetType> = memo((
        {
            error,
            startValue,
            maxValue,
            preset,
            blocker,
        }) => {
        const dispatch = useDispatch()

        //Function for setting start value in pre-installation block (left side block)
        const setStartValue =(event: ChangeEvent<HTMLInputElement>) => {
            dispatch(setStartValueAC(event.currentTarget.valueAsNumber))
        }

        //Function for setting max value in pre-installation block (left side block)
        const setMaxValue = (event: ChangeEvent<HTMLInputElement>) => {
            dispatch(setMaxValueAC(event.currentTarget.valueAsNumber))
        }

        //callBack Function for setting two choosing values pre-installation block and setting start value of display block
        const set = useCallback(() => {
            preset()
        }, [startValue])






        return (
            <div className={s.preset}>

                <div className={s.field}>
                    <div>
                        <span>max value:</span> <input type='number' value={maxValue} onChange={setMaxValue}/>
                    </div>

                    <div>
                        <span>start value: </span> <input type="number" value={startValue} onChange={setStartValue}/>
                    </div>

                    {error ? <span className={s.error}>{error}</span> : ''}
                </div>

                <div>
                    <Button disabled={blocker()} callBack={set} label={'SET'}/>
                </div>

            </div>
        )
    }
)