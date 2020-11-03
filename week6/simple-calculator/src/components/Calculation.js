import React, {useState} from 'react'
import _ from 'lodash'

const Buttons = () => { 
    const [num1, setNumber1] = useState(null)
    const [num2, setNumber2] = useState(null)
    const [total, setTotal] = useState(null)

    const handleNumber1 = (e) => {
        setNumber1(+e.target.value)
    }
    
    const handleNumber2 = (e) => {
        setNumber2(+e.target.value)
    }

    const additon = () => {
        setNumber1(null)
        setNumber2(null)
        setTotal(_.add(num1, num2))
    }
    
    const subtraction = () => {
        setNumber1(null)
        setNumber2(null)
        setTotal(_.subtract(num1, num2))
    }
    
    const division = () => {
        setNumber1(null)
        setNumber2(null)
        setTotal(_.floor(_.divide(num1, num2), 2))
    }
    
    const multiplication = () => {
        setNumber1(null)
        setNumber2(null)
        setTotal(_.multiply(num1, num2))
    }
    return (
        <div>
            <div className='calculate'>
                <h3 id='inputHead'>Enter Desired Numbers Please</h3>
                <div className='inputBox'>
                    <input name='num1' value={num1} type='number' placeholder='X' onChange={handleNumber1} />
                    <input name='num2' value={num2} type='number' placeholder='Y' onChange={handleNumber2} />
                </div>
                <p> = </p>
                <div className='output'>
                    <output>Output: {total}</output>
                </div>
            </div>
            <div className='buttonBox'>
                <h3>Select Operation</h3>
                <div className='buttons'>
                    <button onClick={additon}>Addition</button>
                    <button onClick={subtraction}>Subtraction</button>
                    <button onClick={division}>Division</button>
                    <button onClick={multiplication}>Multiplication</button>
                </div>
            </div>
        </div>
    )
}
export default Buttons;