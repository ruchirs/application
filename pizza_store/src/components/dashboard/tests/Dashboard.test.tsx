import { render, screen, waitFor } from "@testing-library/react";
import { rest } from 'msw';
import Dashboard from '../Dashboard';
import { server } from '../../../mocks/server'

test('handles api errors for pizza sizes and toppings', async () => {
    server.resetHandlers(

        rest.get('http://localhost:5000/pizza', (req, res, ctx) => 
            res(ctx.status(500))
        ),

        rest.get('http://localhost:5000/toppings', (req, res, ctx) => 
            res(ctx.status(500))
        )  
    );

    render(<Dashboard />)

    await waitFor(async () => {
        const alerts = await screen.findAllByRole('alert')
        expect(alerts).toHaveLength(2)
    })
});