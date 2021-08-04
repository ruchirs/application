import Container from 'react-bootstrap/Container';
import Dashboard from './pages/Dashboard'
import { OrderDetailsProvider } from './context/OrderDetails'
import './Styles/Base.css'

function App() {
  return (
    <Container>
      <OrderDetailsProvider>
        <Dashboard />
      </OrderDetailsProvider>
    </Container>
  );
}

export default App;
