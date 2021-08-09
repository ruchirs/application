import Options from './Options'
import { useOrderDetails } from '../../context/OrderDetails'
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router'

const Dashboard = () => {
    const history = useHistory()
    const [orderDetails] = useOrderDetails()
    return (
        <div>
            {
                    <>
                        <Options optionType="pizza" />
                        <Options optionType="toppings" />
                        <h2 className="mt-4">Grand total: {orderDetails.total.grandTotal}</h2>
                        <Button className="mb-4" onClick={() => history.push('/Address')}>Next</Button>
                    </>
            }

        </div>
    )
}

export default Dashboard