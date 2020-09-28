import React from 'react'
import auth from './auth'
import { withRouter } from 'react-router-dom'

const AppLayout = (props) => {
    return (
        <div>
            AppLayout
            <button 
            onClick={() => {
                auth.logout(() => {
                    props.history.push('/')
                })
            }}>logout
            </button>
        </div>
    )
}

export default AppLayout