// counterReducer.js

import { ADD, REDUCE } from './action';

const initialState = {
    counter: 10
};

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                counter: state.counter + action.payload
            };
        case REDUCE:
            return {
                ...state,
                counter: state.counter - action.payload
            };
        default:
            return state;
    }
};
