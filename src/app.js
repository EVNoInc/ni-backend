const express = require('express');
const cors = require('cors');
require('./db/mongoose');

const skillsRouter = require('./routers/skills');
const interestsRouter = require('./routers/interests');
const usersRouter = require('./routers/users');

const app = express();

app.use(express.json());
app.use(cors({
  origin: '*',
}));

app.use(skillsRouter);
app.use(interestsRouter);
app.use(usersRouter);

module.exports = app;
