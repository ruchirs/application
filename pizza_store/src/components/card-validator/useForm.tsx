import { useState } from 'react'
import verifyInfo from './VerifyInfo'

const useForm = () => {
    const [values, setValues] = useState({
        cardName: '',
        cardNumber: '',
        cardExpiration: '',
        cardSecurityCode: '',
        focus: ''
    })

    const [errors, setErrors] = useState({
        show: false,
        variant: "",
        message: "",
        cname: false,
        cnumber: false,
        cexp: false,
        ccvv: false
    })

    const handleFocus = (e: any) => {
        setValues({
            ...values,
            focus: (e.target.name === 'cardSecurityCode') ? 'cvc' : e.target.name
        });
    }

    const handleChange = (e: any) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        setErrors(verifyInfo(values))
    };

    return { handleChange, handleFocus, handleSubmit, values, errors };
};

export default useForm;