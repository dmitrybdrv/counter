import {combineReducers, legacy_createStore } from 'redux'
import {counterReducer} from "./counterReducer";
import {loadFromLocalStorage, saveToLocalStorage} from "./LocalStoragePreloader";

//Root reducer
const rootReducer = combineReducers({
    counter: counterReducer
})

//Store and Store type
export const store = legacy_createStore(rootReducer, loadFromLocalStorage())
export type RootStateType = ReturnType<typeof rootReducer>

//@ts-ignore
window.store = store

//This is using for subscribe to store changes (observer). Save to Local Storage Global counter state.
store.subscribe(() => saveToLocalStorage(store.getState()))
