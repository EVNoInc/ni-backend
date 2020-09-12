const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Skill = require('./skills');
const Interest = require('./interest');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    trim: true,
    validate(value) {
      if (value.includes('password')) {
        throw new Error('your password mad weak yo');
      }
    },
  },
  tokens: [{
    token: {
      type: String,
      required: true,
    },
  }],
});

userSchema.statics.findByCredentials = async (username, password) => {
  // eslint-disable-next-line no-use-before-define
  const user = await User.findOne({ username });

  if (!user) {
    throw new Error('Unable to login');
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error('Unable to login');
  }

  return user;
};

userSchema.virtual('interests', {
  ref: 'Interests',
  localField: '_id',
  foreignField: 'owner',
});

userSchema.virtual('skills', {
  ref: 'Skills',
  localField: '_id',
  foreignField: 'owner',
});

userSchema.methods.toJSON = function toJSON() {
  const user = this;
  const userObject = user.toObject();

  delete userObject.password;
  delete userObject.tokens;

  return userObject;
};

userSchema.methods.generateAuthToken = async function generateAuthToken() {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET);

  user.tokens = user.tokens.concat({ token });
  await user.save();

  return token;
};

// Hash plaintext password pre save
userSchema.pre('save', async function beforeSave(next) {
  const user = this;

  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  next();
});

// Delete user tasks when user is removed
userSchema.pre('remove', async function preRemove(next) {
  const user = this;

  await Skill.deleteMany({ owner: user._id });
  await Interest.deleteMany({ owner: user._id });

  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
