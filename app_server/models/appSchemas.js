const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({eng:String, viet:String});
const flowersSchema = new mongoose.Schema({eng:String, viet:String, type:String});
const datesSchema = new mongoose.Schema({eng:String, viet:String, day:String});

mongoose.model('food', foodSchema);
mongoose.model('flowers', flowersSchema);
mongoose.model('dates', datesSchema);



