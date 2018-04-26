const express = require('express');
const router = express.Router();

// Declaring the controllers
const ctrlMain = require('../controllers/ctrlMain'); // Controller for the Home page
const ctrlFood = require('../controllers/ctrlFood'); // ... for the list of food
const ctrlFlowers = require('../controllers/ctrlFlowers'); // ... for the the list of flowers and plants
const ctrlDates = require('../controllers/ctrlDates'); // ... for the list of dates

// Defining the routes and associating the routes to their corresponding controllers
router.get('/', ctrlMain.index);  // Home page
router.get('/food', ctrlFood.list);  // List of food
router.get('/flowers', ctrlFlowers.list);  // List of flowers and plants
router.get('/dates', ctrlDates.list);  // List of dates

router
    .route('/food/add')
    .get(ctrlFood.showForm)  // Display the form
    .post(ctrlFood.addData);  // Get form data and make the API call

router
    .route('/flowers/add')
    .get(ctrlFlowers.showForm)  // Display the form
    .post(ctrlFlowers.addData);  // Get form data and make the API call

router
    .route('/dates/add')
    .get(ctrlDates.showForm)  // Display the form
    .post(ctrlDates.addData);  // Get form data and make the API call

module.exports = router;
