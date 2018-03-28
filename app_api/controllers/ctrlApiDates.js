const mongoose = require('mongoose');

const datesModel = mongoose.model('dates');

const datesList = function (req, res) {
    datesModel.find({}, function(err, allDates){
        if (err){
            res.status(404).json(err);
        }
        else {
            res.status(200).json(allDates);
        }
    })
};
const addDates = function (req, res) {
    datesModel.create(req.body, function(err, newDate){
        if (err){
            res.status(400).json(err);
        }
        else {
            res.status(201).json(newDate);
        }
    })
};

module.exports = {
    datesList,
    addDates
};