import * as types from '../constants/counterConstants';

export const initialState = {
    count: 0,
}

export function reducer(state = initialState, action) {
    switch(action.type) {
        case types.INCREMENT:
            return {
                count: state.count + 1,
            };
        case types.DECREMENT:
            return {
                count: state.count - 1,
            };
        default:
            return state;
    }
}

export default reducer;