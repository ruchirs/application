import CreditCard from '../card-validator/CreditForm'
import { useOrderDetails } from '../../context/OrderDetails'

interface Order {
    pizza: string[]
    toppings: string[]
}

interface Payload {
    Order: Order[],
    total: {},
    userInformation: {}
}

const Checkout = (props: any) => {
    const [orderDetails] = useOrderDetails()
    
    const createPayload = () => {
        let payload: Payload = {
            Order:[
                {
                    pizza: Object.keys(Object.fromEntries(orderDetails.pizza)),
                    toppings: Object.keys(Object.fromEntries(orderDetails.toppings))
                }
            ],
            total: orderDetails.total,
            userInformation: orderDetails.userData
        }
        console.log('payload', payload)
    }
    return (
        <div>
            <h3 className="align-text">Total Price: {orderDetails.total.grandTotal}</h3>
            <CreditCard onSubmit={createPayload}/>
        </div>
    )
}

export default Checkout