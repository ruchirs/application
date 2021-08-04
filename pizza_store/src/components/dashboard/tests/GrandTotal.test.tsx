import { screen, render } from '../../../test-utils/testing-library-utils'
import userEvent from '@testing-library/user-event'
import Options from '../Options'
import { OrderDetailsProvider } from '../../../context/OrderDetails'
import Dashboard from '../Dashboard'

test('verify pizza subtotal when page loads' , async () => {
    //render the pizza options
    render(<Options optionType="pizza" />)

    //start subtotal with 0.00
    const pizzaSubtotal = screen.getByText('Pizza total: $', { exact : false })
    expect(pizzaSubtotal).toHaveTextContent('0.00')
    
})

test('update toppings subtotal when toppings change', async () => {
    // render parent component
    render(<Options optionType="toppings" />);
  
    // make sure total starts out at $0.00
    const toppingsTotal = screen.getByText('Toppings total: $', { exact: false });
    expect(toppingsTotal).toHaveTextContent('0.00');
  
    // add mushroom and check subtotal
    const mushroomCheckbox = await screen.findByRole('checkbox', {
      name: 'mushroom',
    });
    userEvent.click(mushroomCheckbox);
    expect(toppingsTotal).toHaveTextContent('2.00');
  
    // add olives and check subtotal
    const olivesCheckbox = screen.getByRole('checkbox', { name: 'olives' });
    userEvent.click(olivesCheckbox);
    expect(toppingsTotal).toHaveTextContent('5.00');
  
    // remove olives and check subtotal
    userEvent.click(olivesCheckbox);
    expect(toppingsTotal).toHaveTextContent('2.00');
  });

  describe('grand total', () => {
    test('grand total updates properly if scoop is added first', async () => {
      // Test that the total starts out at $0.00
      render(<Dashboard />);
      const grandTotal = screen.getByRole('heading', { name: /Grand total: \$/ });
      expect(grandTotal).toHaveTextContent('0.00');
  
      // update vanilla scoops to 2 and check grand total
      const smallPizza = await screen.findByRole('radio', {
        name: 'small',
      });
      userEvent.click(smallPizza);
      expect(grandTotal).toHaveTextContent('15.00');
  
      // add mushroom and check grand total
      const mushroomCheckbox = await screen.findByRole('checkbox', {
        name: 'mushroom',
      });
      userEvent.click(mushroomCheckbox);
      expect(grandTotal).toHaveTextContent('17.00');
    });
  
    test('grand total updates properly if topping is added first', async () => {
      render(<Dashboard />);
  
      // add cherries and check grand total
      const mushroomCheckbox = await screen.findByRole('checkbox', {
        name: 'mushroom',
      });
      userEvent.click(mushroomCheckbox);
      const grandTotal = screen.getByRole('heading', { name: /Grand total: \$/ });
      expect(grandTotal).toHaveTextContent('2.00');
  
      // update vanilla scoops to 2 and check grand total
      const smallPizzaInput = await screen.findByRole('radio', {
        name: 'small',
      });
      userEvent.click(smallPizzaInput);
      expect(grandTotal).toHaveTextContent('17.00');
    });
  });