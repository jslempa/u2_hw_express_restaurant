const express = require('express')
const cors = require('cors')
const appetizerController = require('./controllers/AppetizerController.js')
const entreeController = require('./controllers/EntreeController.js')
const dessertController = require('./controllers/DessertController.js')
const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})

app.get('/', (req, res) => {
    res.send('working!')
})


app.get('/appetizers', appetizerController.getAppetizers)
app.get('/appetizers/:id', appetizerController.getAppetizer)

app.get('/entrees', entreeController.getEntrees)
app.get('/entrees/:id', entreeController.getEntree)

app.get('/desserts', dessertController.getDesserts)
app.get('/desserts', dessertController.getDessert)