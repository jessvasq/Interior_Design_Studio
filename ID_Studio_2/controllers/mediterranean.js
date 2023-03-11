const express = require('express');
const router = express.Router();
const Mediterranean = require('../models/mediterranean.js');

//ROUTES 

//ROUTES
//INDUCES

//  router.get('/seed/', (req, res) => {
//     Mediterranean.create(
//       [
//         {
//           title: 'TV Stand',
//           store: 'Castlery',
//           image: 'https://res.cloudinary.com/castlery/image/private/w_500,f_auto,q_auto/b_rgb:F3F3F3,c_fit/v1624959615/crusader/variants/41360025/Harper-TV-Console-Lifestyle-Crop.jpg',
//           description: 'Engineered Wood with Oak Veneer Frame, Metal Handle and Leg',
//           price: 1199,
//           tags: 'mediterranean style', 
//           link: 'https://www.ikea.com/us/en/p/pinnarp-countertop-walnut-veneer-20467479/',
//         }, 
//         {
//               title: '3 Seater Sofa',
//               store: 'IconByDesign',
//               image: 'https://cdn.shopify.com/s/files/1/0273/2956/0675/products/DG1066_1.jpg?v=1650434547',
//               description: 'Casual with cylindrical features and curved details, this mid-century modern style sofa brings effortless style to your living space. ',
//               price: 4999,
//               tags: 'mediterranean style', 
//               link: 'https://www.ikea.com/us/en/p/pinnarp-countertop-walnut-veneer-20467479/',
//             }, 

//       ],
//     (error, data)=> {
//         res.redirect('/mediterranean');
//     }
//   )});
  


//INDEX
router.get('/', (req,res) => {
    Mediterranean.find({}, (err, allMedis)=> {
        if(err){console.log(err.message)
        res.send(err)}
        res.render('mediterraneanStyle/index.ejs', {
            mediterraneans: allMedis,
        });
    }); 
    });


//NEW
router.get('/new', (req,res) => {
    res.render('mediterraneanStyle/new.ejs')
//    res.send('new route')
});

//DELETE
router.delete('/:id', (req, res) => {
   //res.send('delete route')
   Mediterranean.findByIdAndDelete(req.params.id, (err, deletedProduct) => {
    // findByIdAndDelete product by its ID 
    if(err) {
        console.log(err)
        res.send(err)
    }
        //redirect to the index page if the delete is successful 
        console.log(deletedProduct)
        res.redirect('/mediterranean')
})
});

//UPDATE
router.put('/:id', (req, res) => {
  // res.send('update route')


  Mediterranean.findByIdAndUpdate(req.params.id, req.body, { new: true,}, 
	(err, updatedProduct) => {
		// new: true, to get the prodcut after it's been modified 
		if(err) {
			console.log(err)
			res.send(err)
		}
			console.log(updatedProduct)
			// redirect to the index route 
			res.redirect('/mediterranean')
		});
    });


//CREATE
router.post('/', (req, res) => {
    //res.send('create route')
    Mediterranean.create(req.body, (err, createdMedit )=> {    //the first thing we're going to do is check if there's an error. If there's one, give me the error. If not, run the code 
        if(err){console.log(err.message)
            res.send(err)}
        console.log(createdMedit, "Product created")
        //res.send(createdMedit); 
        res.redirect('/mediterranean')
    });

});


//EDIT
router.get('/:id/edit', (req, res) => { 
  // res.send('route edits') 
  Mediterranean.findById(req.params.id, (err, foundProduct) => {
        if(err){console.log(err.message)
            res.send(err)}
          res.render('mediterraneanStyle/edit.ejs', {
              product: foundProduct 
          });
      });
      });
  

//SHOW
router.get('/:id', (req, res) => {
//    res.send('route shows')
    Mediterranean.findById(req.params.id, (err, foundMedi)=>{
        if(err){
            console.log(err.message)
            res.send(err)
        }
        res.render('mediterraneanStyle/show.ejs', {
        mediterranean: foundMedi
    });
});
});


//EXPORT 

module.exports = router;
