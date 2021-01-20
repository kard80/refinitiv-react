import React, { useEffect, useState } from 'react'
import '../style/questionOne.css'
export default function QuestionOne() {
    const [inputOne, setInputOne] = useState(0)
    const [inputTwo, setInputTwo] = useState(1)
    const [output, setOutput] = useState(false)
    const inputModifier = value => {
        if (value % 1 !== 0) {
            value = Math.round(value)
        }
        if (value < 0) {
            value = 1
        }
        setInputOne(value)
    }

    const calculatePrimeNumber = () => {
        if (inputOne === "0" || inputOne === "1") {
            console.log(inputOne)
            return setOutput(false)
            
        }
        for (let i = 2; i < inputOne; i++) {
            if (inputOne % i == 0) {
                return setOutput(false)

            }
        }
        setOutput(true)

    }

    const calculateFibonacci = () => {
        let a = 0
        let b = 1
        if (inputOne === a & b) {
            return setOutput(true)

        }
        let c = a + b
        while( c <= inputOne) {
            if (c == inputOne) return setOutput(true);
            a = b
            b = c
            c = a + b
        }
        return setOutput(false)
    }

    useEffect(() => {
        if (inputTwo == 1) {
            calculatePrimeNumber()
        } else if (inputTwo == 2) {
            calculateFibonacci()
        }
    }, [inputOne, inputTwo])

    return (
        <div className="questionOne">
            <div className="one">
                <input type="number" value={inputOne} onChange={e => inputModifier(e.target.value)} />
            </div>
            <div className="two">
                <select
                    value={inputTwo}
                    onChange={e => setInputTwo(parseInt(e.target.value))} >
                    <option value={1}>isPrime</option>
                    <option value={2}>isFibonacci</option>
                </select>
            </div>
            <div className="three">{output.toString()}</div>
        </div>
    )
}
