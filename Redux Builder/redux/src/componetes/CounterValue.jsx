// CounterValue.jsx
import React from 'react';
import { useSelector } from 'react-redux';

const CounterValue = () => {
    const counter = useSelector(state => state.counter.counter);

    return (
        <div>
            <h1>Counter Value: {counter}</h1>
        </div>
    );
};

export default CounterValue;
