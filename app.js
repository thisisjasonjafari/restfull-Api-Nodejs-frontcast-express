const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

const productRoutes = require('./api/routes/products')
const orderRoutes = require('./api/routes/orders')
const userRoutes = require('./api/routes/user')

const mongooseconnectUri =require('./Databaseacsees/databaseAccess')

mongoose.connect(mongooseconnectUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use('/uploads', express.static('uploads'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', '*')
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', '*')
        return res.status(200).json()
    }
    next()
})

app.use('/products', productRoutes)
app.use('/orders', orderRoutes)
app.use('/user', userRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        msg: 'Not Found'
    })
})

app.listen(3000)