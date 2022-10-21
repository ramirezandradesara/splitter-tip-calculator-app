import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import './CalculatorForm.scss'

/**
 * Componentes del formulario
 * @returns {JSX.Element}
 * @todo input color red when there's an error
 */
function CalculatorForm() {

  return (
    <div className='calculatorForm'>
      <Formik
        initialValues={{
          bill: null,
          tipPercentage: null,
          numberOfPeople: null
        }}
        validate={values => {
          const errors = {};
          if (!values.bill) {
            errors.bill = "Can't be zero";
          }
          if (!values.tipPercentage) {
            errors.tipPercentage = "Can't be zero";
          }

          if (!values.numberOfPeople) {
            errors.numberOfPeople = "Can't be zero";
          }

          return errors;
        }}

        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert("Funciona xd")
          }, 400);
        }}



      >{({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <Form >
          <section className='bill_section'>
            <div className='label_section'>
              <label className='form_label'>Bill</label>
              <ErrorMessage
                name="bill"
                component={() => (
                  <div className="error-message">{errors.bill}</div>
                )}
              />
            </div>
            <div className='form_input'>
              <div className='form_input_icon_bill' />
              <Field
                type="number"
                name="bill"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.bill}
                label="Bill"
                placeholder="0"
              />
            </div>
          </section>

          <section className='tip_section'>
            <div className='label_section'>
              <label className='form_label'>Select Tip %</label>
              <ErrorMessage
                name="tipPercentage"
                component={() => (
                  <div className="error-message">{errors.tipPercentage}</div>
                )}
              />
            </div>
            <div className='tip_section_options'>
              <label className="tip_section_options_label">
                <Field
                  className="tip_section_options_input"
                  name="tipPercentage"
                  type="radio"
                  value="5" />
                5%
              </label>
              <label className="tip_section_options_label">
                <Field
                  className="tip_section_options_input"
                  name="tipPercentage"
                  type="radio"
                  value="10" />
                10%
              </label>
              <label className="tip_section_options_label">
                <Field
                  className="tip_section_options_input"
                  name="tipPercentage"
                  type="radio"
                  value="15" />
                15%
              </label>
            </div>
            <div className='tip_section_options'>
              <label className="tip_section_options_label">
                <Field
                  className="tip_section_options_input"
                  name="tipPercentage"
                  type="radio"
                  value="25" />
                25%
              </label>
              <label className="tip_section_options_label">
                <Field
                  className="tip_section_options_input"
                  name="tipPercentage"
                  type="radio"
                  value="50" />
                50%
              </label>

              <Field
                className="tip_section_options_input_custom"
                type="number"
                name="tipPercentage"
                // onChange={handleChange}
                // onBlur={handleBlur}
                value={values.tipPercentage}
                placeholder="Custom"
              />

            </div>
          </section>

          <section className='people_section'>
            <div className='label_section'>
              <label className='form_label'>Number of People</label>
              <ErrorMessage
                name="numberOfPeople"
                component={() => (
                  <div className="error-message">{errors.numberOfPeople}</div>
                )}
              />
            </div>
            <div className='form_input'>
              <div className='form_input_icon_person' />
              <Field
                type="number"
                name="numberOfPeople"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.numberOfPeople}
                placeholder="0"
              />
            </div>
          </section>
        </Form>
      )}
      </Formik>
    </div >
  )
}

export default CalculatorForm