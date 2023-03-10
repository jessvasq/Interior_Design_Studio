//DEPENDENCIES
const express = require('express'); 
const app = express();  
const mongoose = require('mongoose');
const methodOverride = require('method-override');
require('dotenv').config();
const Idea = require('./models/ideas.js');
const Mediterranean = require('./models/ideas.js');

const ideasController = require('./controllers/ideas.js');
const designsController = require('./controllers/designs.js');
const mediterraneanController = require('./controllers/mediterranean.js');


//DATABASE CONNECTION 

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,   
	useUnifiedTopology: true,
});

//MIDDLEWARE

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/ideas', ideasController) 
app.use('/designs', designsController) 
app.use('/mediterranean', mediterraneanController);

//ERROR MESSAGES

const db = mongoose.connection
db.on('error', (err) => console.log(err.message + ' is mongo not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));


//PORT LISTENER

const PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`);
});