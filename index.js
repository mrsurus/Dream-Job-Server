const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

app.get('/', async(req, res)=>{
    res.send(`dream job server is running `)
})
app.get('/fresherjob', async(req, res)=>{
    res.send(`dream job server fresher job is running `)
})

app.listen(port, (req, res)=> {
    console.log(`bike server is running on ${port}`)
})