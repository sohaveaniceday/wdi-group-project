const User = require('../models/user')

function showRoute(req, res) {
  return User
    .findById(req.params.id)
    .populate('categories recipes reviews')
    // .populate('recipes')
    .then(user => {
      return Promise.all([
        user,
        User.getFriends(user)
      ])
    })
    .then(data => {
      const [ user , friends ] = data
      if (!user) return res.status(404).json({ message: 'Not Found'})
      res.status(200).json({ user, friends })
    })
    .catch(err => res.json(err))
}

function editRoute(req, res) {
  return User
    .findById(req.params.id)
    .then(user => {
      if (!user) return res.status(404).json({ message: 'Not Found'})
      Object.assign(user, req.body)
      return user.save()
    })
    .then(recipe => res.status(200).json(recipe))
    .catch(err => res.json(err))
}

function userFriendRequest(req, res){
  User
    .requestFriend(req.currentUser._id, req.body.id)
    .then(() => res.status(201).json({ message: 'Request Made'}))
    .catch(err => console.log(err))
}

// function acceptFriendRequest(req, res){
//   User
//     .requestFriend(req.body._id, req.currentUser._id)
//     .then(() => res.status(201).json({ message: 'Request Made'}))
//     .catch(err => console.log(err))
// }

// User.requestFriend(user2._id, user1._id)
//   .then(() => console.log('Request accepted'));
//
// User.getFriends(user2)
//   .then((friendships) => {
//     console.log(friendships); // [{ status: 'pending', added: <Date added>, friend: user1 }]
//   });

function getFriends(req, res) {
  User
    .getFriends(req.currentUser)
    .then(friends => res.json(friends))
    .catch(err => console.log(err))
}



module.exports = {
  show: showRoute,
  edit: editRoute,
  friendRequest: userFriendRequest,
  // acceptRequest: acceptFriendRequest,
  getFriends: getFriends
}
