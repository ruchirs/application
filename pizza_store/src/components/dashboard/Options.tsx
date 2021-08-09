import axios from 'axios'
import Row from 'react-bootstrap/Row'
import { useEffect, useState, FC } from 'react'
import PizzaSizes from './PizzaSizes'
import Toppings from './Toppings'
import Alert from '../common/Alert'
import { useOrderDetails } from '../../context/OrderDetails'

interface Option {
    optionType: string
}

interface Items {
    name: string,
    key: string,
    imagePath: string
}

const Options: FC<Option> = ({ optionType }) => {
    //useState to store a local copy of data
    const [items, setItems] = useState([])
    const [error, setError] = useState(false)
    const [orderDetails, updateItemCount] = useOrderDetails()

    useEffect(() => {
        let cancel = false;
        axios.get(`http://localhost:5000/${optionType}`)
            .then(response => {
                if(cancel) return;
                setItems(response.data)
            })
            .catch(error => {
                setError(true)
            })
            //Set toggle to stop side effects when an element is removed from the DOM
            return() => {
                cancel = true
            }
    }, [optionType])

    if(error){
        return <Alert />
    }
    
    const ItemComponent:any = optionType === 'pizza' ? PizzaSizes : Toppings
    const title = optionType[0].toUpperCase() + optionType.slice(1).toLowerCase()

    const options = items.map((item: Items) => (
        <ItemComponent
            key={item.name}
            name={item.name}
            imagePath={item.imagePath}
            updateItemCount={(itemName:string, newItemCount: string) => updateItemCount(itemName, newItemCount, optionType)}
        />
    ))

    // console.log('options', options)
    return (
        <>
        <h2 className="mt-4">{title}</h2>
        <p>{title} total: {orderDetails.total[optionType]}</p>
        <Row>{options}</Row>
        </>
    )
}

export default Options