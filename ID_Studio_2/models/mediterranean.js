const mongoose = require('mongoose');

//Schema
const medSchema = new mongoose.Schema({
    title: { type: String, required: true }, 
    store: { type: String },
    image: { type: String }, 
    description: { type: String, required: true },
    price: { type:Number, min:0 },
    tags:  { type: String, required: true }, 
    notes: { type: String }, 
    link: { type: String }, 
});

//create model
const Mediterranean = mongoose.model('Mediterranean', medSchema);

//export
module.exports = Mediterranean; 