// action.js

// Action Types
export const ADD = "ADD";
export const REDUCE = "REDUCE";
export const TOGGLE_THEME = "TOGGLE_THEME";

// Action Creators
export const handleAdd = (payload) => ({
    type: ADD,
    payload
});

export const handleReduce = (payload) => ({
    type: REDUCE,
    payload
});

export const handleTheme = (payload) => ({
    type: TOGGLE_THEME,
    payload
});
