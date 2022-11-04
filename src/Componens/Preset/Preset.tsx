import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './Preset.module.css'
import {Button} from "../Button/Button";


export type PresetType = {
    set: (max: number, start: number) => void
    error: string | null
    setError: (value: string | null) => void
}

export const Preset: React.FC<PresetType> = ({set,error, setError,}) => {


    const [maxValue, setMaxValue] = useState(0)
    const [startValue, setStartValue] = useState(0)
    const [disabledBut, setDisabledBut] = useState(true)

    useEffect(()=> {
        let newStart = localStorage.getItem('startValue')
        if (newStart) {
            let startV = JSON.parse(newStart)
            setStartValue(startV)
        }
    },[])
    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(startValue))
    }, [startValue])

    useEffect(()=> {
        let newValue = localStorage.getItem('max_value')
        if(newValue) {
            let newMaxValue = JSON.parse(newValue)
            setMaxValue(newMaxValue)
        }
    },[])
    useEffect(()=> {
        localStorage.setItem('max_value', JSON.stringify(maxValue))
    }, [maxValue])




    const onChangeMAX = (event: ChangeEvent<HTMLInputElement>) => {
        setError(null)
        setDisabledBut(false)
        setMaxValue(event.currentTarget.valueAsNumber)
        // if(event.currentTarget.valueAsNumber < 0 || event.currentTarget.valueAsNumber <= startValue || startValue < 0 )
        if(event.currentTarget.valueAsNumber < startValue || event.currentTarget.valueAsNumber < 0 || event.currentTarget.valueAsNumber === startValue) {
            setError('incorrect value')
        }
    }
    const onChangeStart = (event: ChangeEvent<HTMLInputElement>) => {
        setError(null)
        setDisabledBut(false)
        setStartValue(event.currentTarget.valueAsNumber)
        // if(event.currentTarget.valueAsNumber < 0 || event.currentTarget.valueAsNumber >= maxValue)
        if(event.currentTarget.valueAsNumber < 0 || event.currentTarget.valueAsNumber === maxValue) {
            setError('incorrect value')
        }
    }
    const preset = () => {
        if(maxValue < startValue || maxValue < 0 || startValue < 0 || maxValue === startValue) {
            setError('Change value')
        } else {
            set(maxValue, startValue)
            setDisabledBut(true)
        }
        }



    return (
        <div className={s.preset}>

            <div className={s.tablo}>
                <div>
                    <span>max value: </span> <input type='number' value={maxValue} onChange={onChangeMAX} className={error ? s.error : s.customInput}/> </div>
                <div >
                    <span>start value: </span> <input type="number" value={startValue} onChange={onChangeStart} className={error ? s.error : s.customInput}/>
                </div>
            </div>

            <div className={s.presetButton}>
                <Button callBack={preset} disabled={disabledBut} buttonName={'set'} className={disabledBut || error ? s.disablePresButton : s.presButton}/>
            </div>
        </div>
    );
};