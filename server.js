const express = require("express");
const drinks = require('./models/drinks.js');
const app = express();
const port = 3000;





app.get('/drinks/', (req, res) => {
    // res.send(drinks);
    res.render('index.ejs', {
        allDrinks: drinks
    })
});

app.get('/drinks/:index', (req, res) => {
    // res.send(drinks[req.params.index]);
    res.render('show.ejs', {
        drink: drinks[req.params.index],
        title: `${drinks[req.params.index].name}`});
});

app.get('/drinks/:id', (req, res) => {
    res.send(req.params.id);
});












app.listen(port, () => {
    console.log(`listening on port`, port)
});