const express = require('express');
const Skill = require('../models/skills');
const auth = require('../middleware/auth');

const router = new express.Router();

router.get('/skills', auth, async (req, res) => {
  try {
    const skills = await Skill.find({ owner: req.user._id });
    res.send(skills);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/skills/:id', auth, async (req, res) => {
  try {
    const skill = await Skill.findOne({ _id: req.params.id, owner: req.user._id });

    if (!skill) {
      return res.status(404).send({ error: 'cannot find skill' });
    }

    return res.send(skill);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.post('/skills', auth, async (req, res) => {
  const skill = new Skill({
    ...req.body,
    owner: req.user,
  });
  try {
    await skill.save();
    res.send(skill);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.patch('/skills/:id', auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'type', 'dateLearned', 'detail'];
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates' });
  }

  try {
    const skill = await Skill.findOne({ _id: req.params.id, owner: req.user._id });

    if (!skill) {
      return res.status(404).send({ error: 'Cannot find skill' });
    }

    updates.forEach((update) => {
      skill[update] = req.body[update];
    });

    return res.send(skill);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.delete('/skills/:id', auth, async (req, res) => {
  try {
    const skill = await Skill.findOneAndDelete({
      _id: req.params.id,
      owner: req.user._id,
    });

    if (!skill) {
      return res.status(404).send({ error: 'Cannot find skill' });
    }

    return res.send(skill);
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
