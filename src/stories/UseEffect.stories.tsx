import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo',
}

export const SimpleExample = () => {
    const [counter, setCounter] = useState(1)

    console.log('SimpleExample')

    useEffect(() => {
        console.log('useEffect')
        document.title = counter.toString()



    })

    return <>
        Hello, {counter}
        <button onClick={() => setCounter(state => state + 1)}>+</button>

    </>
}

export const SetTimeOutExample = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    console.log('SetTimeOutExample')

    useEffect(() => {
        console.log('useEffect')
        setInterval(() => {
            setCounter((state) => state + 1)
        },1000);
    }, [])



    return <>
        Counter: {counter}<br/>
        Fake: {fake}
    </>
}
