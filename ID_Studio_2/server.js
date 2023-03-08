//DEPENDENCIES
const express = require('express'); 
const app = express();  
const mongoose = require('mongoose');
//const Idea = require('./models/ideas.js');
require('dotenv').config();

//DATABASE CONNECTION 

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,   
	useUnifiedTopology: true,
});

//MIDDLEWARE

app.use(express.urlencoded({extended:true}));
app.use(express.json());


//ERROR MESSAGES

const db = mongoose.connection
db.on('error', (err) => console.log(err.message + ' is mongo not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));


//ROUTES
//INDUCES

//INDEX
app.get('/ideas', (req,res) => {
     res.send('index route works')
     });

//NEW
app.get('/ideas/new', (req,res) => {
    res.send('new route')
});

//DELETE
app.delete('/ideas/:id', (req, res) => {
    //res.send('delete route')
});

//UPDATE
app.put('ideas/:id', (req, res) => {
   // res.send('update route')
});

//CREATE
app.post('/ideas/', (req, res) => {
     //res.send('create route')
});


//EDIT
app.get('/ideas/:id/edit', (req, res) => { 
    res.send('route edits')   
});

//SHOW
app.get('/ideas/:id', (req, res) => {
    res.send('route shows')
});


//PORT LISTENER

const PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`);
});