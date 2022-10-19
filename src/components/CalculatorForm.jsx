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
          const errors = {
            bill: 0,
          };
          if (!values.bill) {
            errors.bill = "Can't be zero";
          } else if (!/^[0-9]$/.test(values.bill)) {
            errors.bill = "Only numbers";
          }

          // if (!values.tipPercentage) {
          //   errors.tipPercentage = "Can't be zeasdro";
          // } else 
          // --m

          if (!values.numberOfPeople) {
            errors.numberOfPeople = "Can't be zero";
          } else if (!/^[0-9]$/.test(values.numberOfPeople)) {
            errors.numberOfPeople = "Only numbers";
          }

          console.log(errors);
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
                type="text"
                name="bill"
                className={errors.bill === undefined ? 'error-message-input' : ''}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.bill}
                label="Bill"
                placeholder="0"
              />
            </div>
          </section>

          <section className='tip_section'>
            <label className='form_label'>Select Tip %</label>
            <ErrorMessage
              name="tipPercentage"
              component={() => (
                <div className="error-message">{errors.tipPercentage}</div>
              )}
            />
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
                type="text"
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