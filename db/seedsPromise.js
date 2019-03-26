const mongoose = require('mongoose')
const {dbURI} = require('../config/environment')
// const Books = require('../models/book')
// const BookGenre = require('../models/bookGenre')
const Category = require('../models/category')
const Review = require('../models/review')
const Recipe = require('../models/recipe')
const User = require('../models/user')
// const Promise = require('bluebird')

function getRandom(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

mongoose.connect(dbURI, { useNewUrlParser: true }, (err, db) => {
  console.log('connected')
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
    .then(categories => {
      return Promise.all([
        categories,
        User.create([
          {
            'username': 'Rich',
            'email': 'rich@email',
            'password': 'password',
            'passwordConfirmation': 'password',
            'name': 'Rich T',
            'categories': [categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id],
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
            'categories': [categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id],
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
            'categories': [categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id],
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
            'categories': [categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id],
            'image': 'http://www.gannett-cdn.com/-mm-/421fa88894207f6fd125837bfbea3a215d8338a7/c=972-205-2409-1017/local/-/media/2016/10/18/USATODAY/USATODAY/636124053572235005-101816orange-cat-thinkstock.jpg?width=3200&height=1680&fit=crop',
            'location': 'Manchester, UK',
            'bio': 'Chicken katsu wraps for the win'
          }
        ])
      ])
    })
    .then(data => {
      const [ categories, users ] = data

      return Promise.all([
        Review.create([
          {
            'restaurantName': 'Noble Rot',
            'reviewHeadline': 'So good!',
            'reviewText': 'The very best restaurants are like your oldest friend. You relive good times together. An hour with them can easily turn into three. You’ve had good times when it’s just the two of you. You’ve had even better times in a group. They’re excellent with parents or partners. You’ve got very, very drunk together. On the cheap stuff, on the expensive stuff, on any stuff. You don’t spend all your time in a restaurant or with a friend like this. Months pass where you go to other places, and see other people. But it’s only so long until you’re back together and, probably, ordering a bottle. This is why we’re updating our review of Noble Rot. Because it still feels like our oldest friend in London.',
            'rating': 5,
            'image': 'https://infatuation.imgix.net/media/images/reviews/noble-rot-wine-bar/banners/1492493931.11.jpg?auto=format&h=840&w=1336',
            'user': users[getRandom(4)]._id,
            'categories': [categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id]
          },
          {
            'restaurantName': 'Rochelle Canteen',
            'reviewHeadline': 'You won\'t be dissapointed',
            'reviewText': 'After you visit Rochelle Canteen, you’ll either want to keep the knowledge of its existence to yourself, or tell pretty much everyone you know about it. We fall squarely into the second category, because keeping great restaurants to ourselves wouldn’t be a smart plan for business. And we like business.',
            'rating': 4,
            'image': 'https://infatuation.imgix.net/media/images/reviews/rochelle-canteen/banners/1492459896.7.jpg?auto=format&h=840&w=1336',
            'user': users[getRandom(4)]._id,
            'categories': [categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id]
          },
          {
            'restaurantName': 'Kitty Fisher\'s',
            'reviewHeadline': 'Great! Very casual',
            'reviewText': 'Cheese on toast. Meat and two veg. Strawberries and ice cream. No, despite our government’s best efforts, you have not been transported back to the 1980s. This is just Kitty Fisher’s style. It’s an old fashioned British restaurant in Mayfair that makes decadence its business. Don’t be fooled by the velvet and gold detail though, because this isn’t a stuffy restaurant. Sure, the food here is rich. Almost as rich as its clientele. But it’s also incredibly delicious. Regular sounding things like welsh rarebit, risotto, and crispy potatoes are presented without fanfare, and eaten in silence. No, it’s not the silence of British awkwardness. It’s the silence of proper enjoyment. That’s what you come to Kitty Fisher’s for.',
            'rating': 3,
            'image': 'https://infatuation.imgix.net/media/images/reviews/kitty-fishers/banners/1531381427.52.jpg?auto=format&crop=focalpoint&fit=crop&fp-x=0.42&fp-y=0.18&h=840&w=1336',
            'user': users[getRandom(4)]._id,
            'categories': [categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id]
          },
          {
            'restaurantName': 'Black Axe Mangal',
            'reviewHeadline': 'Good vibes!',
            'reviewText': 'There are some places that make you smile as soon as you walk in and leave you grinning on exit - BAM is one of these. It’s a small, smoky and screechy place. Dishes are being cooked and smoked in the same room as you, hard rock is pounding out the speakers, you and your neighbours are knee-to-knee. It’s a great atmosphere, and that’s before we get to the food. The menu at BAM is quite hard to describe. Not least because it changes. Calling it fusion is probably the safest thing to do. At any one time you’ve got a glittery flatbread with cod’s roe, Chinese spiced fried guinea fowl, and miso scrambled eggs. You get the idea. Or do you? Or do we? Whatever, it’s all delicious, interesting and good fun.',
            'rating': 4,
            'image': 'https://infatuation.imgix.net/media/images/reviews/black-axe-mangal/banners/1517315875.19.jpg?auto=format&h=840&w=1336',
            'user': users[getRandom(4)]._id,
            'categories': [categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id]
          },
          {
            'restaurantName': 'Barrafina Soho',
            'reviewHeadline': 'not so good',
            'reviewText': 'When I was growing up in a small village near Scotland, everyone listened to trance. The kids at my school in Newcastle were obsessed with Oakenfold and Judge Jules, and as someone who spent most of his time learning guitar in his bedroom, I didn’t get it. The first time I went to a club though, that changed. Loaded up on enough Smirnoff Ices to down a small (huge) dog, as soon as I walked into Baja Beach Club, I got trance. I just needed to experience trance first hand.',
            'rating': 2,
            'image': 'https://infatuation.imgix.net/media/images/reviews/barrafina-soho/banners/1492477372.63.jpg?auto=format&h=840&w=1336',
            'user': users[getRandom(4)]._id,
            'categories': [categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id]
          },
          {
            'restaurantName': 'Hoppers',
            'reviewHeadline': 'A delight!',
            'reviewText': 'They say that good things come to those who wait. While that doesn’t apply to things like the Chainsmokers’ new album or, say, heart surgery, it does apply to a few restaurants in Soho. And one of those restaurants is Hoppers.',
            'rating': 3,
            'image': 'https://infatuation.imgix.net/media/images/reviews/hoppers/banners/1492457759.84.jpg?auto=format&h=840&w=1336',
            'user': users[getRandom(4)]._id,
            'categories': [categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id]
          },
          {
            'restaurantName': 'P Franco',
            'reviewHeadline': 'Cosy!',
            'reviewText': 'You know those dinner parties you sometimes walk past and peer into at night? With big windows looking out onto the pavement, full of yellow lighting and the sound of laughter, cutlery and clinking. The ones that make you turn to whoever you’re walking with and say “ooh that looks nice, doesn’t it”. That’s exactly what P. Franco is. Only here you can walk in uninvited without anybody calling the police.',
            'rating': 4,
            'image': 'https://infatuation.imgix.net/media/images/reviews/p-franco/banners/1493673233.93.jpg?auto=format&h=840&w=1336',
            'user': users[getRandom(4)]._id,
            'categories': [categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id]
          },
          {
            'restaurantName': 'Gunpowder',
            'reviewHeadline': 'Yum Yum Gun Gun',
            'reviewText': 'The very best restaurants are like your oldest friend. You relive good times together. An hour with them can easily turn into three. You’ve had good times when it’s just the two of you. You’ve had even better times in a group. They’re excellent with parents or partners. You’ve got very, very drunk together. On the cheap stuff, on the expensive stuff, on any stuff. You don’t spend all your time in a restaurant or with a friend like this. Months pass where you go to other places, and see other people. But it’s only so long until you’re back together and, probably, ordering a bottle. This is why we’re updating our review of Noble Rot. Because it still feels like our oldest friend in London.',
            'rating': 4,
            'image': 'https://infatuation.imgix.net/media/images/reviews/gunpowder/banners/1492721083.49.jpg?auto=format&h=840&w=1336',
            'user': users[getRandom(4)]._id,
            'categories': [categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id]
          },
          {
            'restaurantName': 'GBK',
            'reviewHeadline': 'Tasty burguer!',
            'reviewText': 'You have to go here - burgers to die for',
            'rating': 4,
            'image': 'https://cdn.images.express.co.uk/img/dynamic/22/590x/secondary/burger-679161.jpg',
            'user': users[getRandom(4)]._id,
            'categories': [categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id]
          },
          {
            'restaurantName': 'Pizza express',
            'reviewHeadline': 'Know what you\'re getting',
            'reviewText': 'thinny pizza',
            'rating': 2,
            'image': 'http://cdn.ltstatic.com/2008/July/JQ718524_942long.jpg',
            'user': users[getRandom(4)]._id,
            'categories': [categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id]
          },
          {
            'restaurantName': 'The Table Cafe',
            'reviewHeadline': 'DElicioius vegy food',
            'reviewText': 'Really good for groups, will come back.',
            'rating': 4,
            'image': 'http://www.breakfastlondon.co.uk/wp-content/uploads/2015/07/TheTable049web-1024x682.jpg',
            'user': users[getRandom(4)]._id,
            'categories': [categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id]
          },
          {
            'restaurantName': 'Pomona\'s',
            'reviewHeadline': 'Pom Yum!',
            'reviewText': 'So good! I will be coming back for sure',
            'rating': 4,
            'image': 'https://resizer.otstatic.com/v2/photos/huge/24864785.jpg',
            'user': users[getRandom(4)]._id,
            'categories': [categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id]
          },
          {
            'restaurantName': 'Monsieur Le Duck',
            'reviewHeadline': 'Great name, great restaurant',
            'reviewText': 'Something different',
            'rating': 4,
            'image': 'https://media-cdn.tripadvisor.com/media/photo-s/15/ef/43/3a/le-frontage.jpg',
            'user': users[getRandom(4)]._id,
            'categories': [categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id]
          },
          {
            'restaurantName': 'Magic Falafel',
            'reviewHeadline': 'Great for veggies',
            'reviewText': 'Very tasty Falafel, repeat for sure!',
            'rating': 2,
            'image': 'http://cdn.ltstatic.com/2008/July/JQ718524_942long.jpg',
            'user': users[getRandom(4)]._id,
            'categories': [categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id]
          },
          {
            'restaurantName': 'The Table Cafe',
            'reviewHeadline': 'Supremo!',
            'reviewText': 'Delicioius vegy food. Loved it',
            'rating': 4,
            'image': 'http://www.breakfastlondon.co.uk/wp-content/uploads/2015/07/TheTable049web-1024x682.jpg',
            'user': users[getRandom(4)]._id,
            'categories': [categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id]
          }
        ]),
        Recipe.create([
          {
            'name': 'Filo fish pies with pea-spiked mash',
            'description': 'Ultimate health food',
            'ingredients': '2 cloves of garlic, 2 leeks',
            'method': 'Preheat the oven to gas 6, 200°C, fan 180°C. Peel and finely slice the garlic, wash and finely slice the leeks, then place in a large pan on a medium heat with 1 tsp of oil. Cook for 10 mins, or until softened, stirring regularly.',
            'image': 'https://realfood.tesco.com/media/images/RFO-1400x919-Filo-fish-pies-with-pea-spiked-mash-3b1120a9-8e50-4e39-8bea-aecae3a42675-0-1400x919.jpg',
            'user': users[getRandom(4)]._id,
            'categories': [categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id]
          },
          {
            'name': 'Barbecue Chicken with Coriander Couscous and Elderflower Roasted Vegetables',
            'description': 'So good for summer.',
            'ingredients': '4 chicken breasts, or a selection of thighs and drumsticks, 2 peppers, (1 red and 1 yellow)',
            'method': 'Peel and quarter the red onion, cut the courgette into thick slices. Place on a baking tray with the cherry tomatoes. Pour over the Bottlegreen Elderflower Cordial and 1 tbsp of the olive oil, toss until coated. Cook for around 20-30 minutes until softened and beginning to char a little.',
            'image': 'https://www.ocado.com/cmscontent/recipe_image_med/348445.jpg?Iiqk',
            'user': users[getRandom(4)]._id,
            'categories': [categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id]
          },
          {
            'name': 'Barbecue Trout with a Ginger & Lemongrass Glaze',
            'description': 'Served with any barbecued fish',
            'ingredients': '4 whole prepared trout, 6 tbsp Bottlegreen ginger & lemongrass cordial',
            'method': 'Barbecue or grill the fish for approximately 15-20 minutes, depending on size, turning halfway through cooking. The fish will flake easily when cooked.',
            'image': 'https://www.ocado.com/cmscontent/recipe_image_med/348117.jpg?Iiqk',
            'user': users[getRandom(4)]._id,
            'categories': [categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id]
          },
          {
            'name': 'Barbecued Steak with Peach Relish',
            'description': 'This recipe is a great one for the barbecue.',
            'ingredients': '4 beef steaks, sirloin, rump or rib-eye',
            'method': 'Cook the steaks according to your preference on a prepared barbecue or preheated grill.',
            'image': 'https://www.ocado.com/cmscontent/recipe_image_med/259924.jpg?HZ5E',
            'user': users[getRandom(4)]._id,
            'categories': [categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id]
          },
          {
            'name': 'Bean and Pesto Salad',
            'description': 'Serve this salad alongside vegetarian grills.',
            'ingredients': '400g canned mixed beans, 4 spring onions, trimmed',
            'method': 'Chop the spring onions into rounds and cut the pepper into strips. Add to the bowl, sprinkle in your chosen herbs and toss the bean salad together, seasoning to taste.',
            'image': 'https://www.ocado.com/cmscontent/recipe_image_med/272698.jpg?HjvE',
            'user': users[getRandom(4)]._id,
            'categories': [categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id]
          },
          {
            'name': 'Beef Burger with Smoked Cheese',
            'description': 'A delicious balancing act of spicy, creamy, meaty, smoky and sour.',
            'ingredients': '4 quarter pounder beef burgers,4 slices oak smoked cheddar',
            'method': 'Cook the burgers on a hot barbecue for 6 mins, turning every 2 mins. Then lay the slices of smoked cheese on top and cook for 2 mins with the lid on to melt the cheese.',
            'image': 'https://www.ocado.com/cmscontent/recipe_image_med/2682693.jpg?RIgk',
            'user': users[getRandom(4)]._id,
            'categories': [categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id]
          },
          {
            'name': 'Blueberry Lemonade',
            'description': 'You can also add basil or mint to this gorgeously fresh-tasting pretty pink drink.',
            'ingredients': '200g blueberries, 200g golden caster sugar',
            'method': 'In a food processor or high-speed blender, whizz the blueberries, sugar, lemon juice and 250ml water together until the berries are completely puréed and the sugar is dissolved.',
            'image': 'https://www.ocado.com/cmscontent/recipe_image_med/2624030.jpg?Q2Ok',
            'user': users[getRandom(4)]._id,
            'categories': [categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id]
          },
          {
            'name': 'Carrot and Beetroot Salad',
            'description': 'A great seasonal salad courtesy of journalist, blogger and food campaigner Elisabeth Winkler.',
            'ingredients': '600g carrots, 600g raw beetroot',
            'method': 'Gently heat the remaining teaspoon of olive oil in a small frying pan and toast the seeds for 3–4 minutes over a moderate heat, stirring frequently to prevent sticking. Add the soy sauce at the end of the cooking, if using. Most of the sauce will evaporate, leaving a salty taste and extra browning for the seeds. Store the toasted seeds in a jar with a lid if preparing the day before.',
            'image': 'https://www.ocado.com/cmscontent/recipe_image_med/247459.jpg?HOpE',
            'user': users[getRandom(4)]._id,
            'categories': [categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id]
          },
          {
            'name': 'Charred Corn Salad',
            'description': 'The smoky flavour of the charred corn makes this dish a perfect match for grilled meat.',
            'ingredients': '20g fresh basil, 4 fresh corn , husks removed',
            'method': 'To make the vinaigrette, pulse the basil and garlic in a blender until the basil starts to break down. Add the vinegar and keep pulsing while adding the oil in a steady stream until smooth.',
            'image': 'https://www.ocado.com/cmscontent/recipe_image_med/2053812.jpg?K8TE',
            'user': users[getRandom(4)]._id,
            'categories': [categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id]
          },
          {
            'name': 'Butterflied Leg of Welsh Lamb with Orange, Soy and Thyme',
            'description': 'This is a delicious summer dish that is packed with flavour',
            'ingredients': '1 leg of Welsh lamb, bone removed and butterflied, weighing roughly 1.35kg in total, 1 orange, rind and juice removed',
            'method': 'Either ask your butcher to butterfly the leg of lamb or, follow our step by step guide and have a go yourself. Take two long metal skewers and thread through the meat corner to corner. This not only holds the meat together, but believe it or not, also helps it cook.',
            'image': 'https://www.ocado.com/cmscontent/recipe_image_med/239366.jpg?HEzE',
            'user': users[getRandom(4)]._id,
            'categories': [categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id]
          },
          {
            'name': 'Chorizo Flatbreads with Rocket Pesto',
            'description': 'Use the softer cooking chorizo for this peppery, punchy barbecue sizzler.',
            'ingredients': '60g rocket, 25g for the pesto, 2 tbsp pine nuts, toasted, for the pesto',
            'method': 'For the pesto, pulse 1 garlic clove, 25g rocket, 25g basil, 2tbsp toasted pine nuts and 80ml extra virgin olive oil in a blender. Stir in 2tbsp grated parmesan and season.',
            'image': 'https://www.ocado.com/cmscontent/recipe_image_med/2425682.jpg?PGFE',
            'user': users[getRandom(4)]._id,
            'categories': [categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id]
          },
          {
            'name': 'Chipotle BBQ Ribs',
            'description': 'This recipe is quick to prepare',
            'ingredients': '2 kg pork ribs, 6 tbsp Tabasco Chipotle Sauce',
            'method': 'Combine the remaining 2 tbsp of Tabasco Chipotle Sauce with the baroque sauce and spread evenly over both sides of the ribs.',
            'image': 'https://www.ocado.com/cmscontent/recipe_image_med/396727.jpg?JTLk',
            'user': users[getRandom(4)]._id,
            'categories': [categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id]
          },
          {
            'name': 'Gran Luchito Smoked Chilli Honey Bacon Onion Rings',
            'description': 'Tasty take on an onion ring',
            'ingredients': '2 red onions, sliced into rings,10 rashers streaky bacon',
            'method': 'If you have them, put a skewer through the rings and suspend over an oven-proof dish. If not, just bake them on a tray on foil/baking paper.',
            'image': 'https://www.ocado.com/cmscontent/recipe_image_med/2410931.jpg?O61E',
            'user': users[getRandom(4)]._id,
            'categories': [categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id]
          },
          {
            'name': 'Corn on the Cob with Smoky Chilli',
            'description': 'Try giving traditional corn on the cob a zingy twist ',
            'ingredients': '4 sweetcorn , leaves and threads removed',
            'method': 'While the corn is cooking beat the butter with the pepper sauce, lime zest and coriander until thoroughly mixed. Chill until ready to serve.',
            'image': 'https://www.ocado.com/cmscontent/recipe_image_med/46132.jpg?TsA',
            'user': users[getRandom(4)]._id,
            'categories': [categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id]
          },
          {
            'name': 'Foil-baked Strawberries with Pimm\'s and Clotted Cream',
            'description': 'This summery dessert combines three classic English ingredients',
            'ingredients': '50g caster sugar,800g strawberries',
            'method': 'In a bowl, mix the strawberries with the sugar and Pimm\'s. Divide the strawberries evenly between the foil squares. Begin to fold the edges up to make a parcel before spooning in the remaining Pimm\'s. Close each parcel, sealing the edges tightly.',
            'image': 'https://www.ocado.com/cmscontent/recipe_image_med/49311.jpg?TsA',
            'user': users[getRandom(4)]._id,
            'categories': [categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id]
          }
        ])
      ])
    })
    .then(() => console.log('did my job'))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})

// name: { type: String, required: true },
// description: { type: String },
// ingredients: { type: String },
// method: { type: String },
// image: { type: String },
// user: { type: mongoose.Schema.ObjectId, ref: 'User' },
// categories: [{ type: mongoose.Schema.ObjectId, ref: 'Category', required: true, default: undefined }],

// function getPromise2(categories) {

//   }
//
//   function getPromise3(user, categories) {
//
//       .then(users => console.log(`${review.length} reviews created`))
//       .catch(err => console.log(err))
//       .finally(() => mongoose.connection.close())
//     }
//
//
// getPromise1()
// .then(data => {
//   const [ categories ] = data
// return getPromise2(categories)
// })
// .then(data => {
//   const [ user, categories ] = data
// return getPromise3(user, categories)
// })


// }).then((args) => console.log(args));
//   Promise.all(promiseArray)
//     .then(data => {
//       const [ categories ] = data
//       return User.create([
//         {
//           'username': 'Rich',
//           'email': 'rich@email',
//           'password': 'password',
//           'passwordConfirmation': 'password',
//           'name': 'Rich T',
//           'categories': [categories[0],categories[3]],
//           'image': 'https://upload.wikimedia.org/wikipedia/commons/6/69/June_odd-eyed-cat_cropped.jpg',
//           'location': 'London, UK',
//           'bio': 'burittos are my friend'
//         },
//         {
//           'username': 'Semmi',
//           'email': 'semmi@email',
//           'password': 'password',
//           'passwordConfirmation': 'password',
//           'name': 'Semmi W',
//           'categories': [categories[0]],
//           'image': 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
//           'location': 'Edinburgh, Scotland',
//           'bio': 'Love me some Pret'
//         },
//         {
//           'username': 'Gaby',
//           'email': 'gaby@email',
//           'password': 'password',
//           'passwordConfirmation': 'password',
//           'name': 'Gaby R',
//           'categories': [categories[0]],
//           'image': 'https://news.nationalgeographic.com/content/dam/news/2018/05/17/you-can-train-your-cat/02-cat-training-NationalGeographic_1484324.jpg',
//           'location': 'Bristol, UK',
//           'bio': 'The ultimate foodie'
//         },
//         {
//           'username': 'Pascual',
//           'email': 'pascual@email',
//           'password': 'password',
//           'passwordConfirmation': 'password',
//           'name': 'Pascual V',
//           'categories': [categories[0]],
//           'image': 'http://www.gannett-cdn.com/-mm-/421fa88894207f6fd125837bfbea3a215d8338a7/c=972-205-2409-1017/local/-/media/2016/10/18/USATODAY/USATODAY/636124053572235005-101816orange-cat-thinkstock.jpg?width=3200&height=1680&fit=crop',
//           'location': 'Manchester, UK',
//           'bio': 'Chicken katsu wraps for the win'
//         }
//       ])
//     })
//     .then(users => console.log(`${users.length} users created`))
//     .catch(err => console.log(err))
//     .finally(() => mongoose.connection.close())
