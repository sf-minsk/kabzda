type ActionType = {
    type: string
}
export const TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED'

export type StateType = {
    toggle: boolean
}

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case TOGGLE_COLLAPSED:
            return {
                ...state,
            toggle: !state.toggle
            }
        default:
            throw new Error('Bad action type')
    }
    return state
}