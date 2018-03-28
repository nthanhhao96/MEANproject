const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({eng:String, viet:String});
const flowersSchema = new mongoose.Schema({eng:String, viet:String, type:String});
const datesSchema = new mongoose.Schema({eng:String, viet:String, day:String});

mongoose.model('food', foodSchema, 'food');
mongoose.model('flowers', flowersSchema, 'flowers');
mongoose.model('dates', datesSchema, 'dates');



