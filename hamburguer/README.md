<h2 align="center">
 Project Node.js
</h2>


## :rocket: About the project 

  An application that will register the orders of a hamburger, using [Node](https://nodejs.org/en/) e [Express](https://expressjs.com/pt-br/).

### Rotas
-`POST /order`: The route must receive the `customer order`, the `customer name` and `the order value`, this information must be passed inside the body of the request, and with this information must register the new order within an array in the following format: `{ id: "ac3ebf68-e0ad-4c1d-9822-ff1b849589a8", order: "X- Salad, 2 large potatoes, 1 coke", clientName:"José ", price: 44.50, status:"In preparation" }`.The ID must be generated inside the code using UUID V4.

- `GET /order`: Route that lists all orders already placed.

- `PUT /order/:id`: This route should change an order already placed. You can change one or all of the order data. The order `id` must be sent in the route parameters.

- `DELETE /order/:id`: This route should delete an order already made with the `id` sent in the route parameters.


- `PATCH /order/:id`: This route receives the `id` in the parameters and as soon as it is called, it must change the status of the order received by the id to "Ready".

### example


If I call the `POST /order` route passing `{ order: "X- Salad, 2 large potatoes, 1 coke", clientName:"José", price: 44.50 }`,
the array should look like this:

```js
[
  {
     id: "ac3ebf68-e0ad-4c1d-9822-ff1b849589a8",
     order: "X- Salad, 2 large potatoes, 1 coke",
     client:"Joseph",
     price: 44.50,
     status:"In preparation"
  }
];
```

If I call the `PATCH /order/ac3ebf68-e0ad-4c1d-9822-ff1b849589a8` route,
the array should look like this:
```js
[
  {
    id: "ac3ebf68-e0ad-4c1d-9822-ff1b849589a8",
     order: "X- Salad, 2 large potatoes, 1 coke",
     client:"Joseph",
     price: 44.50,
     status:"Finished"
  }
];
```

### Middlewares

-  middleware that will be used in all routes that receive the ID parameter, so it must check if the passed ID exists. If not, return an error, otherwise allow the request to continue normally;
.


Done with ♥ by Gabriel Mori
