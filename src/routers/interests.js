const express = require('express');
const Interest = require('../models/interest');
const auth = require('../middleware/auth');

const router = new express.Router();

router.post('/interests', auth, async (req, res) => {
  const interest = new Interest({
    ...req.body,
    owner: req.user._id,
  });

  try {
    await interest.save();
    res.status(201).send(interest);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/interests', auth, async (req, res) => {
  try {
    const interests = await Interest.find({ owner: req.user._id });
    res.send(interests);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/interests/:id', auth, async (req, res) => {
  try {
    const interest = await Interest.findOne({ owner: req.user._id, _id: req.params.id });

    if (!interest) {
      return res.status(404).send({ error: 'Cannot find interest' });
    }

    return res.send(interest);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.patch('/interests/:id', auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'type', 'current', 'detail'];
  const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates' });
  }

  try {
    const interest = await Interest.findOne({ _id: req.params.id, owner: req.user._id });

    if (!interest) {
      return res.status(404).send({ error: 'Cannot find interest' });
    }

    updates.forEach((update) => {
      interest[update] = req.body[update];
    });

    await interest.save();

    return res.send(interest);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.delete('/interests/:id', auth, async (req, res) => {
  try {
    const interest = await Interest.findOneAndDelete({ _id: req.params.id, owner: req.user._id });

    if (!interest) {
      return res.status(404).send({ error: 'Cannot find interest' });
    }

    return res.send(interest);
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
