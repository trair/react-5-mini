// CONSTANTS
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const UNDO = 'UNDO'
const REDO = 'REDO'

// ACTION BUILDERS
export function increment(amount) {
    return {
        type: INCREMENT,
        payload: amount
    }
}
export function decrement(amount) {
    return {
        type: DECREMENT,
        payload: amount
    }
}
export function undo() {
    return {
        type: UNDO
    }
}
export function redo() {
    return {
        type: REDO
    }
}

const initialState = {
    currentValue: 0,
    futureValues: [],
    previousValues: []
}

// REDUCER
export default function (state = initialState, action) {
    // if(!state) {                                             // This if statement can be achieved by the state = initialState statement in the line above
    //     state = initialState
    // }
    switch (action.type) {
        case INCREMENT:
            return {
                currentValue: state.currentValue + action.payload,
                futureValues: [],
                previousValues: [state.currentValue, ...state.previousValues]
            }
            // var value = state.currentValue + action.payload
            // return Object.assign({}, state, { currentValue: value })
        case DECREMENT:
            // var value = state.currentValue - action.payload
            // return Object.assign({}, state, { currentValue: value })
            return {
                currentValue: state.currentValue - action.payload,
                futureValues: [],
                previousValues: [state.currentValue, ...state.previousValues]
            }
        case UNDO:
            return {
                currentValue: state.previousValues[0],
                futureValues: [state.currentValue, ...state.futureValues],
                previousValues: state.previousValues.slice(1)
            }
        case REDO:
            return {
                currentValue: state.futureValues[0],
                futureValues: state.futureValues.slice(1),
                previousValues: [state.currentValue, ...state.previousValues]
            }
        default: return state
    }
}