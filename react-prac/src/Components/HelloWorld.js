import React from 'react';

// We could use a functional component like this

// function HelloWorld(props){
//     return(
//         <h1>Hello {props.name}</h1>
//     )
// }

// Or a class component like this
class HelloWorld extends React.Component{
    render(){
        return(
            <h1> Hello {this.props.name}</h1>
        )
    }
}

// The primary difference between using the two is that a class component
// will have to use the this keyword in order to access props

export default HelloWorld