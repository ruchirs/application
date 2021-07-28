import { rest } from 'msw'

export const handlers = [
    rest.get('http://localhost:5000/pizza', (req, res, ctx) => {
        return res (
            ctx.json([
                {name: "Small", imagePath: "/images/small.png"},
                {name: "Medium", imagePath: "/images/medium.png"},
            ])
        )
    })
]