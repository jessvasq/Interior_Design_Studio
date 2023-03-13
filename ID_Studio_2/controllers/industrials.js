const express = require('express');
const router = express.Router();
const Industrial = require('../models/industrials.js');

//ROUTES
//INDUCES


// ****update products****
//  router.get('/seed/', (req, res) => {
//    Industrial.create(
//       [
//         {
//           title: 'Shelf Unit',
//           store: 'IKEA',
//           image: 'https://www.ikea.com/us/en/images/products/fjaelkinge-shelf-unit-white__0849792_pe564013_s5.jpg?f=xl',
//           description: 'The long, slender shelves give the shelving unit a light and airy look. And the clean, simple lines make it easy to combine with many styles of  furniture. 46 1/2x76 "',
//           price: 249,
//           tags: 'Industrial style', 
//           notes: 'white',
//           link: 'https://www.ikea.com/us/en/p/fjaelkinge-shelf-unit-white-60221683/',
//         }, 
//         {
//               title: 'Boston Wooden 6 Drawer Dresser Brown',
//               store: 'Froy',
//               image: 'https://cdn.shopify.com/s/files/1/0220/3498/products/TOV-B7052-1_800x.jpg?v=1571439114',
//               description: 'Crafted from 100% acacia wood it offers style and durability all wrapped into a stunning dresser. Each piece is truly one of a kind made with naturally colored wood to create a unique pattern just for you, while the brass metal legs add a perfect contrast to the hues of the frame.',
//               price: 919,
//               tags: 'industrial style', 
//               notes: 'Dimensions: "57.1"W x 17.7"D x 34"H. Materials: Brown, Acacia Wood, Metal, Acacia Veneer',
//               link: 'https://froy.com/collections/dressers/products/boston-wooden-6-drawer-dresser-brown',
//             }, 
//       ],
//     (error, data)=> {
//         res.redirect('/industrial');
//     }
//   )});
  


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
