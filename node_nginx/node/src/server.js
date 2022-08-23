const server = require('express')();
const mustache = require('mustache-express');
const path = require('path');
const { uniqueNamesGenerator, names } = require("unique-names-generator");
const { sequelize, People } = require('./database');
const PORT = 3000;

// Engine
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

// connection
sequelize.sync()

// Rotas
server.get('/', async (_req, res) => {
    await People.create({
        name: uniqueNamesGenerator({  dictionaries: [names] }),
    });

    res.render('index', {
        people: await People.findAll(),
    });
});



server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
