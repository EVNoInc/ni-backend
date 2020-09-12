const mongoose = require('mongoose');

const user1Id = new mongoose.Types.ObjectId();
const user2Id = new mongoose.Types.ObjectId();
const user3Id = new mongoose.Types.ObjectId();

const users = {
  model: 'User',
  documents: [
    {
      _id: user1Id,
      username: 'macavity',
      password: 'mystery',
      tokens: [],
    },
    {
      _id: user2Id,
      username: 'skimbleshanks',
      password: 'railroad',
      tokens: [],
    },
    {
      _id: user3Id,
      username: 'mistoffelees',
      password: 'conjure',
      tokens: [],
    },
  ],
};

module.exports = {
  users,
  user1Id,
  user2Id,
  user3Id,
};
