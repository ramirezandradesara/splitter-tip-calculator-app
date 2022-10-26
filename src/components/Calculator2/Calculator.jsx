import React from 'react'
import './Calculator.scss'
import CalculatorForm from '../CalculatorForm/CalculatorForm'
import Output from '../Output/Output'

function Calculator() {

  return (
    <div className='calculator'>
      <CalculatorForm />
      <Output />
    </div>
  )
};

export default Calculator