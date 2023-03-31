const express = require('express')
const app = express()
const axios = require('axios')
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Laura!')
})

app.get(`/todos`, (req, res) => {
  
  axios.get('https://jsonplaceholder.typicode.com/todos')
    .then((response) => {
      res.json(response.data)
    })
    .catch(err => {
      console.log(err)
      res.sendStatus(500)
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})