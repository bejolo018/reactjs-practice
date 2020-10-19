import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { logged, unLogged } from '../actions/index'

const Login = () => {
    const isLogged = useSelector(state => state.isLogged)
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => dispatch(logged())}>Login</button>
            <button onClick={() => dispatch(unLogged())}>Logout</button>
            {isLogged ? <h3>Valuable info</h3> : ''}
        </div>
    )

}



export default Login