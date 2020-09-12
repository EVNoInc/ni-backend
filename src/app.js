const express = require('express');
require('./db/mongoose');

const skillsRouter = require('./routers/skills');
const interestsRouter = require('./routers/interests');
const usersRouter = require('./routers/users');

const app = express();

app.use(express.json());

app.use(skillsRouter);
app.use(interestsRouter);
app.use(usersRouter);

module.exports = app;
