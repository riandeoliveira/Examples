// Criação de models.

const mongoose = require('mongoose');

const data = {
    host: 'localhost',  
    database: 'register'
}

const { host, database } = data

mongoose.connect(`mongodb://${host}/${database}`).then(() => {
    console.log('Conexão bem sucedida!');
}).catch(error => {
    console.log('ERRO! Não foi possível se conectar ao MongoDB ' + error);
});

// Definindo um model, semelhante às tabelas do MySQL.
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },

    email: {
        type: String,
        require: true
    },

    age: {
        type: Number,
        require: true
    },

    country: {
        type: String,
        require: true
    }
});

// Collection.
mongoose.model('users', UserSchema);

const User = mongoose.model('users');

// Inserindo dados.
new User({
    name: 'Fulado',
    email: 'abcde@gmail.com',
    age: 45,
    country: 'USA'
}).save().then(() => {
    console.log('Usuário cadastrado com sucesso.');
}).catch(err => {
    console.log('ERRO! Não foi possível cadastrar o usuário. ' + err);
});