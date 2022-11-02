import React, { useContext, useEffect, useRef } from 'react'
import './CalculatorForm.scss'
import { TipContext } from '../../context/TipContext'

/**
 * Componentes del formulario
 * @returns {JSX.Element}
 * @todo stop custom input from resizing
 * @todo loop for every property in useEffect
 */
function CalculatorForm() {

  const location = window.location
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
    setErrors,
    reset,
    setReset
  } = useContext(TipContext)

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    })
  }

  const handleChange2 = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.defaultValue
    })
  }

  const handleBlur = (event) => {
    event.target.value === null || event.target.value === "" || event.target.value < 1
      ?
      setErrors({
        ...errors,
        [event.target.name]: "Can't be zero"
      })
      :
      setErrors({
        ...errors,
        [event.target.name]: null
      })
  }

  // acá se podria hacer un loop 
  useEffect(() => {
    if (data.bill !== null &&
      data.tipPercentage !== null &&
      data.peopleNumber !== null &&
      errors.bill === null &&
      errors.tipPercentage === null &&
      errors.peopleNumber === null) {

      if (data.tipPercentageCustom === null) {
        setTotalTip((((data.tipPercentage * data.bill) / 100).toFixed(2)) / data.peopleNumber )
        setBillPerPerson((data.bill / data.peopleNumber).toFixed(2))
      } else {
        setTotalTip((((data.tipPercentageCustom * data.bill) / 100).toFixed(2)) / data.peopleNumber )
        setBillPerPerson((data.bill / data.peopleNumber).toFixed(2))
      }
    }

    if (reset) {
      // form.current.reset()
      location.reload()
    }
  }, [data, errors])

  const form = useRef(null)

  return (
    <div className='calculatorForm'>
      <form ref={form}>
        <section className='bill_section'>
          <div className='label_section'>
            <label className='form_label'>Bill</label>
            {errors.bill && <div className="error-message">{errors.bill}</div>}
          </div>
          <div className='form_input'>
            <div className='form_input_icon_bill' />
            <input
              type="number"
              name="bill"
              className={errors.bill && 'error-message-input'}
              onChange={handleChange}
              onBlur={handleBlur}
              label="Bill"
              placeholder="0"
            />
          </div>
        </section>

        <section className='tip_section'>
          <div className='label_section'>
            <label className='form_label'>Select Tip %</label>
            <div className="error-message">{errors.tipPercentage}</div>
          </div>
          <div className='tip_section_options'>
            <label className={data.tipPercentage === '5' ? "tip_section_options_label_selected" : "tip_section_options_label"}>
              <input
                className="tip_section_options_input"
                name="tipPercentage"
                type="radio"
                onClick={handleChange2}
                value="5" />
              5%
            </label>
            <label className={data.tipPercentage === '10' ? "tip_section_options_label_selected" : "tip_section_options_label"}>
              <input
                className="tip_section_options_input"
                name="tipPercentage"
                type="radio"
                onClick={handleChange2}
                value="10" />
              10%
            </label>
            <label className={data.tipPercentage === '15' ? "tip_section_options_label_selected" : "tip_section_options_label"}>
              <input
                className="tip_section_options_input"
                name="tipPercentage"
                type="radio"
                onClick={handleChange2}
                value="15" />
              15%
            </label>
          </div>
          <div className='tip_section_options'>
            <label className={data.tipPercentage === '25' ? "tip_section_options_label_selected" : "tip_section_options_label"}>
              <input
                className="tip_section_options_input"
                name="tipPercentage"
                type="radio"
                onClick={handleChange2}
                value="25" />
              25%
            </label>
            <label className={data.tipPercentage === '50' ? "tip_section_options_label_selected" : "tip_section_options_label"}>
              <input
                className="tip_section_options_input"
                name="tipPercentage"
                type="radio"
                onClick={handleChange2}
                value="50" />
              50%
            </label>

            <input
              className="tip_section_options_input_custom"
              type="number"
              name="tipPercentage"
              onChange={handleChange}
              onBlur={handleBlur}
              value={data.tipPercentageCustom}
              placeholder="Custom"
            />

          </div>
        </section>

        <section className='people_section'>
          <div className='label_section'>
            <label className='form_label'>Number of People</label>
            {errors.peopleNumber && <div className="error-message">{errors.peopleNumber}</div>}
          </div>
          <div className='form_input'>
            <div className='form_input_icon_person' />
            <input
              type="number"
              name="peopleNumber"
              contenteditable="false"
              className={errors.peopleNumber && 'error-message-input'}
              onChange={handleChange}
              onBlur={handleBlur}
              value={data.peopleNumber}
              placeholder="0"
            />
          </div>
        </section>
      </form>
    </div >
  )
}

export default CalculatorForm
