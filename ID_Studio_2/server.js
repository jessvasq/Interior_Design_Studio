//REQUIRE DEPENDENCIES
const express = require('express'); 
const app = express();  
const mongoose = require('mongoose');
const methodOverride = require('method-override');
require('dotenv').config();
//REQUIRE MODELS 
const Mediterranean = require('./models/mediterranean.js');
const Industrial = require('./models/industrials.js');
const Minimalist = require('./models/minimalists.js');

//REQUIRE CONTROLLERS 
const designsController = require('./controllers/designs.js');
const mediterraneanController = require('./controllers/mediterranean.js');
const industrialController = require('./controllers/industrials.js');
const minimalistController = require('./controllers/minimalists.js');


//DATABASE CONNECTION 

// mongoose.connect(process.env.DATABASE_URL, {
//     useNewUrlParser: true,   
// 	useUnifiedTopology: true,
// });


// DATABASE CONNECTION
// connect to the database either via heroku or locally
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.set('strictQuery', true);
mongoose.connect(MONGODB_URI , {
    useNewUrlParser: false,
});

//MIDDLEWARE

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use('/designs', designsController);
app.use('/mediterranean', mediterraneanController);
app.use('/industrial', industrialController);
app.use('/minimalist', minimalistController);

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