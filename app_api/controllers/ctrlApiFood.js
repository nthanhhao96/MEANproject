const mongoose = require('mongoose');

const foodModel = mongoose.model('food');

const foodList = function (req, res) {
    foodModel.find({}, function(err, allFood){
        if (err){
            res.status(404).json(err);
        }
        else {
            res.status(200).json(allFood);
        }
    })
};
const addFood = function (req, res) {
    foodModel.create(req.body, function(err, newFood){
        if (err){
            res.status(400).json(err);
        }
        else {
            res.status(201).json(newFood);
        }
    })
};

module.exports = {
    foodList,
    addFood
};