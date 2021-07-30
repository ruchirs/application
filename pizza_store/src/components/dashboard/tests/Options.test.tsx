import { screen, render } from '@testing-library/react'
import Options from '../Options'

test('Check if all options render images', async () => {

    render(<Options optionType="pizza" />);

    const pizzaSizes = await screen.findAllByRole('img', { name: /size$/i });
    expect(pizzaSizes).toHaveLength(3);
    
    const altText = pizzaSizes.map(element => element.alt)
    expect(altText).toEqual(['small size', 'medium size', 'large size'])
})

test('check if all toppings render images', async () => {
    render(<Options optionType="toppings" />)

    const toppings = await screen.findAllByRole('img', { name: /topping$/i });
    expect(toppings).toHaveLength(4)

    const altText = toppings.map(element => element.alt)
    expect(altText).toEqual([
        'olives topping',
        'mushroom topping',
        'pepperoni topping',
        'pepper topping'
    ])
})