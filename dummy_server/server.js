const express = require('express')
const cors = require('cors')
const fs = require('fs')

const app = express()

//to serve images
app.use(express.static('public'))

//Managing CORS
app.use(cors({
    origin: 'http://localhost:3001',
    credentials: true
}))

const mockData = fs.readFileSync('./mock-data.json', 'utf-8');
const formattedData = JSON.parse(mockData)

app.get('/pizza', (req, res) => {
    res.json(formattedData.size)
})

app.get('/toppings', (req, res) => {
    res.json(formattedData.toppings)
})


if(require.main === module){
    app.listen(5000, () => console.log('dummy server running on port 5000'))
}

module.exports = app