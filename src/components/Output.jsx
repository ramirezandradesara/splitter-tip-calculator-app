import React from 'react'
import './Output.scss'

function Output() {
  return (
    <div className='output'>
      <div className='top_section'>
        <div className='output_section'>
          <div className='output_section_title'>
            <h4>Tip Amount</h4>
            <small>/ person</small>
          </div>
          <h1>$0.00</h1>
        </div>

        <div className='output_section'>
          <div className='output_section_title'>
            <h4>Total</h4>
            <small>/ person</small>
          </div>
          <h1>$0.00</h1>
        </div>
      </div>

      <button>RESET</button>
    </div>
  )
}

export default Output