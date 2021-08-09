import { Button, Form, Row, Col, Alert } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import useForm from './useForm'
import '../../Styles/forms/Forms.css'
import { useOrderDetails } from '../../context/OrderDetails'



const Address = () => {
    
    const history = useHistory()
    const [, , updateUserInformation] = useOrderDetails()
    const { handleChange, handleSubmit, values, errors } = useForm()

    const updateUserDetails = () => {
        updateUserInformation(values)
        history.push('/Checkout')
    }

    return (
        <div>
            <div className="container">
                <div className="box justify-content-center align-items-center">
                    <div className="formDiv">
                        <h2 className="align-text">Enter your address</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="formFields">
                                <Form.Control
                                    type="text"
                                    id="userName"
                                    name="userName"
                                    placeholder="Name"
                                    value={values.userName}
                                    onChange={handleChange}
                                    isValid={errors.ename}
                                />
                            </Form.Group>
                            <Form.Group className="formFields">
                                <Form.Control
                                    type="number"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    placeholder="Contact"
                                    value={values.phoneNumber}
                                    onChange={handleChange}
                                    isValid={errors.enumber}
                                />
                            </Form.Group>
                            <Form.Group className="formFields">
                                <Form.Control
                                    type="text"
                                    id="houseNumber"
                                    name="houseNumber"
                                    placeholder="House Number"
                                    value={values.houseNumber}
                                    onChange={handleChange}
                                    isValid={errors.ehouseNumber}
                                />
                            </Form.Group>
                            <Form.Group className="formFields">
                                <Form.Control
                                    type="text"
                                    id="streetName"
                                    name="streetName"
                                    placeholder="Street Name"
                                    value={values.streetName}
                                    onChange={handleChange}
                                    isValid={errors.estreetName}
                                />
                            </Form.Group>
                            <Row>
                                <Col className="formFields">
                                    <Form.Group>
                                        <Form.Control
                                            type="number"
                                            id="postalCode"
                                            name="postalCode"
                                            placeholder="Postal Code"
                                            value={values.postalCode}
                                            onChange={handleChange}
                                            isValid={errors.epostalCode}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Control
                                            type="text"
                                            id="city"
                                            name="city"
                                            placeholder="City"
                                            value={values.city}
                                            onChange={handleChange}
                                            isValid={errors.ecity}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Button
                                id="checkout"
                                type="submit"
                            >
                                Checkout
                            </Button>
                        </Form>
                    </div>
                    <Alert
                        id="alertMessage"
                        data-testid="alertMessage"
                        variant={errors.variant}
                        show={errors.show}
                    >
                        {errors.message}
                        {errors.variant === 'success' ? updateUserDetails() : null}
                    </Alert>{" "}
                </div>
            </div>
        </div>
    )
}

export default Address