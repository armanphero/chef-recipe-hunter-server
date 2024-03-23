const express = require('express');
const app = express()
const cors = require('cors')
app.use(cors())

const port = process.env.PORT || 3000;
const chefs = require('./data/chef.json');
const recipes = require('./data/recipe.json');


app.get('/', (req, res) => {
    res.send({server:'chef-recipe-hunter'})
})

app.get('/chefs', (req, res) => {
    res.send(chefs)
})
app.get('/recipe', (req, res) => {
    res.send(recipes)
})
app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    // console.log(id);
    const chefRecipe = recipes.find(recipe => recipe.id === id);
    res.send((chefRecipe || {error : null}))
})


app.listen(port, () => {
    console.log(`chef recipe hunter is listening on port ${port}`)
})