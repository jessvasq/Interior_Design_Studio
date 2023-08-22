const express = require('express');
const router = express.Router();
const Industrial = require('../models/industrials.js');

//ROUTES
//INDUCES
   

//INDEX
router.get('/', (req,res) => {
    Industrial.find({}, (err, allIndus)=> {
        if(err){console.log(err.message)
        res.send(err)}
        res.render('industrialStyle/index.ejs', {
            industrials: allIndus,
        });
    }); 
    });


//NEW
router.get('/new', (req,res) => {
    res.render('industrialStyle/new.ejs')
//    res.send('new route')
});

//DELETE
router.delete('/:id', (req, res) => {
   //res.send('delete route')
   Industrial.findByIdAndDelete(req.params.id, (err, deletedProduct) => {
    // findByIdAndDelete product by its ID 
    if(err) {
        console.log(err)
        res.send(err)
    }
        //redirect to the index page if the delete is successful 
        console.log(deletedProduct)
        res.redirect('/industrial')
})
});

//UPDATE
router.put('/:id', (req, res) => {
  // res.send('update route')


  Industrial.findByIdAndUpdate(req.params.id, req.body, { new: true,}, 
	(err, updatedProduct) => {
		// new: true, to get the prodcut after it's been modified 
		if(err) {
			console.log(err)
			res.send(err)
		}
			console.log(updatedProduct)
			// redirect to the index route 
			res.redirect('/industrial')
		});
    });


//CREATE
router.post('/', (req, res) => {
    //res.send('create route')
    Industrial.create(req.body, (err, createdInd )=> {    //the first thing we're going to do is check if there's an error. If there's one, give me the error. If not, run the code 
        if(err){console.log(err.message)
            res.send(err)}
        console.log(createdInd, "Product created")
        //res.send(createdMedit); 
        res.redirect('/industrial')
    });

});


//EDIT
router.get('/:id/edit', (req, res) => { 
  // res.send('route edits') 
  Industrial.findById(req.params.id, (err, foundProduct) => {
        if(err){console.log(err.message)
            res.send(err)}
          res.render('industrialStyle/edit.ejs', {
              product: foundProduct 
          });
      });
      });
  

//SHOW
router.get('/:id', (req, res) => {
//    res.send('route shows')
    Industrial.findById(req.params.id, (err, foundInd)=>{
        if(err){
            console.log(err.message)
            res.send(err)
        }
        res.render('industrialStyle/show.ejs', {
        industrial: foundInd
    });
});
});


//EXPORT 

module.exports = router;
