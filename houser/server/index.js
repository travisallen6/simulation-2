require('dotenv').config()
const   express = require('express'),
        bodyParser = require('body-parser'),
        massive = require('massive'),
        ctrl = require('./controller')


const app=express();
const port=3010

app.use(bodyParser.json())

massive(process.env.CONNECTION_STRING).then( dbInstance => {
        app.listen(port, ()=>console.log(`hard to port ${port}`))
        app.set('db', dbInstance)
        console.log('Database Connected')
}).catch(err => console.log(err))


app.get('/api/', ctrl.getProperties)

app.post('/api/', ctrl.postProperty)

app.delete('/api/:id', ctrl.deleteProperty)




