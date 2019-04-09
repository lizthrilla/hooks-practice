import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p> you clicked {count} times </p>
            <button onClick={() => setCount(count + 1)}>
                Click Me
            </button>
        </div>
    )
}

const HelloWorld = () => {
    const [name, setName] = useState('Liz');

    return (
        <div>
            <p> Hello {name}</p>
            <button onClick={() => setName('World')}>World</button>
        </div>
    )
}

export default { Counter, HelloWorld };