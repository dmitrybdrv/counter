import {
    counterReducer,
    incrementAC,
    initialStateType, resetAC,
    setAC,
    setErrorAC,
    setMaxValueAC,
    setStartValueAC
} from "./counterReducer";

let startState: initialStateType

beforeEach(() => {
    startState = {
        preset: {
            maxValue: 0,
            startValue: 0,
        },
        display: {
            start: 0,
        },
        error: null as string | null,
    }
})

test('Max value should be changed', () => {

    //Action
    const value = 15
    const action = setMaxValueAC(value)
    const endState = counterReducer(startState, action)

    //Result
    expect(endState.preset.maxValue).toBe(15)
    expect(startState.preset.maxValue).toBe(0)

})
test('startValue should correct', () => {

    //Action
    const value = 7
    const action = setStartValueAC(value)
    const endState = counterReducer(startState, action)

    //Result
    expect(endState.preset.startValue).toBe(7)
    expect(startState.preset.startValue).toBe(0)

})
test('Start, value of display should be same like preset startValue (9)', () => {

    //Data
    startState = {
        preset: {
            maxValue: 0,
            startValue: 9,
        },
        display: {
            start: 0,
        },
        error: null as string | null,
    }

    //Action

    const endState = counterReducer(startState, setAC())

    //Result
    expect(endState.display.start).toEqual(endState.preset.startValue)
    expect(endState.display.start).not.toEqual(startState.display.start)


})
test('Error should be added if value less 0', () => {

    //Action

    const endState = counterReducer(startState, setErrorAC('Incorrect value'))

    //Result
    expect(endState.error).toBe('Incorrect value')
    expect(startState.error).toBe(null)

})
test('Increment should add + 1 number', () => {

    //Data
    startState = {
        preset: {
            maxValue: 5,
            startValue: 3,
        },
        display: {
            start: 3,
        },
        error: null as string | null,
    }

    //Action

    const endState = counterReducer(startState, incrementAC(startState.display.start))

    //Result
    expect(endState.display.start).toBe(4)
    expect(startState.display.start).toBe(3)

})
test('Reset should return start as preset startValue', () => {

    //Data
    startState = {
        preset: {
            maxValue: 6,
            startValue: 2,
        },
        display: {
            start: 0,
        },
        error: null as string | null,
    }

    //Action
    const endState = counterReducer(startState, resetAC())

    //Result
    expect(endState.display.start).toBe(2)
    expect(startState.display.start).toBe(0)

})