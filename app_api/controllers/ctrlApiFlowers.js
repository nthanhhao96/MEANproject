const mongoose = require('mongoose');

const flowersModel = mongoose.model('flowers');

const flowersList = function (req, res) {
    flowersModel.find({}, function(err, allFlowers) {
        if (err) {
            res.status(404).json(err);
        }
        else {
            res.status(200).json(allFlowers);
        }
    })
};
const addFlowers = function (req, res) {
    flowersModel.create(req.body, function(err, newFlower){
        if (err){
            res.status(400).json(err);
        }
        else {
            res.status(201).json(newFlower);
        }
    })
};

module.exports = {
    flowersList,
    addFlowers
};