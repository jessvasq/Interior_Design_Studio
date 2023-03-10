
const express = require('express');
const router = express.Router();

 router.get('/', (req,res) => {
    res.render('index.ejs')
    });

 router.get('/mediProjects', (req,res) => {
    res.render('index1.ejs')
   });

router.get('/minProjects', (req,res) => {
  // res.render('index1.ejs')
  res.send('minimalist projects accesed')
   });

router.get('/inProjects', (req,res) => {
   res.send('insdustrial projects accesed')
    });
        
module.exports = router;