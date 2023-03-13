
const express = require('express');
const router = express.Router();

 router.get('/', (req,res) => {
    res.render('index.ejs')
    });

 router.get('/mediProjects', (req,res) => {
    res.render('index1.ejs')
   });

router.get('/inProjects', (req,res) => {
   //res.send('insdustrial projects accesed')
   res.render('index2.ejs')
   });

router.get('/minProjects', (req,res) => {
   res.render('index3.ejs')
  //res.send('minimalist projects accesed')
   });

        
module.exports = router;