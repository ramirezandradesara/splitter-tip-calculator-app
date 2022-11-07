import { createContext, useState } from "react";

export const TipContext = createContext()

export const TipProvider = (props) => {
  const [totalTip, setTotalTip] = useState(0)
  const [tipPerPerson, setTipPerPerson] = useState(0)
  const [billPerPerson, setBillPerPerson] = useState(0)
  const [reset, setReset] = useState(false)

  const [data, setData] = useState({
    bill: '',
    tipPercentage: '',
    tipPercentageCustom: '',
    peopleNumber: '',
  })

  const [errors, setErrors] = useState({
    bill: null,
    tipPercentage: null,
    peopleNumber: null,
  })


  function calculation() {

    if (data.bill !== '' &&
      data.tipPercentage !== '' &&
      data.peopleNumber !== '' &&
      errors.bill === null &&
      errors.tipPercentage === null &&
      errors.peopleNumber === null
      && reset === false) {

      let tipPercentage = 0;
      if (data.tipPercentageCustom === '') {
        tipPercentage = ((data.tipPercentage * data.bill) / 100).toFixed(2);
      } else {
        tipPercentage = ((data.tipPercentageCustom * data.bill) / 100).toFixed(2);
      }
      let tipPercentagePerPerson = tipPercentage / data.peopleNumber;
      setTotalTip(tipPercentagePerPerson)
      setBillPerPerson((data.bill / data.peopleNumber).toFixed(2))
    }
  }

  return (
    <TipContext.Provider
      value={{
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
        setReset,
        calculation
      }}
    >
      {props.children}
    </TipContext.Provider>
  )
}