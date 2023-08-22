const express = require('express');
const router = express.Router();
const Minimalist = require('../models/minimalists.js');

//ROUTES
//INDUCES


//INDEX
router.get('/', (req,res) => {
    Minimalist.find({}, (err, allMinis)=> {
        if(err){console.log(err.message)
        res.send(err)}
        res.render('minimalistStyle/index.ejs', {
            minimalists: allMinis,
        });
    }); 
});


//NEW
router.get('/new', (req,res) => {
    res.render('minimalistStyle/new.ejs')
//    res.send('new route')
});

//DELETE
router.delete('/:id', (req, res) => {
   //res.send('delete route')
   Minimalist.findByIdAndDelete(req.params.id, (err, deletedProduct) => {
    // findByIdAndDelete product by its ID 
    if(err) {
        console.log(err)
        res.send(err)}
        //redirect to the index page if the delete is successful 
        console.log(deletedProduct)
        res.redirect('/minimalist')
    });
});

//UPDATE
router.put('/:id', (req, res) => {
  // res.send('update route')
  Minimalist.findByIdAndUpdate(req.params.id, req.body, { new: true,}, 
	(err, updatedProduct) => {
		// new: true, to get the prodcut after it's been modified 
		if(err) {
			console.log(err)
			res.send(err)}
			console.log(updatedProduct)
			// redirect to the index route 
			res.redirect('/minimalist')
		});
    });


//CREATE
router.post('/', (req, res) => {
    //res.send('create route')
    Minimalist.create(req.body, (err, createdMini)=> {    //the first thing we're going to do is check if there's an error. If there's one, give me the error. If not, run the code 
        if(err){console.log(err.message)
            res.send(err)}
        console.log(createdMini, "Product created")
        res.redirect('/minimalist')
    });
});


//EDIT
router.get('/:id/edit', (req, res) => { 
  // res.send('route edits') 
  Minimalist.findById(req.params.id, (err, foundProduct) => {
        if(err){console.log(err.message)
            res.send(err)}
          res.render('minimalistStyle/edit.ejs', {
              product: foundProduct 
         });
     });
 });
  

//SHOW
router.get('/:id', (req, res) => {
//    res.send('route shows')
    Minimalist.findById(req.params.id, (err, foundMini)=>{
        if(err){
            console.log(err.message)
            res.send(err)}
        res.render('minimalistStyle/show.ejs', {
        minimalist: foundMini
        });
    });
});


//EXPORT 

module.exports = router;
