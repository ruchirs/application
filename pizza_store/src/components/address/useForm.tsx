import { useState } from 'react'
import validateInfo from './ValidateInfo'

const useForm = () => {
    const[values, setValues] = useState({
        userName: '',
        phoneNumber: '',
        houseNumber: '',
        streetName: '',
        postalCode: '',
        city: ''
    })


    const [errors, setErrors] = useState({
        show: false,
        variant: "",
        message: "",
        ename: false,
        enumber: false,
        ehouseNumber: false,
        estreetName: false,
        epostalCode: false,
        ecity: false
    })

    const handleChange = (e: any) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        setErrors(validateInfo(values))
    };

    return { handleChange, handleSubmit, values, errors };


}

export default useForm

