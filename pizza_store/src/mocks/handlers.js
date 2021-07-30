import { rest } from 'msw'

export const handlers = [
    rest.get('http://localhost:5000/pizza', (req, res, ctx) => {
        return res (
            ctx.json([
                {name: "small", imagePath: "/images/small.png"},
                {name: "medium", imagePath: "/images/medium.png"},
                {name: "large", imagePath: "/images/large.png"},
            ])
        )
    }),

    rest.get('http://localhost:5000/toppings', (req, res, ctx) => {
        return res (
            ctx.json([
                {name: "olives", imagePath: "/images/olives.jpeg"},
                {name: "mushroom", imagePath: "/images/mushrooms.jpeg"},
                {name: "pepperoni", imagePath: "/images/pepperoni.jpeg"},
                {name: "pepper", imagePath: "/images/pepper.jpeg"}
            ])
        )
    })
]