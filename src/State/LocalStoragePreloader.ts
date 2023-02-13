import {RootStateType} from "./Store"

//Function for Save values in Local Storage. * Global counter state Local Storage data * Using in Store
export function saveToLocalStorage(state: RootStateType) {
    try {
        const serialisedState = JSON.stringify(state)
        localStorage.setItem("counterState", serialisedState)
    } catch (e) {
        console.warn(e)
    }

}

//Function for DownLoading values from Local Storage. * Global counter state Local Storage data * Using in Store
export function loadFromLocalStorage() {
    try {
        const serialisedState = localStorage.getItem("counterState");
        if (serialisedState === null) return undefined
        return JSON.parse(serialisedState)
    } catch (e) {
        console.warn(e)
        return undefined
    }
}