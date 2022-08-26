const express = require('express');
const cors = require('cors');

const router = express.Router();

// add here API to get all recipes
// API should support search by title
router.get('/', cors(), (req, res) => {
    res.json([
      {
        id: 1,
        title: "Recipe 1",
        image: "https://img.hellofresh.com/hellofresh_s3/image/thai-green-style-diced-chicken-breast-curry-e561b7b1-39c0ba83.jpg"
      }, 
      {
        id: 2,
        title: "Recipe 2",
        image: "https://img.hellofresh.com/hellofresh_s3/image/thai-green-style-diced-chicken-breast-curry-e561b7b1-39c0ba83.jpg"
      }, 
      {
        id: 3,
        title: "Recipe 3",
        image: "https://img.hellofresh.com/hellofresh_s3/image/thai-green-style-diced-chicken-breast-curry-e561b7b1-39c0ba83.jpg"
      }
    ]);
  });

// add here API to get one recipe by ID

module.exports = router;
