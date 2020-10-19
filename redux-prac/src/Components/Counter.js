import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../actions/index'

const Counter = () => {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch() 
    return (
        <div>
            <h1>Counter</h1>
            <p>{counter}</p>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    )
}

export default Counter