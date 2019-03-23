const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const User = require('../models/user')

mongoose.connect(dbURI, { useNewUrlParser: true}, () => {

  //this deletes the current database
  // db.dropDatabase()

  User.create([
    {
      'username': 'Rich',
      'email': 'rich@email',
      'password': 'password',
      'passwordConfirmation': 'password',
      'name': 'Rich T',
      'categories': [''],
      'image': 'https://upload.wikimedia.org/wikipedia/commons/6/69/June_odd-eyed-cat_cropped.jpg',
      'location': 'London, UK',
      'bio': 'burittos are my friend'
    },
    {
      'username': 'Semmi',
      'email': 'semmi@email',
      'password': 'password',
      'passwordConfirmation': 'password',
      'name': 'Semmi W',
      'categories': [''],
      'image': 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      'location': 'Edinburgh, Scotland',
      'bio': 'Love me some Pret'
    },
    {
      'username': 'Gaby',
      'email': 'gaby@email',
      'password': 'password',
      'passwordConfirmation': 'password',
      'name': 'Gaby R',
      'categories': [''],
      'image': 'https://news.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.jpg',
      'location': 'Bristol, UK',
      'bio': 'The ultimate foodie'
    },
    {
      'username': 'Pascual',
      'email': 'pascual@email',
      'password': 'password',
      'passwordConfirmation': 'password',
      'name': 'Pascual V',
      'categories': [''],
      'image': 'http://www.gannett-cdn.com/-mm-/421fa88894207f6fd125837bfbea3a215d8338a7/c=972-205-2409-1017/local/-/media/2016/10/18/USATODAY/USATODAY/636124053572235005-101816orange-cat-thinkstock.jpg?width=3200&height=1680&fit=crop',
      'location': 'Manchester, UK',
      'bio': 'Chicken katsu wraps for the win'
    }
  ])
    .then(users => console.log(`${users.length} users created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})
