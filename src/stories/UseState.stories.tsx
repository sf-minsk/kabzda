import React, {useState} from "react";

export default {
    title: 'useState demo',
}

function generationData() {
    return 1
}

export const Example1 = () => {
    const [counter, setCounter] = useState(generationData)

    return <>
        <button onClick={() => setCounter(state => state + 1)}>+</button>
        {counter}
    </>
}
