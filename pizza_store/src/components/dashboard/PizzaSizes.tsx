import Col from 'react-bootstrap/Col'
import { FC } from 'react'

interface PizzaSize {
    name: string,
    imagePath: string
}

const PizzaSizes: FC<PizzaSize> = ({ name, imagePath }) => {
    console.log('name', name)
    console.log('imagePath', imagePath)
    return (
        <Col xs={12} md={4} sm={6} lg={3} style={{ textAlign: 'center' }}>
            <img src={`http://localhost:5000/${imagePath}`}
                alt={`${name} size`}
                style={{ width: "75%" }} />
        </Col>
    )
}

export default PizzaSizes