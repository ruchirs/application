import Container from 'react-bootstrap/Container';
import Dashboard from './pages/Dashboard'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './Styles/base/Base.css'
import { OrderDetailsProvider } from './context/OrderDetails'
import Checkout from './components/checkout/Checkout';
import Address from './components/address/Address'

function App() {
  return (
    <Router>
      <Container>
        <OrderDetailsProvider>
          <Switch>
            <Route path="/Address">
              <Address />
            </Route>
            <Route path="/Checkout">
              <Checkout />
            </Route>
            <Route path="/">
              <Dashboard />
            </Route>
          </Switch>
        </OrderDetailsProvider>
      </Container>
    </Router>
  );
}

export default App;
