const numberReducer = (state,action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + action.val
        case 'DECREMENT':
            return state - action.val
        default:
            return 0
    }
}

export default numberReducer