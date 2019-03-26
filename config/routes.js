//Munch has dinner.
const router = require('express').Router()
const recipes = require('../controllers/recipes')
const reviews = require('../controllers/reviews')
const categories = require('../controllers/categories')
const auth = require('../controllers/auth')
const user = require('../controllers/user')
const secureRoute = require('../lib/secureRoute')

router.route('/recipes')
  .get(recipes.index)
  .post(secureRoute, recipes.create)

router.route('/recipes/:id')
  .get(recipes.show)
  .put(secureRoute, recipes.edit)
  .delete(secureRoute, recipes.delete)

router.post('/recipes/:id/comments', secureRoute, recipes.commentCreate)
router.delete('/recipes/:id/comments/:commentId', secureRoute, recipes.commentDelete)

router.route('/reviews')
  .get(reviews.index)
  .post(secureRoute, reviews.create)

router.route('/reviews/:id')
  .get(reviews.show)
  .put(secureRoute, reviews.edit)
  .delete(secureRoute, reviews.delete)

router.post('/reviews/:id/comments', secureRoute, reviews.commentCreate)
router.delete('/reviews/:id/comments/:commentId', secureRoute, reviews.commentDelete)

router.route('/categories')
  .get(categories.index)
  .post(categories.create)

router.route('/categories/:id')
  .get(categories.show)
  .put(categories.edit)
  .delete(categories.delete)

router.route('/user/:id')
  .get(user.show)
  .put(user.edit)

router.post('/register', auth.register)
router.post('/login', auth.login)

module.exports = router
