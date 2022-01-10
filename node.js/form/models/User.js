const db = require('./database');

const User = db.sequelize.define('users', {
    email: { type: db.Sequelize.STRING },
    password: { type: db.Sequelize.STRING }
});

module.exports = User;