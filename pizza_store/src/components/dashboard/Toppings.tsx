import Col from 'react-bootstrap/Col'
import { useEffect, useState, FC } from 'react'
import axios from 'axios'

interface Topping {
    name: string,
    imagePath: string
}

const Toppings: FC<Topping> = ({ name, imagePath}) => {

    return (
        <Col xs={12} sm={6} md={4} lg={3}>
            <img 
            src={`http://localhost:5000/${imagePath}`}
            alt={`${name} topping`}
            style={{ width: '75%' }}
            />
        </Col>
    )
}

export default Toppings