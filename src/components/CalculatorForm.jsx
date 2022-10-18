import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import './CalculatorForm.scss'

function CalculatorForm() {
  return (
    <div className='calculatorForm'>
      <Formik
        initialValues={{
          bill: 0,
          tipPercentage: 0,
          numberOfPeople: 0
        }}
        validate={values => {
          const errors = {};
          if (!values.bill) {
            errors.email = 'Required';
          } else if (
            /^[0-9]$/.test(values.bill)
          ) {
            errors.bill = 'Invalid email address';
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
            <label className='form_label'>Bill</label>
            <div className='form_input'>
              <div className='form_input_icon_bill' />
              <Field
                type="bill"
                name="bill"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.bill}
                label="Bill"
                placeholder="0"
              />
              <ErrorMessage
                name="bill"
                component={() => (
                  <div className="error-message">{errors.bill}</div>
                )}
              />
            </div>
          </section>

          <section className='tip_section'>
            <label className='form_label'>Select Tip %</label>
            <img src="C:\Users\sarar\OneDrive\Documentos\SARAA\Mis primeros diseños\tip-calculator-app\src\images\icon-dollar.svg" alt="" />
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
                type="text"
                name="tipPercentage"
                // onChange={handleChange}
                // onBlur={handleBlur}
                value={values.tipPercentage}
                placeholder="Custom"
              />

            </div>
          </section>

          <section className='people_section'>
            <label className='form_label'>Number of People</label>
            <div className='form_input'>
              <div className='form_input_icon_person' />
              <ErrorMessage
                name="numberOfPeople"
                component={() => (
                  <div className="error-message">{errors.numberOfPeople}</div>
                )}
              />
              <Field
                type="numberOfPeople"
                name="numberOfPeople"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.bill}
                placeholder="0"
              />
            </div>
          </section>
        </Form>
      )}
      </Formik>
    </div>
  )
}

export default CalculatorForm