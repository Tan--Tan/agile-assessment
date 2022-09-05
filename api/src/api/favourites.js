const express = require('express');
const cors = require('cors');
const router = express.Router();

const service = require('./../services/recipes');

// add here API to get all favourites
router.get('/', cors(), (req, res) => {
    res.json(service.getFavouriteList());
});

// add here API to add favourite by ID

// add here API to remove favourite by ID

module.exports = router;
