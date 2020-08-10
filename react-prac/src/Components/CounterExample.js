import React, { useState } from 'react'

export default function CounterExample() {
    // Be sure that your second function is a setter for the variable
    // Use state takes one argument which is the value we want to store
    const [count, setCount] = useState(0)

    // The first h1 is simply rendering the count, which we set to 0
    // by default in set state 
    
    // The second h1 uses an onclick, in which we pass in a function that
    // returns the setCount setter in which we increment by adding whatever
    // the count value is, plus one.

    // The third h1 uses the logic of the second, except this time 
    // we are subtracting instead of adding

    return (
        <div>
            <h1>
                {count}
            </h1>
            <h1 onClick={() => setCount(count + 1)} style={{color: 'green'}}>
                Plus
            </h1>
            <h1 onClick={() => setCount(count - 1) } style={{color: 'red'}}>
                Minus
            </h1>
        </div>
    )
}
