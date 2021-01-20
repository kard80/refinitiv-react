import { useEffect, useState } from 'react'
import axios from 'axios'
import '../style/questionTwo.css'

export default function QuestionTwo() {
    const [data, setData] = useState([])
    const [display, setDisplay] = useState([])

    const filterTable = value => {
        setDisplay(data)
        let query = data.filter(item => {
            let regex = new RegExp(value,"i")
            let check = item.match(regex)
            return check !== null
        })
        setDisplay(query)
    }

    const fetchData = async () => {
        const payload = await axios.get("https://api.publicapis.org/categories")
        const result = await payload.data
        setData(result)
        setDisplay(result)
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div className="questionTwo">
            <input onChange={e => filterTable(e.target.value)} />
            <table>
                {display ?
                    display.map((item, index) => (
                        <tr>{item}</tr>
                    ))
                    : null
                }
            </table>
        </div>
    )
}
