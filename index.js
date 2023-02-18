const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');

app.use(cors())
app.use(express.json())


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nzh9xhl.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
    try{

        const fresherJobCollection = client.db('dreamJob').collection('fresherJob')
        const expriencedJobCollection = client.db('dreamJob').collection('expriencedJob')
        const bestCompanyCollection = client.db('dreamJob').collection('bestCompany')
        app.get('/fresherjob', async(req, res)=>{
            const query = {}
            const result = await fresherJobCollection.find(query).toArray()
            res.send(result)
        })
        app.get('/expriencedjob', async(req, res)=>{
            const query = {}
            const result = await expriencedJobCollection.find(query).toArray()
            res.send(result)
        })
        app.get('/bestcompany', async(req, res)=>{
            const query = {}
            const result = await bestCompanyCollection.find(query).toArray()
            res.send(result)
        })
    
    }
    finally{

    }
}
run().catch(console.log)


app.get('/', async(req, res)=>{
    res.send(`dream job server is running `)
})
app.get('/fresherjob', async(req, res)=>{
    res.send(`dream job server fresher job is running `)
})

app.listen(port, (req, res)=> {
    console.log(`bike server is running on ${port}`)
})