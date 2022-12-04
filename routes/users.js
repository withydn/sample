// @ts-check

const express = require('express');

const db = require('../controllers/usersController');

const router = express.Router();

router.get('/', async (req, res) => {
  const users = await db.getUsers();
  res.render('users', { users });
});

module.exports = router;
