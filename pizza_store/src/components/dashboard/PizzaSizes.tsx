import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import { FC } from 'react'

interface PizzaSize {
    name: string,
    imagePath: string,
    updateItemCount: Function
}

const PizzaSizes: FC<PizzaSize> = ({ name, imagePath, updateItemCount }) => {

    return (
        <Col xs={12} md={3} sm={6} lg={3} style={{ textAlign: 'center' }}>
            <img src={`http://localhost:5000/${imagePath}`}
                alt={`${name} size`}
                style={{ width: "75%" }}
            />

            <Form.Group
                controlId={`${name}-check`}
                as={Row}
                style={{ marginTop: '10px' }}
            >
                {/* <Form.Label column xs={6} style={{textAlign: 'right'}}>
                    {name}
                </Form.Label> */}
                <Col xs="5" className="align-right">
                    {/* <Form.Control type="number" defaultValue={0} onChange={(e) => handleChange(e)}/> */}
                    <Form.Check
                        style={{ float: 'right' }}
                        type="radio"
                        name="sizes"
                        onChange={(e) => {
                            updateItemCount(name, e.target.value ? 1 : 0)
                        }}
                        label={name}
                    />
                </Col>
            </Form.Group>
        </Col>
    )
}

export default PizzaSizes