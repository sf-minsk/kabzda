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
        }, 1000);
    }, [])

    return <>
        Counter: {counter}<br/>
        Fake: {fake}
    </>
}


export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)

    console.log('Component Rendered')

    useEffect(() => {
        console.log('Effect occurred')

        return () => {
            console.log('reset effect')
        }

    }, [counter])

    return <>
        Counter: {counter}
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
    </>
}


export const KeysTrackerExample = () => {
    const [text, setText] = useState('')


    useEffect(() => {

        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText((state) => state + e.key)
        }

        window.addEventListener('keypress', handler)

        return () => {
            window.removeEventListener('keypress', handler)
        }

    }, [])

    return <>
        Text: {text}
    </>
}

