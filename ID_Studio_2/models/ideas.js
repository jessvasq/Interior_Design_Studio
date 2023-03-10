
const mongoose = require('mongoose');

//Schema
const ideaSchema = new mongoose.Schema({
    title: {type: String, required: true}, 
    store: String,
    image: String, 
    description: {type: String, required: true},
    price: {type:Number, min:0},
    tags: String,
    addToStudio: Boolean,
});

//create model
const Idea = mongoose.model('Idea', ideaSchema);

//export
module.exports = Idea; 





