const { user1Id, user2Id, user3Id } = require('./users-seed');

function randomDate() {
  return new Date(315550800000 + Math.random() * 1284299389224);
}

const skills = {
  model: 'Skill',
  documents: [
    {
      name: 'Reading',
      type: 'Essential',
      dateLearned: randomDate(),
      detail: 'Reading is essential and fun',
      owner: user1Id,
    },
    {
      name: 'Writing',
      type: 'Essential',
      dateLearned: randomDate(),
      detail: 'Writing is essential and fun',
      owner: user2Id,
    },
    {
      name: 'Arithmetic',
      type: 'Essential',
      dateLearned: randomDate(),
      detail: 'Arithmetic is challenging and fun',
      owner: user3Id,
    },

    {
      name: 'Riding A Bike',
      type: 'Practical',
      dateLearned: randomDate(),
      detail: 'Riding A Bike is not essential',
      owner: user1Id,

    },
    {
      name: 'Driving A Car',
      type: 'Practical',
      dateLearned: randomDate(),
      detail: 'Driving A Car is essential in some countries',
      owner: user2Id,

    },
    {
      name: 'Flying A Plane',
      type: 'Practical',
      dateLearned: randomDate(),
      detail: 'Flying A Plane is essential if you are a pilot',
      owner: user3Id,

    },

    {
      name: 'Coding',
      type: 'Professional',
      dateLearned: randomDate(),
      detail: 'Coding is profitable',
      owner: user1Id,
    },
    {
      name: 'Debugging',
      type: 'Professional',
      dateLearned: randomDate(),
      detail: 'Debugging is neccesarry',
      owner: user2Id,
    },
    {
      name: 'Typing',
      type: 'Professional',
      dateLearned: randomDate(),
      detail: 'Typing is fundamental',
      owner: user3Id,
    },

  ],
};

module.exports = skills;
