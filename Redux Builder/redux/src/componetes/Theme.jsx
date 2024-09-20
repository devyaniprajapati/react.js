// Theme.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleTheme } from './action';

const Theme = () => {
    const theme = useSelector(state => state.theme.theme);
    const dispatch = useDispatch();

    return (
        <div>
            <button 
                disabled={theme === 'light'} 
                onClick={() => dispatch(handleTheme('light'))}>
                Switch to Light
            </button>
            <button 
                disabled={theme === 'dark'} 
                onClick={() => dispatch(handleTheme('dark'))}>
                Switch to Dark
            </button>
        </div>
    );
};

export default Theme;
