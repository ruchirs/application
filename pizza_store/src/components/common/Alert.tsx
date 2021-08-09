import Alert from 'react-bootstrap/Alert'
import { FC } from 'react'

interface AlertFormat {
    message?: string,
    variant?: string
}

const defaultAlert = "An unexpected error occured. Please try again later."
const defaultVariant = "danger"

const Alerts: FC<AlertFormat> = ({ message, variant }) => {
    const alertMessage = message || defaultAlert
    const currentVariant = variant || defaultVariant

    return (
        <Alert variant={currentVariant} style={{ backgroundColor: 'red' }}>
            {alertMessage}
        </Alert>
    )
}

export default Alerts