const mongoose = require('mongoose');

//Schema
const minSchema = new mongoose.Schema({
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
const Minimalist = mongoose.model('Minimalist', minSchema);

//export
module.exports = Minimalist; 