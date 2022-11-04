import React, {useEffect, useState} from 'react';
import './App.css';
import {Display} from "./Componens/Display/Display";
import {Preset} from "./Componens/Preset/Preset";


function App() {


    const [maxValue, setMaxValue] = useState(0) // МАКСИМАЛЬНОЕ ЗНАЧЕНИЕ
    const [startValue, setStartValue] = useState(0) // СТАРТОВОЕ
    const [start, setStart] = useState(0) // при обнулении (reset), для возврата на установленное значение(start value)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        let newStart = localStorage.getItem('display')
        if (newStart) {
            let newStartValue = JSON.parse(newStart)
            setStartValue(newStartValue)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('display', JSON.stringify(startValue))
    }, [startValue])


    const increment = () => {
        if (startValue < maxValue) {
            setStartValue(startValue + 1)
        }
    }
    const reset = () => {
        setStartValue(start)
    }

    const set = (max: number, start: number) => {
        setMaxValue(max)
        setStart(start)
        setStartValue(start)
    }


    return (
        <div className="App">
            <div className={'wrapper'}>
                <Preset
                    set={set}
                    error={error}
                    setError={setError}
                />

                <Display
                    startValue={startValue}
                    increment={increment}
                    reset={reset}
                    maxValue={maxValue}
                    error={error}

                />
            </div>
        </div>

    );
}

export default App;
