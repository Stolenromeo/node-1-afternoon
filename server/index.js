const express = require('express')
const bodyParser = require('body-parser')

const messagesCtrl= require('./controllers/messages_controller')

const app = express()

const port= 3000

app.use( bodyParser.json())
app.use(express.static('../../public/build'))

const messagesBaseUrl = "/api/messages";
app.get(messagesBaseUrl, messagesCtrl.read)
app.post(messagesBaseUrl, messagesCtrl.create)
app.put(`${messagesBaseUrl}/:id`, messagesCtrl.update)
app.delete(`${messagesBaseUrl}/:id`, messagesCtrl.delete)

app.listen(port, () =>{
    console.log(`Server listening on port: ${port}`);
})