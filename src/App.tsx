import React, {useEffect, useState} from 'react';
import './App.css';
import {Display} from "./Componens/Display/Display";


function App() {

    const [counter, setCounter] = useState<number>(0)

    useEffect(() => {
        let valueAsString = localStorage.getItem("counterValue")
        if(valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setCounter(newValue)
        }
    }, [])


    useEffect(() => {
        localStorage.setItem("counterValue", JSON.stringify(counter))
    }, [counter])



    const increment = () => {
        if (counter < 5) {
            setCounter(counter + 1)
        }
    }


    const reset = () => {
        setCounter(0)
    }


    const dis = counter >= 5
    const dis2 = counter === 0

    const coloredDisplay = counter > 4 ? 'displayRedColor' : ''



    return (
        <div className="App">
            <Display
                counter={counter}
                increment={increment}
                reset={reset}
                dis={dis}
                dis2={dis2}
                coloredDisplay={coloredDisplay}
            />
        </div>

    );
}

export default App;
