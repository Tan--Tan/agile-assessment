const express = require('express');
const cors = require('cors');
const sanitizer = require('string-sanitizer');

const router = express.Router();

const service = require('./../services/recipes');

// API to get all recipes
// API should support search by title and filtering by category
router.get('/', cors(), (req, res) => {
    const search = req.query.search ? sanitizer.sanitize(req.query.search) : null;
    const cat = req.query.cat ? sanitizer.sanitize(req.query.cat) : null;
    console.log(cat)
    res.json(service.getList({ search, cat }));
  });

// API to get one recipe by ID
router.get('/:recipeId', cors(), (req, res) => {
  const recipeId = req.params.recipeId;
  res.json(service.getById(recipeId));
});

module.exports = router;
