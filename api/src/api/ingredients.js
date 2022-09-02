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
router.get('/', cors(), (req, res) => {
    res.json([
      {
        id: 1,
        name: "Garlic",
        category: "Vegetables & Greens",
        protein: 6,
        carbs: 33,
        fat: 0,
        calories: 149,
      }, 
      {
        id: 2,
        name: "Whole Milk",
        category: "Dairy",
        protein: 3.4,
        carbs: 5.1,
        fat: 3.3,
        calories: 62,
      }, 
      {
        id: 3,
        name: "Plain Flour",
        category: "Flour",
        protein: 10.3,
        carbs: 76,
        fat: 1,
        calories: 381,
      },
      {
        id: 4,
        name: "Butter",
        category: "Dairy",
        protein: 1.1,
        carbs: 0,
        fat: 81.5,
        calories: 717,
      },
      {
        id: 5,
        name: "Dijon Mustard",
        category: "Condiments",
        protein: 3.95,
        carbs: 7.78,
        fat: 3.11,
        calories: 66,
      },
      {
        id: 6,
        name: "Cheddar",
        category: "Dairy",
        protein: 24.9,
        carbs: 1.28,
        fat: 33.14,
        calories: 403,
      },
      {
        id: 7,
        name: "Peas",
        category: "Vegetables & Greens",
        protein: 5.21,
        carbs: 13.71,
        fat: 0.37,
        calories: 77,
      },
      {
        id: 8,
        name: "Uncooked Macaroni",
        category: "Pasta",
        protein: 13,
        carbs: 75,
        fat: 1.5,
        calories: 371,
      },
      {
        id: 9,
        name: "Rapeseed Oil",
        category: "Oil",
        protein: 0.1,
        carbs: 0.1,
        fat: 92.1,
        calories: 900,
      },
      {
        id: 10,
        name: "Onion",
        category: "Vegetables & Greens",
        protein: 1.1,
        carbs: 10,
        fat: 0.2,
        calories: 40,
      },

    ]);
  });
module.exports = router;
