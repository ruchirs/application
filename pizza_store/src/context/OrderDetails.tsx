import { createContext, useContext, useState, useMemo, useEffect } from 'react'
import pricePerItem from '../constants'
const defaultError = "OrderDetails context must be used within a OrderDetails provider."

interface AppContext {
    total: Object,
    optionCounts: {
        pizza: Object,
        toppings: Object
    }
}

interface userType {
    userName: string,
    phoneNumber: string,
    houseNumber: string,
    streetName: string,
    postalCode: string,
    city: string
}

const OrderDetails = createContext<AppContext | any>(null)

function formatCurrency(amount: number){
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
        }
    ).format(amount)
}

export function useOrderDetails() {
    const context = useContext(OrderDetails)

    if (!context) {
        throw new Error(defaultError)
    }

    return context
}

export function calculateSubTotal(optionType: keyof typeof pricePerItem, optionCounts:any){
    let optionCount = 0;
    // console.log('optionCounts', optionCounts)
    for(const [key, count] of optionCounts[optionType]){
        let formattedKey = key.toLowerCase()
        optionCount += count * pricePerItem[formattedKey as keyof typeof pricePerItem]
    }
    return optionCount

}

export function OrderDetailsProvider(props: any) {
    const [optionCounts, setOptionCounts] = useState({
        pizza: new Map(),
        toppings: new Map()
    })

    const [userData, setUserData] = useState({
        userName: '',
        phoneNumber: "",
        houseNumber: '',
        streetName: '',
        postalCode: "",
        city: ''
    })

    const initialCurrency = formatCurrency(0)
    const [total, setTotal] = useState({
        pizza: initialCurrency,
        toppings: initialCurrency,
        grandTotal: initialCurrency
    })

    useEffect(() => {
        console.log('updated user data', userData)
    }, [userData])

    useEffect(() => {
        const pizzaSubTotal = calculateSubTotal("pizza", optionCounts)
        const toppingsSubTotal = calculateSubTotal("toppings", optionCounts)
        const grandTotal = pizzaSubTotal + toppingsSubTotal
        setTotal({
            pizza: formatCurrency(pizzaSubTotal),
            toppings: formatCurrency(toppingsSubTotal),
            grandTotal: formatCurrency(grandTotal)
        })
    }, [optionCounts])

    const value = useMemo(() => {

        function updateItemCount(itemName: string, newItemCount: string, optionType: keyof typeof optionCounts) {
            if(optionType === 'pizza') {
                const newOptionsCounts = { ...optionCounts } 
                console.log('newOptionsCounts', newOptionsCounts[optionType].clear())   
            }
            const newOptionsCount = { ...optionCounts }
            const optionCountMap = optionCounts[optionType]
            optionCountMap.set(itemName, parseInt(newItemCount))
            setOptionCounts(newOptionsCount)
        }

        function updateUserInformation(values: userType) {
            const updatedUserData = {...values}
            setUserData(updatedUserData)
        }

        return [{ ...optionCounts, total, userData}, updateItemCount, updateUserInformation]
    }, [optionCounts, total, userData])
    return <OrderDetails.Provider value={value} {...props} />
}