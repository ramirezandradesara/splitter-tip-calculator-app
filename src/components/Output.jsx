import React from 'react'
import './Output.scss'

function Output() {
  return (
    <div className='output'>
      <div>
        <div>
          <h4>Tip Amount</h4>
          <small>/ person</small>
        </div>
        <div>
          <h1>$0.00</h1>
        </div>
      </div>
      <div>
        <div>
          <h4>Total</h4>
          <small>/ person</small>
        </div>
        <div>
          <h1>$0.00</h1>
        </div>
      </div>

      <button>RESET</button>
    </div>
  )
}

export default Output