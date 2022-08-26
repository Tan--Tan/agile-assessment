const express = require('express');
const cors = require('cors');

const router = express.Router();

// add here API to get all recipes
// API should support search by title
router.get('/', cors(), (req, res) => {
    res.json(["1", "2", "3"]);
  });

// add here API to get one recipe by ID

module.exports = router;
