import axios from 'axios'
import Row from 'react-bootstrap/Row'
import { useEffect, useState, FC } from 'react'
import PizzaSizes from './PizzaSizes'
import Toppings from './Toppings'

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

    useEffect(() => {
        axios.get(`http://localhost:5000/${optionType}`)
            .then(response => {
                setItems(response.data)
            })
            .catch(error => {
                //Write it later
            })
    }, [optionType])
    
    const ItemComponent:any = optionType === 'pizza' ? PizzaSizes : Toppings

    const options = items.map((item: Items) => (
        <ItemComponent
            key={item.name}
            name={item.name}
            imagePath={item.imagePath}
        />
    ))

    // console.log('options', options)
    return (
        <Row>{options}</Row>
    )
}

export default Options