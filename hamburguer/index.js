
const express = require('express')
const uuid = require('uuid')
const port = 3000
const app = express()
app.use(express.json())


const orders = []

const checkUserId = ( request, response, next) =>{
    const { id } = request.params

    const index = orders.findIndex( user => user.id === id)

    if (index < 0){
        return response.status(404).json({message: 'User not found'})
    }

    request.userIndex = index
    request.userId = id

    next()

}

const requests = (request, response, next) =>{

    const method = request.route.methods
    const url = request.route.path
    console.log(method, url)

    next()
}

app.post('/order',requests, (request,response)=>{

    const { clientName, order, price} = request.body
    const status = "In preparation"

    const orderClient = { id:uuid.v4(), clientName, order, price, status}

    orders.push(orderClient)

    return response.status(201).json(orderClient)
})


app.get('/order',requests, (request,response)=>{

    return response.status(201).json(orders)
})


app.put('/order/:id',checkUserId,requests, (request,response)=>{

    const { clientName, order, price } = request.body
    const index = request.userIndex
    const id = request.userId
    const status = "In preparation"

    const updateOrders = { id, clientName, order, price, status }

    orders[index] = updateOrders

    return response.json(updateOrders)
})


app.delete('/order/:id',checkUserId,requests, (request,response)=>{

    const index = request.userIndex

    orders.splice(index,1)

    return response.status(204).json()
})


app.get('/order/:id',checkUserId,requests, (request,response)=>{

    const index = request.userIndex
    const order = orders[index]

    return response.json(order)
})

app.patch('/order/:id',checkUserId,requests, (request,response)=>{

    const index = request.userIndex

    const { id, clientName, order, price} = orders[index]
    let status = orders[index].status
    status = "Finished"
    const finishedOrder = {id,clientName, order, price, status}

    orders[index] = finishedOrder

    return response.json(finishedOrder)
})

app.listen(port, ()=>{
    console.log(`Serve started ${port}`)
})