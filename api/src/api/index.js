const express = require('express');

const recipes = require('./recipes');
const ingredients = require('./ingredients');
const favourites = require('./favourites');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/recipes', recipes);
router.use('/ingredients', ingredients);
router.use('/favourites', favourites);

module.exports = router;
