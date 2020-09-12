const seeder = require('mongoose-seed');
const { users } = require('./users-seed');
const skills = require('./skills-seed');
const interests = require('./interests-seed');

const data = [
  users,
  skills,
  interests,
];

seeder.setLogOutput(true);
seeder.connect(process.env.MONGODB_URL, () => {
  seeder.loadModels([
    './src/models/user.js',
    './src/models/skills.js',
    './src/models/interest.js',
  ]);
  seeder.clearModels([
    'User',
    'Skill',
    'Interest',
  ], () => {
    seeder.populateModels(data, () => {
      seeder.disconnect();
    });
  });
});
