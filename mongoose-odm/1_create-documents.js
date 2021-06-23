
// DB connection
require('./0_ddbb-connection')

// Model
const Dog = require('./models/dog.model')





// // .create()
// // argumento: objeto a crear en la BBDD
// // retorno: objeto creado en BBDD

// Dog
//     .create({ name: 'Popino', age: 14, city: 'Madrid', color: 'Toffe marroncito' })
//     .then(theNewDog => console.log('¡El nuevo perro fué creado!:', theNewDog))
//     .catch(err => console.log('Se produjo un error.... =>', err))









// .create()
// argumento: arrays de objetos a crear en la BBDD
// retorno: arrays de objetos creados en BBDD

Dog
    .create([
        { name: 'Lassie', age: 5, city: 'Gijón', color: 'Negro' },
        { name: 'Popino', age: 14, city: 'Madrid', color: 'Toffe y caramelo' },
        { name: 'Salchichonio', age: 14, city: 'Estepona', color: 'Toffe y caramelo' },
        { name: 'Scooby Doo', age: 1, city: 'Salamanca', color: 'Marroncito' },
        { name: 'Godzilla', age: 16, city: 'Bilbao', color: 'Toffe y caramelo' }
    ])
    .then(theNewDogs => console.log('Se ha creado estos registros:', theNewDogs))
    .catch(err => console.log('Se ha producido un error:', err))