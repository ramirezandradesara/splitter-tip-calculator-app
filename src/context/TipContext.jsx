import { createContext, useState } from "react";

export const TipContext = createContext()

export const TipProvider = (props) => {
    const [totalTip, setTotalTip] = useState(0)
    const [tipPerPerson, setTipPerPerson] = useState(0)
    const [billPerPerson, setBillPerPerson] = useState(0)
    const [reset, setReset] = useState(false)

    const [data, setData] = useState({
        bill: null,
        tipPercentage: null,
        tipPercentageCustom: null,
        peopleNumber: null
    })

    const [errors, setErrors] = useState({
        bill: null,
        tipPercentage: null,
        peopleNumber: null,
    })

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
                setReset
            }}
        >
            {props.children}
        </TipContext.Provider>
    )
}