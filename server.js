const express = require("express");
const drinks = require('./models/drinks.js');
const food = require('./models/food.js');
const app = express();
const port = 3000;





app.get('/drinks/', (req, res) => {
    // res.send(drinks);
    res.render('index.ejs', {
        allDrinks: drinks
    })
});

app.get('/food/', (req, res) => {
    // res.send(food);
    res.render('index_food.ejs', {
        allFood: food
    })
});

app.get('/drinks/:index', (req, res) => {
    // res.send(drinks[req.params.index]);
    res.render('show.ejs', {
        drink: drinks[req.params.index],
})});

app.get('/food/:index', (req, res) => {
    // res.send(food[req.params.index]);
    res.render('food_show.ejs', {
        food: food[req.params.index],
})});










app.listen(port, () => { 
    console.log(`listening on port ${port}`)
    });