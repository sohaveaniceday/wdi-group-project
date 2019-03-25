const User = require('../models/user')

User.requestFriend(user1._id, user2._id)
  .then(() => console.log('Request sent'))

User.getFriends(user1)
  .then((friendships) => {
    console.log(friendships) // [{ status: 'requested', added: <Date added>, friend: user2 }]
  })

User.getFriends(user2)
  .then((friendships) => {
    console.log(friendships) // [{ status: 'pending', added: <Date added>, friend: user1 }]
  })

User.requestFriend(user2._id, user1._id)
  .then(() => console.log('Request accepted'))

User.getFriends(user1)
  .then((friendships) => {
    console.log(friendships) // [{ status: 'accepted', added: <Date added>, friend: user2 }]
  })

User.getFriends(user2)
  .then((friendships) => {
    console.log(friendships) // [{ status: 'accepted', added: <Date added>, friend: user1 }]
  })

User.removeFriend(user1, user2)
  .then(() => console.log('Friendship removed'))
  // or vice-versa
User.removeFriend(user2, user1)
  .then(() => console.log('Friendship removed'))

user.getFriends(options).then((friends) => console.log(friends))
user.requestFriend(otheruser).then(() => ...)
user.removeFriend(badfriend).then(() => ...)
