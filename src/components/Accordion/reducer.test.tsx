import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";

test('Toggle should be true', () => {
    //data (данные)
    const state: StateType = {
        toggle: false
    }
    //action (действие)
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})
    //expect (ожидание)
    expect(newState.toggle).toBe(true)


})

test('Toggle should be false', () => {
    //data (данные)
    const state: StateType = {
        toggle: true
    }
    //action (действие)
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})
    //expect (ожидание)
    expect(newState.toggle).toBe(false)


})
