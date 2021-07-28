const express = require('express')

const app = express()

//to serve images
app.use(express.static('public'))

if(require.main === module){
    app.listen(5000, () => console.log('dummy server running on port 5000'))
}

module.exports = app