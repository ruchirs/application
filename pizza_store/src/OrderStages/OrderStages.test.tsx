import { findByRole, render, screen } from '@testing-library/react'
import App from '../App'
import userEvent from '@testing-library/user-event'

test("Order stages for a user workflow", async () => {

    render(<App />)

    //Check Pizza and toppings
    const pizzaInput = await screen.findByRole('radio', { name: 'small' })
    userEvent.click(pizzaInput)

    const mushroomInput = await screen.findByRole('checkbox', { name: 'mushroom' })
    userEvent.click(mushroomInput)

    const orderSummaryButton = screen.getByRole('button', { name: /next/i})
    userEvent.click(orderSummaryButton)

    //Once on the summary button check the page
    const pageHeading = screen.getByText(/enter your address/i, { exact: false })
    expect(pageHeading).toBeInTheDocument()

})