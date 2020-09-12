const { user1Id, user2Id, user3Id } = require('./users-seed');

const interests = {
  model: 'Interest',
  documents: [
    {
      name: 'Soccer',
      type: 'Sport',
      current: true,
      detail: 'Soccer is a Sport and Sports are cool',
      owner: user1Id,
    },
    {
      name: 'Football',
      type: 'Sport',
      current: true,
      detail: 'Football is a Sport and Sports are physical',
      owner: user1Id,
    },
    {
      name: 'Racing',
      type: 'Sport',
      current: false,
      detail: 'Racing is a loud sport',
      owner: user2Id,
    },
    {
      name: 'Horseback Riding',
      type: 'Sport',
      current: true,
      detail: 'Horseback Riding is an ancient sport',
      owner: user3Id,
    },
    {
      name: 'Chess',
      type: 'Game',
      current: false,
      detail: 'Chess is a game and games are fun',
      owner: user2Id,
    },
    {
      name: 'Tetris',
      type: 'Game',
      current: true,
      detail: 'Tetris is a game with blocks',
      owner: user1Id,
    },
    {
      name: 'Scrabble',
      type: 'Game',
      current: true,
      detail: 'Scrabble is a word game',
      owner: user2Id,
    },
    {
      name: 'Poker',
      type: 'Game',
      current: true,
      detail: 'Poker is a card game',
      owner: user3Id,
    },
    {
      name: 'Sewing',
      type: 'Hobby',
      current: true,
      detail: 'Sewing is a hobby that can keep you warm',
      owner: user3Id,
    },
    {
      name: 'Pottery',
      type: 'Hobby',
      current: true,
      detail: 'Pottery is a hobby that can give you mugs',
      owner: user1Id,
    },
    {
      name: 'Cooking',
      type: 'Hobby',
      current: true,
      detail: 'Cooking is a hobby that can keep you alive',
      owner: user2Id,
    },
    {
      name: 'Coins',
      type: 'Hobby',
      current: true,
      detail: 'Coin collecting is an expensive way to buy money',
      owner: user3Id,
    },
  ],
};

module.exports = interests;
