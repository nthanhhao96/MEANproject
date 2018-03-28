const express = require('express');
const router = express.Router();

const ctrlApiFood = require('../controllers/ctrlApiFood');
const ctrlApiFlowers = require('../controllers/ctrlApiFlowers');
const ctrlApiDates = require('../controllers/ctrlApiDates');

//food
router
    .route('/food')
    .get(ctrlApiFood.foodList)
    .post(ctrlApiFood.addFood);

//flowers
router
    .route('/flowers')
    .get(ctrlApiFlowers.flowersList)
    .post(ctrlApiFlowers.addFlowers);

//dates
router
    .route('/dates')
    .get(ctrlApiDates.datesList)
    .post(ctrlApiDates.addDates);

module.exports = router;