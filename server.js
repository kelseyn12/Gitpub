const express = require("express");
const drinks = require('./models/drinks.js');
const app = express();
const port = 3000;





app.get('/drinks/', (req, res) => {
    res.send('Welcome to the Gitpub App!')
});
app.get('/drinks/:index', (req, res) => {
    res.send(drinks[req.params.index]);
});












app.listen(port, () => {
    console.log(`listening on port`, port)
});