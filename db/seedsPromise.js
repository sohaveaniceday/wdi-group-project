const mongoose = require('mongoose')
const {dbURI} = require('../config/environment')

const Category = require('../models/category')
const Review = require('../models/review')
const Recipe = require('../models/recipe')
const User = require('../models/user')
const Promise = require('bluebird')

function getRandom(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

mongoose.connect(dbURI, { useNewUrlParser: true }, (err, db) => {
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
      'name': 'Pescetarian'
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
            'bio': 'Burittos are my friend'
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
          },
          {
            'username': 'Molly',
            'email': 'molly@email',
            'password': 'password',
            'passwordConfirmation': 'password',
            'name': 'Molly L',
            'categories': [categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id],
            'image': 'https://upload.wikimedia.org/wikipedia/commons/6/69/June_odd-eyed-cat_cropped.jpg',
            'location': 'London, UK',
            'bio': 'I cant cook for sh*t'
          },
          {
            'username': 'Ian',
            'email': 'ian@email',
            'password': 'password',
            'passwordConfirmation': 'password',
            'name': 'Ian B',
            'categories': [categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id],
            'image': 'https://upload.wikimedia.org/wikipedia/commons/6/69/June_odd-eyed-cat_cropped.jpg',
            'location': 'London, UK',
            'bio': 'The onling I like better than talking about food is eating'
          },
          {
            'username': 'Kelly',
            'email': 'kelly@email',
            'password': 'password',
            'passwordConfirmation': 'password',
            'name': 'Kelly H',
            'categories': [categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id],
            'image': 'https://upload.wikimedia.org/wikipedia/commons/6/69/June_odd-eyed-cat_cropped.jpg',
            'location': 'London, UK',
            'bio': 'burittos are my friend'
          },
          {
            'username': 'Alessandro',
            'email': 'alessandro@email',
            'password': 'password',
            'passwordConfirmation': 'password',
            'name': 'Ale D',
            'categories': [categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id],
            'image': 'https://upload.wikimedia.org/wikipedia/commons/6/69/June_odd-eyed-cat_cropped.jpg',
            'location': 'Rome, Italy',
            'bio': 'Eat your spagetti to forgetti your regretti'
          },
          {
            'username': 'Stacey',
            'email': 'stacey@email',
            'password': 'password',
            'passwordConfirmation': 'password',
            'name': 'Stace K',
            'categories': [categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id],
            'image': 'https://upload.wikimedia.org/wikipedia/commons/6/69/June_odd-eyed-cat_cropped.jpg',
            'location': 'London, UK',
            'bio': 'Hello, I love baking goodies for my family and friends'
          },
          {
            'username': 'Justin',
            'email': 'justin@email',
            'password': 'password',
            'passwordConfirmation': 'password',
            'name': 'Justin W',
            'categories': [categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id],
            'image': 'https://upload.wikimedia.org/wikipedia/commons/6/69/June_odd-eyed-cat_cropped.jpg',
            'location': 'London, UK',
            'bio': 'Always looking for inspiration on where to eat'
          },
          {
            'username': 'Tommy',
            'email': 'tommy@email',
            'password': 'password',
            'passwordConfirmation': 'password',
            'name': 'Tommy B',
            'categories': [categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id],
            'image': 'https://upload.wikimedia.org/wikipedia/commons/6/69/June_odd-eyed-cat_cropped.jpg',
            'location': 'London, UK',
            'bio': 'I am training myself to cook, any tips much appreciated!'
          },
          {
            'username': 'Briony',
            'email': 'briony@email',
            'password': 'password',
            'passwordConfirmation': 'password',
            'name': 'Briony J',
            'categories': [categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id],
            'image': 'https://upload.wikimedia.org/wikipedia/commons/6/69/June_odd-eyed-cat_cropped.jpg',
            'location': 'London, UK',
            'bio': 'I love exploring new places to eat'
          },
          {
            'username': 'Fabian',
            'email': 'fabian@email',
            'password': 'password',
            'passwordConfirmation': 'password',
            'name': 'Fabian O',
            'categories': [categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id,categories[getRandom(100)]._id],
            'image': 'https://upload.wikimedia.org/wikipedia/commons/6/69/June_odd-eyed-cat_cropped.jpg',
            'location': 'London, UK',
            'bio': 'One word: CHEEEEEEEEEESE'
          },
          {
            'username': 'Felippo',
            'email': 'felippo@email',
            'password': 'password',
            'passwordConfirmation': 'password',
            'name': 'Felippo123',
            'categories': [categories[56]._id,categories[63]._id,categories[70]._id,categories[77]._id,categories[69]._id,categories[67]._id,categories[6]._id,categories[89]._id,categories[74]._id,categories[18]._id],
            'image': 'https://upload.wikimedia.org/wikipedia/commons/6/69/June_odd-eyed-cat_cropped.jpg',
            'location': 'Florence, Italy',
            'bio': 'Mamma Mia li calzone'
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
            'categories': [categories[5]._id,categories[3]._id,categories[63]._id,categories[89]._id,categories[69]._id,categories[61]._id,categories[58]._id,categories[62]._id,categories[67]._id,categories[56]._id]
          },
          {
            'restaurantName': 'Rochelle Canteen',
            'reviewHeadline': 'You won\'t be dissapointed',
            'reviewText': 'After you visit Rochelle Canteen, you’ll either want to keep the knowledge of its existence to yourself, or tell pretty much everyone you know about it. We fall squarely into the second category, because keeping great restaurants to ourselves wouldn’t be a smart plan for business. And we like business.',
            'rating': 4,
            'image': 'https://infatuation.imgix.net/media/images/reviews/rochelle-canteen/banners/1492459896.7.jpg?auto=format&h=840&w=1336',
            'user': users[getRandom(4)]._id,
            'categories': [categories[3]._id,categories[8]._id,categories[17]._id,categories[18]._id,categories[58]._id,categories[65]._id,categories[66]._id,categories[67]._id,categories[70]._id,categories[74]._id]
          },
          {
            'restaurantName': 'Katsu wrap',
            'reviewHeadline': 'Super quicks wraps',
            'reviewText': 'Really fast service and great large porcions. Service is no nonsense so be sure to be on your game when ordering. Excellent, great choice for the wraps. Katsu chicken wraps and duck wrap with sweet chilly was my choice, superb value.',
            'rating': 5,
            'image': 'https://static1.squarespace.com/static/5563f7cee4b0658666ce012e/t/5693fde30ab3776bee429359/1452540259431/',
            'user': users[getRandom(4)]._id,
            'categories': [categories[5]._id,categories[3]._id,categories[63]._id,categories[89]._id,categories[69]._id,categories[61]._id,categories[58]._id,categories[62]._id,categories[67]._id,categories[56]._id]
          },
          {
            'restaurantName': 'Kitty Fisher\'s',
            'reviewHeadline': 'Great! Very casual',
            'reviewText': 'Cheese on toast. Meat and two veg. Strawberries and ice cream. No, despite our government’s best efforts, you have not been transported back to the 1980s. This is just Kitty Fisher’s style. It’s an old fashioned British restaurant in Mayfair that makes decadence its business. Don’t be fooled by the velvet and gold detail though, because this isn’t a stuffy restaurant. Sure, the food here is rich. Almost as rich as its clientele. But it’s also incredibly delicious. Regular sounding things like welsh rarebit, risotto, and crispy potatoes are presented without fanfare, and eaten in silence. No, it’s not the silence of British awkwardness. It’s the silence of proper enjoyment. That’s what you come to Kitty Fisher’s for.',
            'rating': 3,
            'image': 'https://infatuation.imgix.net/media/images/reviews/kitty-fishers/banners/1531381427.52.jpg?auto=format&crop=focalpoint&fit=crop&fp-x=0.42&fp-y=0.18&h=840&w=1336',
            'user': users[getRandom(4)]._id,
            'categories': [categories[1]._id,categories[56]._id,categories[58]._id,categories[61]._id,categories[62]._id,categories[63]._id,categories[67]._id,categories[69]._id,categories[70]._id,categories[77]._id]
          },
          {
            'restaurantName': 'Black Axe Mangal',
            'reviewHeadline': 'Good vibes!',
            'reviewText': 'There are some places that make you smile as soon as you walk in and leave you grinning on exit - BAM is one of these. It’s a small, smoky and screechy place. Dishes are being cooked and smoked in the same room as you, hard rock is pounding out the speakers, you and your neighbours are knee-to-knee. It’s a great atmosphere, and that’s before we get to the food. The menu at BAM is quite hard to describe. Not least because it changes. Calling it fusion is probably the safest thing to do. At any one time you’ve got a glittery flatbread with cod’s roe, Chinese spiced fried guinea fowl, and miso scrambled eggs. You get the idea. Or do you? Or do we? Whatever, it’s all delicious, interesting and good fun.',
            'rating': 4,
            'image': 'https://cdn-01.independent.ie/life/travel/article37363195.ece/9061d/AUTOCROP/w620/florence.jpg',
            'user': users[getRandom(4)]._id,
            'categories': [categories[15]._id,categories[3]._id,categories[50]._id,categories[65]._id,categories[66]._id,categories[74]._id,categories[80]._id,categories[82]._id,categories[70]._id,categories[98]._id]
          },
          {
            'restaurantName': 'Barrafina Soho',
            'reviewHeadline': 'not so good',
            'reviewText': 'When I was growing up in a small village near Scotland, everyone listened to trance. The kids at my school in Newcastle were obsessed with Oakenfold and Judge Jules, and as someone who spent most of his time learning guitar in his bedroom, I didn’t get it. The first time I went to a club though, that changed. Loaded up on enough Smirnoff Ices to down a small (huge) dog, as soon as I walked into Baja Beach Club, I got trance. I just needed to experience trance first hand.',
            'rating': 2,
            'image': 'https://infatuation.imgix.net/media/images/reviews/barrafina-soho/banners/1492477372.63.jpg?auto=format&h=840&w=1336',
            'user': users[getRandom(4)]._id,
            'categories': [categories[13]._id,categories[11]._id,categories[76]._id,categories[77]._id,categories[80]._id,categories[83]._id,categories[81]._id,categories[56]._id,categories[92]._id,categories[98]._id]
          },
          {
            'restaurantName': 'Hoppers',
            'reviewHeadline': 'A delight!',
            'reviewText': 'They say that good things come to those who wait. While that doesn’t apply to things like the Chainsmokers’ new album or, say, heart surgery, it does apply to a few restaurants in Soho. And one of those restaurants is Hoppers.',
            'rating': 3,
            'image': 'https://infatuation.imgix.net/media/images/reviews/hoppers/banners/1492457759.84.jpg?auto=format&h=840&w=1336',
            'user': users[getRandom(4)]._id,
            'categories': [categories[16]._id,categories[20]._id,categories[49]._id,categories[56]._id,categories[75]._id,categories[76]._id,categories[77]._id,categories[86]._id,categories[92]._id,categories[91]._id]
          },
          {
            'restaurantName': 'P Franco',
            'reviewHeadline': 'Cosy!',
            'reviewText': 'You know those dinner parties you sometimes walk past and peer into at night? With big windows looking out onto the pavement, full of yellow lighting and the sound of laughter, cutlery and clinking. The ones that make you turn to whoever you’re walking with and say “ooh that looks nice, doesn’t it”. That’s exactly what P. Franco is. Only here you can walk in uninvited without anybody calling the police.',
            'rating': 4,
            'image': 'https://infatuation.imgix.net/media/images/reviews/p-franco/banners/1493673233.93.jpg?auto=format&h=840&w=1336',
            'user': users[getRandom(4)]._id,
            'categories': [categories[3]._id,categories[71]._id,categories[73]._id,categories[81]._id,categories[85]._id,categories[82]._id,categories[90]._id,categories[95]._id,categories[96]._id,categories[81]._id]
          },
          {
            'restaurantName': 'Gunpowder',
            'reviewHeadline': 'Yum Yum Gun Gun',
            'reviewText': 'The very best restaurants are like your oldest friend. You relive good times together. An hour with them can easily turn into three. You’ve had good times when it’s just the two of you. You’ve had even better times in a group. They’re excellent with parents or partners. You’ve got very, very drunk together. On the cheap stuff, on the expensive stuff, on any stuff. You don’t spend all your time in a restaurant or with a friend like this. Months pass where you go to other places, and see other people. But it’s only so long until you’re back together and, probably, ordering a bottle. This is why we’re updating our review of Noble Rot. Because it still feels like our oldest friend in London.',
            'rating': 4,
            'image': 'https://infatuation.imgix.net/media/images/reviews/gunpowder/banners/1492721083.49.jpg?auto=format&h=840&w=1336',
            'user': users[getRandom(4)]._id,
            'categories': [categories[7]._id,categories[18]._id,categories[60]._id,categories[61]._id,categories[63]._id,categories[69]._id,categories[81]._id,categories[83]._id,categories[91]._id,categories[70]._id]
          },
          {
            'restaurantName': 'GBK',
            'reviewHeadline': 'Tasty burguer!',
            'reviewText': 'You have to go here - burgers to die for',
            'rating': 4,
            'image': 'https://cdn.images.express.co.uk/img/dynamic/22/590x/secondary/burger-679161.jpg',
            'user': users[getRandom(4)]._id,
            'categories': [categories[2]._id,categories[64]._id,categories[76]._id,categories[77]._id,categories[91]._id,categories[18]._id,categories[68]._id,categories[69]._id,categories[58]._id,categories[82]._id]
          },
          {
            'restaurantName': 'Pizza express',
            'reviewHeadline': 'Know what you\'re getting',
            'reviewText': 'thinny pizza',
            'rating': 2,
            'image': 'http://cdn.ltstatic.com/2008/July/JQ718524_942long.jpg',
            'user': users[getRandom(4)]._id,
            'categories': [categories[65]._id,categories[76]._id,categories[77]._id,categories[57]._id,categories[58]._id,categories[86]._id,categories[84]._id,categories[91]._id,categories[82]._id,categories[70]._id]
          },
          {
            'restaurantName': 'The Table Cafe',
            'reviewHeadline': 'Delicioius vegy food',
            'reviewText': 'Really good for groups, will come back.',
            'rating': 4,
            'image': 'http://www.breakfastlondon.co.uk/wp-content/uploads/2015/07/TheTable049web-1024x682.jpg',
            'user': users[getRandom(4)]._id,
            'categories': [categories[5]._id,categories[3]._id,categories[63]._id,categories[89]._id,categories[69]._id,categories[61]._id,categories[58]._id,categories[62]._id,categories[67]._id,categories[56]._id]
          },
          {
            'restaurantName': 'Pomona\'s',
            'reviewHeadline': 'Pom Yum!',
            'reviewText': 'It’s pretty much a distillation of everything that sets my teeth on edge',
            'rating': 4,
            'image': 'https://resizer.otstatic.com/v2/photos/huge/24864785.jpg',
            'user': users[getRandom(4)]._id,
            'categories': [categories[16]._id,categories[20]._id,categories[49]._id,categories[56]._id,categories[75]._id,categories[76]._id,categories[77]._id,categories[86]._id,categories[92]._id,categories[91]._id]
          },
          {
            'restaurantName': 'Monsieur Le Duck',
            'reviewHeadline': 'Great name, great restaurant',
            'reviewText': 'Something different',
            'rating': 4,
            'image': 'https://media-cdn.tripadvisor.com/media/photo-s/15/ef/43/3a/le-frontage.jpg',
            'user': users[getRandom(4)]._id,
            'categories': [categories[5]._id,categories[3]._id,categories[63]._id,categories[89]._id,categories[69]._id,categories[61]._id,categories[58]._id,categories[62]._id,categories[67]._id,categories[56]._id]
          },
          {
            'restaurantName': 'Bottega Prelibato',
            'reviewHeadline': 'Italian Restaurant',
            'reviewText': 'Casual Italian with a rustic-meets-industrial decor, place-mat menus and shelves of Italian goods.',
            'rating': 2,
            'image': 'https://static1.squarespace.com/static/55ffd803e4b0d089371453b0/56047169e4b0fd989ca3535e/5604728ee4b075ee2ef8494c/1443132047366/Bottega-Prelibato-Lighter---52.jpg',
            'user': users[getRandom(4)]._id,
            'categories': [categories[65]._id,categories[76]._id,categories[77]._id,categories[57]._id,categories[58]._id,categories[86]._id,categories[84]._id,categories[91]._id,categories[82]._id,categories[70]._id]
          },
          {
            'restaurantName': 'Magic Falafel',
            'reviewHeadline': 'Great for veggies',
            'reviewText': 'Very tasty Falafel, repeat for sure!',
            'rating': 2,
            'image': 'http://cdn.ltstatic.com/2008/July/JQ718524_942long.jpg',
            'user': users[getRandom(4)]._id,
            'categories': [categories[10]._id,categories[12]._id,categories[55]._id,categories[52]._id,categories[54]._id,categories[58]._id,categories[75]._id,categories[76]._id,categories[77]._id,categories[97]._id]
          },
          {
            'restaurantName': 'The Cafe Table',
            'reviewHeadline': 'Supremo!',
            'reviewText': 'Delicioius vegy food. Loved it',
            'rating': 4,
            'image': 'https://blackbarnrestaurant.com/wp-content/uploads/2018/03/MZ_Web_blackbarncafe_001.jpg',
            'user': users[getRandom(4)]._id,
            'categories': [categories[5]._id,categories[3]._id,categories[65]._id,categories[61]._id,categories[58]._id,categories[64]._id,categories[87]._id,categories[75]._id,categories[70]._id,categories[68]._id]
          },
          {
            'restaurantName': 'The steak specialist',
            'reviewHeadline': 'A variety of dining rooms to suit your vibe',
            'reviewText': 'The steak specialist that started as a pop up in Shoreditch has since opened Flatiron Beak Street, Denmark Street and Henrietta Street and now its returned to where it all started',
            'rating': 2,
            'image': 'https://images.squaremeal.co.uk/cloud/restaurants/11188/flatiron-shoreditch-2016-4-web-interior.jpg?w=900&h=600&fit=crop',
            'user': users[getRandom(4)]._id,
            'categories': [categories[3]._id,categories[62]._id,categories[70]._id,categories[75]._id,categories[76]._id,categories[77]._id,categories[87]._id,categories[89]._id,categories[91]._id,categories[92]._id,categories[96]._id,categories[98]._id]
          },
          {
            'restaurantName': 'Santa Maria',
            'reviewHeadline': 'Tranditional and delicious',
            'reviewText': 'For pizza traditionalists, Santa Maria do it like in old Napoli. The San Daniele doesn’t have any tomato sauce, but is topped instead with cherry tomatoes, rocket, parmesan shavings and generous amounts of excellent quality San Daniele Parma ham.',
            'rating': 4,
            'image': 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/02/07/16/santa-maria.jpg?w660',
            'user': users[getRandom(4)]._id,
            'categories': [categories[8]._id,categories[48]._id,categories[65]._id,categories[59]._id,categories[76]._id,categories[77]._id,categories[85]._id,categories[88]._id,categories[94]._id,categories[96]._id]
          },
          {
            'restaurantName': 'Brindisa',
            'reviewHeadline': 'Set the table for the perfect feast',
            'reviewText': 'Prepare to wait in line for this Borough Market classic: a ciabatta roll stuffed to bursting with smoky chorizo fresh from the grill, roasted red peppers and rocket. It’s a good to start the day as it is to soak up a few pints later on.',
            'rating': 3,
            'image': 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2017/06/23/10/brindisa-chorizo.jpg?w660',
            'user': users[getRandom(4)]._id,
            'categories': [categories[10]._id,categories[13]._id,categories[33]._id,categories[49]._id,categories[50]._id,categories[53]._id,categories[76]._id,categories[77]._id,categories[80]._id,categories[81]._id,categories[93]._id]
          },
          {
            'restaurantName': 'Club Mexicana',
            'reviewHeadline': '100% Vegan Mexican street food',
            'reviewText': 'Vegan food can, however, get down and dirty with the best of them. This punchy, spicy jackfruit taco from Club Mexicana gives pulled pork a serious run for its money.',
            'rating': 5,
            'image': 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2017/01/10/11/club-mexicana-4.jpg?w660',
            'user': users[getRandom(4)]._id,
            'categories': [categories[0]._id,categories[11]._id,categories[17]._id,categories[18]._id,categories[47]._id,categories[56]._id,categories[75]._id,categories[76]._id,categories[77]._id,categories[86]._id,categories[93]._id,categories[95]._id]
          },
          {
            'restaurantName': 'Holborn Dining Rooms',
            'reviewHeadline': 'A variety of dining rooms to suit your vibe',
            'reviewText': 'You can take your pick from Calum Franklin’s pies at Holborn Dining Room, because they are all outstanding. The chef is pastry wizard, who works his magic across a range that includes an anything but humble pork pie, and seasonal specials such as curried mutton pie with mango chutney.',
            'rating': 3,
            'image': 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2017/06/23/10/pies-holborn.jpg?w660',
            'user': users[getRandom(4)]._id,
            'categories': [categories[3]._id,categories[62]._id,categories[70]._id,categories[75]._id,categories[76]._id,categories[77]._id,categories[87]._id,categories[89]._id,categories[91]._id,categories[92]._id,categories[96]._id,categories[98]._id]
          },
          {
            'restaurantName': 'Duck & Waffle',
            'reviewHeadline': '24 hourse with a view to kill',
            'reviewText': 'A warm, chewy waffle topped with crisp-skinned confit duck and a runny egg, drizzled in maple syrup. Convinced yet? Naturally there are some pretty impressive views, too...',
            'rating': 5,
            'image': 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2016/02/17/12/30-duck-waffle.jpg?w660',
            'user': users[getRandom(4)]._id,
            'categories': [categories[3]._id,categories[75]._id,categories[76]._id,categories[77]._id,categories[91]._id,categories[98]._id]
          },
          {
            'restaurantName': 'Bao',
            'reviewHeadline': 'If you like Bao buns, look no further',
            'reviewText': 'For steamed buns, you can’t beat Bao. Their classic sees a pillowy-soft bun filled with slow-braised pork belly, coarse peanut powder and shredded coriander. Worth queuing for.',
            'rating': 5,
            'image': 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2016/02/17/12/30-bao.jpg?w660',
            'user': users[getRandom(4)]._id,
            'categories': [categories[1]._id,categories[9]._id,categories[16]._id,categories[76]._id,categories[77]._id,categories[90]._id,categories[81]._id]
          },
          {
            'restaurantName': 'Dominique Ansel Bakery',
            'reviewHeadline': 'The home of the cronut and other delicious treats',
            'reviewText': 'When New York master baker Dominique Ansel opened his first European site in Victoria, this hybrid Franken Pastry that merges a croissant and a doughnut led to queues of several hours. Bite into its fluffy, buttery, flaky goodness and you’ll instantly understand the appeal.',
            'rating': 4,
            'image': 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2017/06/23/11/cronut.jpg?w660',
            'user': users[getRandom(4)]._id,
            'categories': [categories[3]._id,categories[5]._id,categories[59]._id,categories[67]._id,categories[69]._id,categories[71]._id,categories[72]._id,categories[82]._id,categories[90]._id,categories[93]._id,categories[95]._id]
          },
          {
            'restaurantName': 'Kricket',
            'reviewHeadline': 'Modern Indian',
            'reviewText': 'Now settled in Soho after outgrowing the Brixton shipping container they started out in, Kricket offers more dishes than ever to please spice fans. This light and bright exemplary version of bhel puri is still top of the pile.',
            'rating': 5,
            'image': 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2016/02/17/12/30-kricket.jpg?w660',
            'user': users[getRandom(4)]._id,
            'categories': [categories[7]._id,categories[60]._id,categories[76]._id,categories[77]._id,categories[79]._id,categories[81]._id,categories[83]._id,categories[92]._id]
          }

        ]),
        Recipe.create([
          {
            'name': 'Filo fish pies with pea-spiked mash',
            'description': 'Ultimate health food',
            'ingredients': '2 cloves of garlic \n2 leeks',
            'method': 'Preheat the oven to gas 6, 200°C, fan 180°C. Peel and finely slice the garlic, wash and finely slice the leeks, then place in a large pan on a medium heat with 1 tsp of oil. Cook for 10 mins, or until softened, stirring regularly.',
            'image': 'https://realfood.tesco.com/media/images/RFO-1400x919-Filo-fish-pies-with-pea-spiked-mash-3b1120a9-8e50-4e39-8bea-aecae3a42675-0-1400x919.jpg',
            'user': users[getRandom(4)]._id,
            'categories': [categories[83]._id,categories[55]._id,categories[49]._id,categories[50]._id,categories[84]._id,categories[76]._id,categories[77]._id,categories[68]._id]
          },
          {
            'name': 'Barbecue Chicken with Coriander Couscous and Elderflower Roasted Vegetables',
            'description': 'So good for summer.',
            'ingredients': '4 chicken breasts, or a selection of thighs and drumsticks, 2 peppers, (1 red and 1 yellow)',
            'method': 'Peel and quarter the red onion, cut the courgette into thick slices. Place on a baking tray with the cherry tomatoes. Pour over the Bottlegreen Elderflower Cordial and 1 tbsp of the olive oil, toss until coated. Cook for around 20-30 minutes until softened and beginning to char a little.',
            'image': 'https://www.ocado.com/cmscontent/recipe_image_med/348445.jpg?Iiqk',
            'user': users[getRandom(4)]._id,
            'categories': [categories[64]._id,categories[3]._id,categories[56]._id,categories[62]._id,categories[76]._id,categories[77]._id,categories[81]._id,categories[80]._id,categories[83]._id]
          },
          {
            'name': 'Barbecue Trout with a Ginger & Lemongrass Glaze',
            'description': 'Served with any barbecued fish',
            'ingredients': '4 whole prepared trout, 6 tbsp Bottlegreen ginger & lemongrass cordial',
            'method': 'Barbecue or grill the fish for approximately 15-20 minutes, depending on size, turning halfway through cooking. The fish will flake easily when cooked.',
            'image': 'https://www.ocado.com/cmscontent/recipe_image_med/348117.jpg?Iiqk',
            'user': users[getRandom(4)]._id,
            'categories': [categories[64]._id,categories[7]._id,categories[56]._id,categories[62]._id,categories[76]._id,categories[77]._id,categories[81]._id,categories[80]._id,categories[83]._id]
          },
          {
            'name': 'Barbecued Steak with Peach Relish',
            'description': 'This recipe is a great one for the barbecue.',
            'ingredients': '4 beef steaks, sirloin, rump or rib-eye',
            'method': 'Cook the steaks according to your preference on a prepared barbecue or preheated grill.',
            'image': 'https://www.ocado.com/cmscontent/recipe_image_med/259924.jpg?HZ5E',
            'user': users[getRandom(4)]._id,
            'categories': [categories[64]._id,categories[3]._id,categories[62]._id,categories[76]._id,categories[77]._id,categories[56]._id,categories[55]._id,categories[54]._id,categories[68]._id,categories[83]._id]
          },
          {
            'name': 'Bean and Pesto Salad',
            'description': 'Serve this salad alongside vegetarian grills.',
            'ingredients': '420g can green beans, drained, rinsed. 2 x 125g cans four bean mix, drained, rinsed, 250g cherry tomatoes, halved. 1/3 cup sundried tomatoes, sliced. 1/3 cup kalamata olives, halved. Finely sliced fresh basil leaves, to serve',
            'method': 'Chop the spring onions into rounds and cut the pepper into strips. Add to the bowl, sprinkle in your chosen herbs and toss the bean salad together, seasoning to taste.',
            'image': 'https://www.ocado.com/cmscontent/recipe_image_med/272698.jpg?HjvE',
            'user': users[getRandom(4)]._id,
            'categories': [categories[81]._id,categories[80]._id,categories[58]._id,categories[76]._id,categories[77]._id,categories[54]._id,categories[55]._id,categories[49]._id,categories[48]._id,categories[56]._id]
          },
          {
            'name': 'Aubergine Parmigano',
            'description': 'This is a firm family favourite, a comfort food that I serve with crusty bread and a green salad on cold days',
            'ingredients': '3 aubergines. 400g mozzarella, ripped into pieces. 1 jar tomato passata. 80g parmesan, shaved. 1 bunch fresh basil. 2 tbsps olive oil, for cooking. 1 pinch ground black pepper. 2 tbsps salt, plus one pinch.',
            'method': 'Chop the spring onions into rounds and cut the pepper into strips. Add to the bowl, sprinkle in your chosen herbs and toss the bean salad together, seasoning to taste.',
            'image': 'https://www.ocado.com/cmscontent/recipe_image_med/92771.jpg?C_PE',
            'user': users[getRandom(4)]._id,
            'categories': [categories[81]._id,categories[80]._id,categories[58]._id,categories[76]._id,categories[77]._id,categories[54]._id,categories[55]._id,categories[49]._id,categories[48]._id,categories[56]._id]
          },
          {
            'name': 'Beef Burger with Smoked Cheese',
            'description': 'A delicious balancing act of spicy, creamy, meaty, smoky and sour.',
            'ingredients': '4 quarter pounder beef burgers. 4 slices oak smoked cheddar. 4 seeded burger buns. 60g gherkins, sliced. ¼ red cabbage, finely sliced. 1 red onion, finely sliced. 1 tbsp mayonnaise. 1 lime, juice of. 3 green chillies, deseeded and chopped. 1 banana shallot, chopped. 10g coriander',
            'method': 'Cook the burgers on a hot barbecue for 6 mins, turning every 2 mins. Then lay the slices of smoked cheese on top and cook for 2 mins with the lid on to melt the cheese.',
            'image': 'https://www.ocado.com/cmscontent/recipe_image_med/2682693.jpg?RIgk',
            'user': users[getRandom(4)]._id,
            'categories': [categories[2]._id,categories[50]._id,categories[76]._id,categories[77]._id,categories[87]._id,categories[95]._id,categories[85]._id,categories[83]._id,categories[74]._id]
          },
          {
            'name': 'BBQ Pulled Jackfruit with Sweetcorn Salsa',
            'description': 'Fast and full of flavour, this pulled jackfruit with sweetcorn salsa will become a firm family favourite.',
            'ingredients': '1 tbsp sunflower oil. 2 onions, diced. 2 green peppers, finely sliced. 400g jackfruit, drained and rinsed. 2 tsp mild chilli powder. 2 tsp smoked paprkia. 1 tsp cinnamon. 4 tbsp Worcester sauce, (ensure it’s vegan, anchovy free). 1 large handful flat leaf parsley, roughly chopped. ½ tsp smoked salt. 4 tbsp canned sweetcorn, drained. 2 avocados, peeled and sliced. 1 large handful fresh coriander, leaves finely chopped. 2 limes, juiced. 4 burger buns, sliced in half. 2 tbsp olive oil',
            'method': 'Cook the burgers , add jackfruit. In the meantime prepare the sweetcorn slasa. Brush the non-seed side of the bread buns with olive oil and place onto a hot griddle pan. diced avoado and coriander. Load the BBQ pulled jackfruit into buns followed by the sweetcorn salsa',
            'image': 'https://www.ocado.com/cmscontent/recipe_image_med/2907638.jpg?SdQA',
            'user': users[getRandom(4)]._id,
            'categories': [categories[2]._id,categories[50]._id,categories[76]._id,categories[77]._id,categories[87]._id,categories[95]._id,categories[85]._id,categories[83]._id,categories[74]._id]
          },
          {
            'name': 'Blueberry Lemonade',
            'description': 'You can also add basil or mint to this gorgeously fresh-tasting pretty pink drink.',
            'ingredients': '200g golden caster sugar.200g Blueberries. Lemon juice. Honey or sugar. Water',
            'method': 'In a food processor or high-speed blender, whizz the blueberries, sugar, lemon juice and 250ml water together until the berries are completely puréed and the sugar is dissolved.',
            'image': 'https://www.ocado.com/cmscontent/recipe_image_med/2624030.jpg?Q2Ok',
            'user': users[getRandom(4)]._id,
            'categories': [categories[70]._id,categories[81]._id,categories[56]._id,categories[55]._id,categories[57]._id,categories[49]._id]
          },
          {
            'name': 'Carrot and Beetroot Salad',
            'description': 'A great seasonal salad courtesy of journalist, blogger and food campaigner Elisabeth Winkler.',
            'ingredients': '600g carrots, 600g raw beetroot',
            'method': 'Gently heat the remaining teaspoon of olive oil in a small frying pan and toast the seeds for 3–4 minutes over a moderate heat, stirring frequently to prevent sticking. Add the soy sauce at the end of the cooking, if using. Most of the sauce will evaporate, leaving a salty taste and extra browning for the seeds. Store the toasted seeds in a jar with a lid if preparing the day before.',
            'image': 'https://www.ocado.com/cmscontent/recipe_image_med/247459.jpg?HOpE',
            'user': users[getRandom(4)]._id,
            'categories': [categories[81]._id,categories[80]._id,categories[58]._id,categories[76]._id,categories[77]._id,categories[54]._id,categories[55]._id,categories[49]._id,categories[48]._id,categories[56]._id]
          },
          {
            'name': 'Charred Corn Salad',
            'description': 'The smoky flavour of the charred corn makes this dish a perfect match for grilled meat.',
            'ingredients': '20g fresh basil, 4 fresh corn , husks removed',
            'method': 'To make the vinaigrette, pulse the basil and garlic in a blender until the basil starts to break down. Add the vinegar and keep pulsing while adding the oil in a steady stream until smooth.',
            'image': 'https://www.ocado.com/cmscontent/recipe_image_med/2053812.jpg?K8TE',
            'user': users[getRandom(4)]._id,
            'categories': [categories[81]._id,categories[80]._id,categories[58]._id,categories[76]._id,categories[77]._id,categories[78]._id,categories[55]._id,categories[49]._id,categories[48]._id,categories[56]._id]
          },
          {
            'name': 'Butterflied Leg of Welsh Lamb with Orange, Soy and Thyme',
            'description': 'This is a delicious summer dish that is packed with flavour',
            'ingredients': '1 leg of Welsh lamb, bone removed and butterflied, weighing roughly 1.35kg in total, 1 orange, rind and juice removed',
            'method': 'Either ask your butcher to butterfly the leg of lamb or, follow our step by step guide and have a go yourself. Take two long metal skewers and thread through the meat corner to corner. This not only holds the meat together, but believe it or not, also helps it cook.',
            'image': 'https://www.ocado.com/cmscontent/recipe_image_med/239366.jpg?HEzE',
            'user': users[getRandom(4)]._id,
            'categories': [categories[64]._id,categories[3]._id,categories[62]._id,categories[76]._id,categories[77]._id,categories[56]._id,categories[55]._id,categories[54]._id,categories[68]._id,categories[83]._id]
          },
          {
            'name': 'Chorizo Flatbreads with Rocket Pesto',
            'description': 'Use the softer cooking chorizo for this peppery, punchy barbecue sizzler.',
            'ingredients': '60g rocket, 25g for the pesto, 2 tbsp pine nuts, toasted, for the pesto',
            'method': 'For the pesto, pulse 1 garlic clove, 25g rocket, 25g basil, 2tbsp toasted pine nuts and 80ml extra virgin olive oil in a blender. Stir in 2tbsp grated parmesan and season.',
            'image': 'https://www.ocado.com/cmscontent/recipe_image_med/2425682.jpg?PGFE',
            'user': users[getRandom(4)]._id,
            'categories': [categories[10]._id,categories[55]._id,categories[50]._id,categories[53]._id,categories[54]._id,categories[76]._id,categories[77]._id,categories[80]._id,categories[81]._id,categories[82]._id]
          },
          {
            'name': 'Chipotle BBQ Ribs',
            'description': 'This recipe is quick to prepare',
            'ingredients': '2 kg pork ribs, 6 tbsp Tabasco Chipotle Sauce',
            'method': 'Combine the remaining 2 tbsp of Tabasco Chipotle Sauce with the baroque sauce and spread evenly over both sides of the ribs.',
            'image': 'https://www.ocado.com/cmscontent/recipe_image_med/396727.jpg?JTLk',
            'user': users[getRandom(4)]._id,
            'categories': [categories[64]._id,categories[3]._id,categories[56]._id,categories[62]._id,categories[76]._id,categories[77]._id,categories[81]._id,categories[80]._id,categories[83]._id]
          },
          {
            'name': 'Gran Luchito Smoked Chilli Honey Bacon Onion Rings',
            'description': 'Tasty take on an onion ring',
            'ingredients': '2 red onions, sliced into rings,10 rashers streaky bacon',
            'method': 'If you have them, put a skewer through the rings and suspend over an oven-proof dish. If not, just bake them on a tray on foil/baking paper.',
            'image': 'https://www.ocado.com/cmscontent/recipe_image_med/2410931.jpg?O61E',
            'user': users[getRandom(4)]._id,
            'categories': [categories[52]._id,categories[55]._id,categories[56]._id,categories[54]._id,categories[51]._id,categories[80]._id,categories[81]._id,categories[76]._id,categories[77]._id,categories[3]._id]
          },
          {
            'name': 'Corn on the Cob with Smoky Chilli',
            'description': 'Try giving traditional corn on the cob a zingy twist ',
            'ingredients': '4 sweetcorn , leaves and threads removed',
            'method': 'While the corn is cooking beat the butter with the pepper sauce, lime zest and coriander until thoroughly mixed. Chill until ready to serve.',
            'image': 'https://www.ocado.com/cmscontent/recipe_image_med/46132.jpg?TsA',
            'user': users[getRandom(4)]._id,
            'categories': [categories[83]._id,categories[55]._id,categories[49]._id,categories[50]._id,categories[84]._id,categories[76]._id,categories[77]._id,categories[68]._id]
          },
          {
            'name': 'Foil-baked Strawberries with Pimm\'s and Clotted Cream',
            'description': 'This summery dessert combines three classic English ingredients',
            'ingredients': '50g caster sugar,800g strawberries',
            'method': 'In a bowl, mix the strawberries with the sugar and Pimm\'s. Divide the strawberries evenly between the foil squares. Begin to fold the edges up to make a parcel before spooning in the remaining Pimm\'s. Close each parcel, sealing the edges tightly.',
            'image': 'https://www.ocado.com/cmscontent/recipe_image_med/49311.jpg?TsA',
            'user': users[getRandom(4)]._id,
            'categories': [categories[3]._id,categories[96]._id,categories[95]._id,categories[91]._id,categories[90]._id,categories[93]._id,categories[3]._id,categories[69]._id]
          },
          {
            'name': 'Chicken curry in a hurry',
            'description': 'The name says it all',
            'ingredients': '1 cup white rice \n1 1/2 tablespoons olive oil \n1 small yellow onion, thinly sliced \n2 teaspoons curry powder \n1/2 cup plain yogurt \n3/4 cup heavy cream \n1/2 teaspoon kosher salt \n1/4 teaspoon black pepper \n1 14.5-ounce can diced tomatoes, drained (optional) meat from 1 rotisserie chicken, sliced or shredded \n1/4 cup fresh cilantro leaves, roughly chopped',
            'method': 'Step 1: Cook the rice according to the package directions. \nStep 2: Heat the oil in a skillet over medium-low heat. Add the onion and cook, stirring occasionally, for 7 minutes. \nStep 3: Sprinkle with the curry powder and cook, stirring, for 1 minute. \nStep 4: Add the yogurt and cream and simmer gently for 3 minutes. Stir in the salt, pepper, and tomatoes (if desired). Remove from heat. \nStep 5: Divide the rice and chicken among individual bowls, spoon the sauce over the top, and sprinkle with the cilantro.',
            'image': 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.realsimple.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Frs_medium_image%2Fpublic%2Fchicken-curry_0.jpg%3Fitok%3DiRNX6FHh&w=200&c=sc&poi=face&q=85',
            'user': users[getRandom(4)]._id,
            'categories': [categories[7]._id,categories[60]._id,categories[76]._id,categories[77]._id,categories[83]._id,categories[90]._id]
          },
          {
            'name': 'Southwestern Beef Chili with corn',
            'description': 'Packed with flavor but not too spicy',
            'ingredients': '2 carrots \n1 onion \n1 bell pepper \n1/2 pound ground beef \n2 tablespoons tomato paste \n2 15-ounce cans black beans \n1 tablespoon chili powder kosher salt and black pepper \n1//n2 cup corn kernels (from 1 ear, or frozen and thawed) \n1/2 cup grated Cheddar (2 ounces)',
            'method': 'Step 1: Heat the oil in a large saucepan over medium-high heat. Add the carrots, onion, and poblano and cook, stirring, for 3 minutes. \nStep 2: Add the beef and cook, breaking it up with a spoon, until no longer pink, 3 to 5 minutes. \nStep 3: Add the tomato paste and cook, stirring, until it is slightly darkened, 1 minute. \nStep 4: Stir in the beans, chili powder, 3 cups water, ½ teaspoon salt, and ¼ teaspoon pepper. \nStep 5: Simmer over medium heat until the vegetables are tender, 8 to 10 minutes. Stir in the corn. \nStep 6: Divide the chili among bowls and top with the Cheddar',
            'image': 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.realsimple.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Frs_medium_image%2Fpublic%2Fsouthwestern-beef-chili.jpg%3Fitok%3DT7BjJvVG%261540235518&w=200&c=sc&poi=face&q=85',
            'user': users[getRandom(4)]._id,
            'categories': [categories[2]._id,categories[50]._id,categories[76]._id,categories[77]._id,categories[79]._id,categories[85]._id,categories[90]._id]
          },
          {
            'name': 'Spanish Ommelette with potatoes and chorizo',
            'description': 'The idea of breakfast for dinner is nothing new',
            'ingredients': '3 tablespoons extra-virgin olive oil \n1 large yellow onion \n2 ounces Spanish chorizo (cured sausage), sliced into thin half-moons \n3/4 pound red potatoes, diced \nkosher salt and pepper \n3/4 cup flat-leaf parsley, roughly chopped \n10 large eggs, beaten \n1 cup (4 ounces) shredded Manchego or sharp Cheddar \n1 small head green-leaf lettuce \n1/2 small red onion, thinly sliced',
            'method': 'Step 1: Heat oven to 400° F. Heat 1 tablespoon of the oil in a large ovenproof skillet over medium heat. Add the yellow onion and cook for 5 minutes. \nStep 2: Add the chorizo, potatoes, and ½ teaspoon each salt and pepper and cook, covered, stirring occasionally, until the potatoes are tender, 10 minutes. \nStep 3: Stir in the parsley. Pour in the eggs and stir to distribute the ingredients. Sprinkle with the cheese and transfer to oven. \nStep 4: Bake the omelet until puffed and brown around the edges and a knife comes out clean, about 15 minutes./nStep 5: Divide the lettuce and red onion among plates and drizzle with the remaining oil. Cut the omelet into wedges and serve with the salad.',
            'image': 'https://img.taste.com.au/UHOXSbyA/taste/2016/11/spanish-omelette-81051-1.jpeg',
            'user': users[getRandom(4)]._id,
            'categories': [categories[3]._id,categories[96]._id,categories[95]._id,categories[91]._id,categories[90]._id,categories[93]._id,categories[3]._id,categories[69]._id]
          },
          {
            'name': 'Creamy Squash linguine',
            'description': 'Quick and easy, and deliciously creamy',
            'ingredients': '350g chopped butternut squash \n3 peeled garlic cloves \n3 tbsp olive oil \n350g linguine \nsmall bunch sage',
            'method': '1: Heat oven to 200C/180C fan/gas 6. Put the squash and garlic on a baking tray and drizzle with the olive oil. Roast for 35-40 mins until soft. Season. \n2: Cook the pasta according to pack instructions. Drain, reserving the water. Use a stick blender to whizz the squash with 400ml cooking water. Heat some oil in a frying pan, fry the sage until crisp, then drain on kitchen paper. Tip the pasta and sauce into the pan and warm through. Scatter with sage.',
            'image': 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2017/10/creamy_squash_linguine.jpg?itok=FlkVjdXw',
            'user': users[getRandom(4)]._id,
            'categories': [categories[0]._id,categories[8]._id,categories[18]._id,categories[48]._id,categories[55]._id,categories[57]._id,categories[76]._id,categories[78]._id,categories[84]._id, categories[85]._id, categories[90]._id]
          },
          {
            'name': 'Falafel burgers',
            'description': 'Whizz up chickpeas with garlic, spices and herbs to make delicious vegetarian patties for lunch or dinner',
            'ingredients': '250g chickpeas from a can \n1 medium onion, finely chopped \n2 garlic cloves, crushed \n2 tsp ground coriander \n2 tsp ground cumin \nsmall pack flat-leaf parsley, chopped \n2 rounded tbsp plain flour \n2 tbsp vegetable oil \n100g hummus \n4 burger buns, cut in half \nwatercress, to serve',
            'method': '1: Drain, rinse and dry the chickpeas thoroughly, then tip into the bowl of a food processor. Pulse until lightly broken up into coarse crumbs. \n2: Add the onion, garlic, spices, parsley, flour and some seasoning, and continue to pulse until combined. Using your hands, gently form the mixture into 4 patties about 10cm in diameter and 2cm thick. \n3: In a large pan, heat the oil and fry the falafels on each side for 2-3 mins or until golden (you may need to do this in batches). Lightly griddle the burger buns on the cut side in a griddle pan, or toast under the grill. \n4:Spread one side of each bun with hummus, top with a falafel burger, add a handful of watercress, then pop the remaining bun half on top.',
            'image': 'https://www.bbcgoodfood.com/sites/default/files/styles/teaser_item/public/recipe_images/falafel-burgers.jpg?itok=2YOvgn5X',
            'user': users[getRandom(4)]._id,
            'categories': [categories[2]._id,categories[18]._id,categories[20]._id,categories[59]._id,categories[66]._id,categories[74]._id,categories[93]._id,categories[76]._id,categories[77]._id]
          },
          {
            'name': 'Spotted Dick',
            'description': 'This summery dessert combines three classic English ingredients',
            'ingredients': '250g self-raising flour \npinch of salt \n125g shredded suet \n180g currant \n80g caster sugar \nfinely grated zest 1 lemon \nfinely grated zest 1 small orange \n150ml whole milk, plus 2-3 tbsp \ncustard, to serve',
            'method': '1: Put the flour and salt in a bowl. Add the suet, currants, sugar, lemon and orange zest. \n2: Pour in 150ml milk and mix to a firm but moist dough, adding the extra milk if necessary. \n3: Shape into a fat roll about 20cm long. Place on a large rectangle of baking parchment. Wrap loosely to allow for the pudding to rise and tie the ends with string like a Christmas cracker. \n4: Place a steamer over a large pan of boiling water, add the pudding to the steamer, cover and steam for 1½ hours. Top up the pan with water from time to time. \n5: Remove from the steamer and allow to cool slightly before unwrapping. Serve sliced with custard.',
            'image': 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1130451_11.jpg?itok=akFgTfeO',
            'user': users[getRandom(4)]._id,
            'categories': [categories[3]._id,categories[87]._id,categories[69]._id]
          }
        ])
      ])
    })
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
