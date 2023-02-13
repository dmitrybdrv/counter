import React from 'react';
import './App.css';
import {Display} from "./Componens/Display/Display";
import {Preset} from "./Componens/Preset/Preset";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "./State/Store";
import {setAC, setErrorAC} from "./State/counterReducer";

function App() {

    const error = useSelector<RootStateType, null | string>(start => start.counter.error)
    const startValue = useSelector<RootStateType, number>(start => start.counter.preset.startValue)
    const maxValue = useSelector<RootStateType, number>(start => start.counter.preset.maxValue)
    const start = useSelector<RootStateType, number>(start => start.counter.display.start)
    const dispatch = useDispatch()

    //Function for setting value in display block (right side block of counter)
    const preset = () => {
        dispatch(setAC())
    }

    //Function for disabling buttons
    const blocker = () => {
        if (startValue > maxValue || startValue < 0) {
            dispatch(setErrorAC('Incorrect value'))
            return true
        } else if(start === maxValue) {
            return true
        } else {
            dispatch(setErrorAC(null))
            return false
        }

    }

    return (
        <div className="App">
            <div className={'wrapper'}>
                <Preset
                    error={error}
                    startValue={startValue}
                    maxValue={maxValue}
                    preset={preset}
                    blocker={blocker}
                />

                <Display
                    start={start}
                    error={error}
                    blocker={blocker}
                />
            </div>
        </div>

    );
}

export default App;
