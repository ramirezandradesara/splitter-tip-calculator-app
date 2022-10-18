import React from 'react'
import './Calculator.scss'
import CalculatorForm from './CalculatorForm'
import Output from './Output'

function Calculator() {

  return (
    <div className='calculator'>
      <CalculatorForm />
      <Output />
    </div>
  )
};

export default Calculator