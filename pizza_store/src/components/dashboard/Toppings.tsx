import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import { FC } from 'react'

interface Topping {
    name: string,
    imagePath: string,
    updateItemCount: Function
}

const Toppings: FC<Topping> = ({ name, imagePath, updateItemCount}) => {

    return (
        <Col xs={12} sm={6} md={4} lg={3}>
            <img 
            src={`http://localhost:5000/${imagePath}`}
            alt={`${name} topping`}
            style={{ width: '75%', border: '1px solid black' }}
            />
        <Form.Group controlId={`${name}-topping-checkbox`}>
            <Form.Check 
                type="checkbox"
                onChange={(e) => {
                    updateItemCount(name, e.target.checked ? 1 : 0)
                }}
                label={name}
            />

        </Form.Group>
        </Col>
    )
}

export default Toppings