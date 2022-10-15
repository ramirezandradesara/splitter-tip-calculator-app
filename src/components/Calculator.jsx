import React from 'react'
import './Calculator.scss'
import Operation from './Operation'
import Output from './Output'

function Calculator() {

  return (
    <div className='calculator'>
      <Operation />
      <Output />
    </div>
  )
};

export default Calculator