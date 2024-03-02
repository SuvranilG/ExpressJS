const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(express.static('public'))
const port = 3001
app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.send('Namaste !')
})

app.listen(port, () => {
  console.log(`Example app listening on port localhost:${port}`)
})


app.post('/api/cars', (req, res) => {
    const {name,brand,color}= req.body;
    
    console.log(req.body);
    console.log(`${name}'s ${brand} is ${color} color`);
    res.send("Car Data submitted successfully");
})

app.route('/book')
  .get((req, res) => {
    res.send('Get a random book')
  })
  .post((req, res) => {
    res.send('Add a book')
  })
  .put((req, res) => {
    res.send('Update the book')
  })