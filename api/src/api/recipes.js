const express = require('express');
const cors = require('cors');

const router = express.Router();

const service = require('./../services/recipes');

// add here API to get all recipes
// API should support search by title
router.get('/', cors(), (req, res) => {
    res.json(service.getList());
  });

// add here API to get one recipe by ID
router.get('/:recipeId', cors(), (req, res) => {
  console.log(service.getById(req.params.recipeId));
  res.json(service.getById(req.params.recipeId));
});

module.exports = router;
