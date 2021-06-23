const express = require('express')
const path = require('path')
require('./configs/db-connection')          // DB

const app = express()

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))




const Dog = require('./models/dog.model')

app.get('/', (req, res) => {

    Dog
        .find()
        .sort({ age: 1 })
        .then(dogs => res.render('dogs-page', { dogs: dogs }))
        .catch(err => console.log('Se produjo un error:', err))
})




app.listen(3000, () => console.log('Server running on port 3000'))