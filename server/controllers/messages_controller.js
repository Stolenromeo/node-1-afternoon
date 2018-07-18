let messages = []
let id=0

module.exports= {
    create: (req, res)=>{
        const {text, time} = req.body;
        messages.push({id, text, time});
        id++;
        res.send(messages)
    },
    read: (req, res)=>{
        res.send(messages)
    } ,
    update: (req, res)=>{
        const messageIndex= messages.findIndex(message =>{
            return (message.id=== Number(req.params.id))
        })
        messages[messageIndex]={...messages[messageIndex], ...req.body};
        res.send(messages)
        
        },
    delete: (req, res)=>{
        const messageIndex= messages.findIndex(message =>{
            return (message.id=== Number(req.params.id))
        })
        messages.splice(messageIndex,1)
        res.send(messages)
    }
}