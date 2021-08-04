import Options from './Options'
import { useOrderDetails } from '../../context/OrderDetails'

const Dashboard = () => {
    const [orderDetails] = useOrderDetails()
    return (
        <div>
            <Options optionType="pizza" />
            <Options optionType="toppings" />
            <h2>Grand total: {orderDetails.total.grandTotal}</h2>
        </div>
    )
}

export default Dashboard