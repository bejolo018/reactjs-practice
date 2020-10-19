const loggedReducer = (state = false, action) => {
    switch(action.type){
        case 'LOGGED':
            return true
        case 'UNLOGGED':
            return false
        default: 
            return state
    }
}

export default loggedReducer