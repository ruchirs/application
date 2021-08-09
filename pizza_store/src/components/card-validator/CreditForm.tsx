import { Button, Form, Alert, Row, Col } from 'react-bootstrap'
import Cards from 'react-credit-cards'
import useForm from './useForm'
import 'react-credit-cards/es/styles-compiled.css'
import '../../Styles/forms/Forms.css'

const CreditForm = (props: any) => {
    console.log('props', props)
    const { handleChange, handleFocus, handleSubmit, values, errors } = useForm()
    return (
        <div>
            <div className="container">
                <div className="box justify-content-center align-items-center">
                    <div className="formDiv">
                        <div className="creditCard">
                            <Cards
                                cvc={values.cardSecurityCode}
                                expiry={values.cardExpiration}
                                focused={values.focus as any}
                                name={values.cardName}
                                number={values.cardNumber}
                            />
                        </div>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="formFields">
                                <Form.Control
                                    type="text"
                                    id="cardName"
                                    data-testid="cardName"
                                    name="cardName"
                                    placeholder="Cardholder Name"
                                    value={values.cardName}
                                    onChange={handleChange}
                                    onFocus={handleFocus}
                                    isValid={errors.cname}
                                />
                            </Form.Group>
                            <Form.Group className="formFields">
                                <Form.Control
                                    type="number"
                                    id="cardNumber"
                                    data-testid="cardNumber"
                                    name="cardNumber"
                                    placeholder="Card Number"
                                    value={values.cardNumber}
                                    onChange={handleChange}
                                    onFocus={handleFocus}
                                    isValid={errors.cnumber}
                                />
                            </Form.Group>
                            <Row>
                                <Col className="formFields">
                                    <Form.Group>
                                        <Form.Control
                                            type="number"
                                            id="cardSecurityCode"
                                            data-testid="cardSecurityCode"
                                            name="cardSecurityCode"
                                            placeholder="Security Code"
                                            value={values.cardSecurityCode}
                                            onChange={handleChange}
                                            onFocus={handleFocus}
                                            isValid={errors.ccvv}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Control
                                            type="text"
                                            id="cardExpiration"
                                            data-testid="cardExpiration"
                                            name="cardExpiration"
                                            placeholder="Expiration Date"
                                            value={values.cardExpiration}
                                            onChange={handleChange}
                                            onFocus={handleFocus}
                                            isValid={errors.cexp}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Button
                                // size={"block"}
                                data-testid="validateButton"
                                id="validateButton"
                                type="submit"
                            >
                                Validate
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
                        {errors.variant === 'success' ? props.onSubmit() : null}
                    </Alert>{" "}
                </div>
            </div>
        </div>
    )
}

export default CreditForm