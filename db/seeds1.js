const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const Category = require('../models/category')

mongoose.connect(dbURI, { useNewUrlParser: true}, (err, db) => {

  //this deletes the current database
  db.dropDatabase()

  Category.create([
    {
      'name': 'Vegetarian'
    }, {
      'name': 'Chinese'
    }, {
      'name': 'American'
    }, {
      'name': 'British'
    }, {
      'name': 'Caribbean'
    }, {
      'name': 'French'
    }, {
      'name': 'Greek'
    }, {
      'name': 'Indian'
    }, {
      'name': 'Italian'
    }, {
      'name': 'Japanese'
    }, {
      'name': 'Mediterranean'
    }, {
      'name': 'Mexican'
    }, {
      'name': 'Moroccan'
    }, {
      'name': 'Spanish'
    }, {
      'name': 'Thai'
    }, {
      'name': 'Turkish'
    }, {
      'name': 'Vietnamese'
    }, {
      'name': 'Gluten-Free'
    }, {
      'name': 'Vegan'
    }, {
      'name': 'Cajun'
    }, {
      'name': 'Lebanese'
    }, {
      'name': 'Ethiopian'
    }, {
      'name': 'German'
    }, {
      'name': 'Korean'
    }, {
      'name': 'Swedish'
    }, {
      'name': 'Latvian'
    }, {
      'name': 'Scottish'
    }, {
      'name': 'Canadian'
    }, {
      'name': 'Russian'
    }, {
      'name': 'Polish'
    }, {
      'name': 'Brazilian'
    }, {
      'name': 'Hawaiian'
    }, {
      'name': 'Peruvian'
    }, {
      'name': 'Salvadorian'
    }, {
      'name': 'Cuban'
    }, {
      'name': 'Tibetan'
    }, {
      'name': 'Egyptian'
    }, {
      'name': 'Belgian'
    }, {
      'name': 'Irish'
    }, {
      'name': 'Welsh'
    }, {
      'name': 'Portuguese'
    }, {
      'name': 'Kenyan'
    }, {
      'name': 'Algerian'
    }, {
      'name': 'Nigerian'
    }, {
      'name': 'Libyan'
    }, {
      'name': 'Ovo-Vegetarian'
    }, {
      'name': 'Lacto-Vegetarian'
    }, {
      'name': 'Lacto-Ovo Vegetarians'
    }, {
      'name': 'Pescetarians'
    }, {
      'name': 'Low-Carb'
    }, {
      'name': 'High-Protein'
    }, {
      'name': 'No-Sodium'
    }, {
      'name': 'Lactose-Free'
    }, {
      'name': 'Paleo'
    }, {
      'name': 'Diabetic'
    }, {
      'name': 'Nut-Free'
    }, {
      'name': 'Healthy'
    }, {
      'name': 'Pasta & Risotto'
    }, {
      'name': 'Salad'
    }, {
      'name': 'Bread & Doughs'
    }, {
      'name': 'Curry'
    }, {
      'name': 'Soup'
    }, {
      'name': 'Roast'
    }, {
      'name': 'Stew'
    }, {
      'name': 'BBQ Food'
    }, {
      'name': 'Pizza'
    }, {
      'name': 'Sandwiches & Wraps'
    }, {
      'name': 'Cakes'
    }, {
      'name': 'Sauces & Condiments'
    }, {
      'name': 'Puddings & Desserts'
    }, {
      'name': 'Drinks'
    }, {
      'name': 'Cookies'
    }, {
      'name': 'Muffins'
    }, {
      'name': 'Pasta Bakes'
    }, {
      'name': 'Burgers'
    }, {
      'name': 'Breakfast'
    }, {
      'name': 'Lunch'
    }, {
      'name': 'Dinner'
    }, {
      'name': 'Pancakes'
    }, {
      'name': 'One Pot'
    }, {
      'name': 'Tapas'
    }, {
      'name': 'Sharing'
    }, {
      'name': 'Snacks'
    }, {
      'name': 'Spicy'
    }, {
      'name': 'Non-Spicy'
    }, {
      'name': 'Hearty'
    }, {
      'name': 'Allergy-Free'
    }, {
      'name': 'Dinner Party'
    }, {
      'name': 'Fast Food'
    }, {
      'name': 'Fine Dining'
    }, {
      'name': 'Quick & Easy'
    }, {
      'name': 'Occasions'
    }, {
      'name': 'Romantic'
    }, {
      'name': 'Hipster'
    }, {
      'name': 'Cheese'
    }, {
      'name': 'Energy Boosting'
    }, {
      'name': 'Alcohol'
    }, {
      'name': 'Alcohol-Free'
    }, {
      'name': 'Cocktails'
    }, {
      'name': 'Kitsch'
    }
  ])
    .then(categories => console.log(`${categories.length} categories created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})
