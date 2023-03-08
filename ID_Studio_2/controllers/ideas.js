const express = require('express');
const router = express.Router();
const Idea = require('../models/ideas.js');

//ROUTES 

//ROUTES
//INDUCES

//INDEX
router.get('/', (req,res) => {
    res.send('index route works')
    });

//NEW
router.get('/new', (req,res) => {
   res.send('new route')
});

//DELETE
router.delete('/:id', (req, res) => {
   //res.send('delete route')
});

//UPDATE
router.put('/:id', (req, res) => {
  // res.send('update route')
});

//CREATE
router.post('/', (req, res) => {
    //res.send('create route')
});


//EDIT
router.get('/:id/edit', (req, res) => { 
   res.send('route edits')   
});

//SHOW
router.get('/:id', (req, res) => {
   res.send('route shows')
});


//EXPORT 

module.exports = router;
