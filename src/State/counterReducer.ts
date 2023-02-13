//Variables for Action Creators and Reducer using
enum TypesOfAction {
    SET_MAX_VALUE = 'SET-MAX-VALUE',
    SET_START_VALUE = 'SET-START-VALUE',
    ERROR = 'ERROR',
    SET = 'SETTING-PARAMS-TO-DISPLAY',
    INCREMENT = 'INCREMENT',
    RESET = 'RESET'
}


//Initial state and initial state type
const initialState = {
    preset: {
        maxValue: 0,
        startValue: 0,
    },
    display: {
        start: 0,
    },
    error: null as string | null,
}
export type initialStateType = typeof initialState

//Actions type for reducer action
export type ActionsType =
    | ReturnType<typeof setMaxValueAC>
    | ReturnType<typeof setStartValueAC>
    | ReturnType<typeof setErrorAC>
    | ReturnType<typeof setAC>
    | ReturnType<typeof incrementAC>
    | ReturnType<typeof resetAC>

//Reducer
export const counterReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case TypesOfAction.SET_MAX_VALUE:
            return {...state, preset: {...state.preset, maxValue: action.mx}}

        case TypesOfAction.SET_START_VALUE:
            return {...state, preset: {...state.preset, startValue: action.st}}

        case TypesOfAction.SET:
            return {...state, display: {...state.display, start: state.preset.startValue}}

        case TypesOfAction.ERROR:
            return {...state, error: action.err}

        case TypesOfAction.INCREMENT:
            if(state.display.start !== state.preset.maxValue) {
                return {...state, display: {...state.display, start: action.incr + 1}}
            } else return {...state}

        case TypesOfAction.RESET:
            return {...state, display: {...state.display, start: state.preset.startValue}}


        default:
            return state
    }


};


//Action Creators
export const setStartValueAC = (st: number) => ({type: TypesOfAction.SET_START_VALUE, st} as const)
export const setMaxValueAC = (mx: number) => ({type: TypesOfAction.SET_MAX_VALUE, mx} as const)
export const setAC = () => ({type: TypesOfAction.SET}as const)
export const setErrorAC = (err: string | null) => ({type: TypesOfAction.ERROR, err} as const)
export const incrementAC = (incr: number) => ({type: TypesOfAction.INCREMENT, incr} as const)
export const resetAC = () => ({type: TypesOfAction.RESET}as const)


