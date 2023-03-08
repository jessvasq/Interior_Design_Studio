
const mongoose = require('mongoose');

//Schema
const ideaSchema = new mongoose.Schema({
    title: {type: String, required: true}, 
    description: {type: String, required: true},
    image: String, 
    price: {Type: Number, min:0},
    tags: String,
});

//create model
const Idea = mongoose.model('Idea', ideaSchema);

//export
module.exports = Idea; 
