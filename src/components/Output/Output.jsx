import React, { useContext } from 'react'
import { TipContext } from '../context/TipContext'
import './Output.scss'

function Output() {

  const {
    totalTip,
    setTotalTip,
    tipPerPerson,
    setTipPerPerson,
    billPerPerson,
    setBillPerPerson,
    data,
    setData,
    errors,
    setErrors
  } = useContext(TipContext)

  const reset = () => {
    setTotalTip(0)
    setTipPerPerson(0)
    setBillPerPerson(0)
    setData({
      bill: null,
      tipPercentage: null,
      peopleNumber: null
    })
    setErrors({
      bill: null,
      tipPercentage: null,
      peopleNumber: null
    })
  }

  return (
    <div className='output'>
      <div className='top_section'>

        <div className='output_section'>
          <div className='output_section_title'>
            <h4>Tip Amount</h4>
            <small>/ person</small>
          </div>
          <h1>${totalTip === 0 ? `${totalTip}.00` : totalTip}</h1>
        </div>
        <div className='output_section'>
          <div className='output_section_title'>
            <h4>Total</h4>
            <small>/ person</small>
          </div>
          <h1>${billPerPerson === 0 ? `${billPerPerson}.00` : billPerPerson}</h1>
        </div>
      </div>
      <button onClick={() => reset()}>RESET</button>
    </div>
  )
}

export default Output