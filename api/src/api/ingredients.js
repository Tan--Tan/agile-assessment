const express = require('express');
const cors = require('cors');
const sanitizer = require('string-sanitizer');
const router = express.Router();

const service = require('./../services/ingredients');

// add here API to get all ingredients
router.get('/', cors(), (req, res) => {
    const search = req.query.search ? sanitizer.sanitize(req.query.search) : null;
    const cat = req.query.cat ? sanitizer.sanitize(req.query.cat) : null;
    res.json(service.getList({ search, cat }));
});

// add here API to get one ingredient by ID

module.exports = router;
