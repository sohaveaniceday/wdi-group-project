//Munch has dinner.
const router = require('express').Router()
const recipes = require('../controllers/recipes')
const reviews = require('../controllers/reviews')
const categories = require('../controllers/categories')

// const auth = require('../controllers/auth')
// const secureRoutes = require('../lib/secureHandler')


router.route('/recipes')
  .get(recipes.index)
  .post(recipes.create)

router.route('/recipes/:id')
  .get(recipes.show)
  .put(recipes.edit)
  .delete(recipes.delete)

router.post('/recipes/:id/comments', recipes.commentCreate)
router.delete('/recipes/:id/comments/:commentId', recipes.commentDelete)

router.route('/reviews')
  .get(reviews.index)
  .post(reviews.create)

router.route('/reviews/:id')
  .get(reviews.show)
  .put(reviews.edit)
  .delete(reviews.delete)

router.post('/reviews/:id/comments', reviews.commentCreate)
router.delete('/reviews/:id/comments/:commentId', reviews.commentDelete)

router.route('/categories')
  .get(categories.index)
  .post(categories.create)

router.route('/categories/:id')
  .get(categories.show)
  .put(categories.edit)
  .delete(categories.delete)

// router.post('/register', auth.register)
// router.post('/login', auth.login)

module.exports = router
