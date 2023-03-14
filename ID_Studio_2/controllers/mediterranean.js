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
//           title: 'POLISHED BRASS AND WRAPPED COGNAC LEATHER KNOB',
//           store: 'CB2',
//           image: 'https://cb2.scene7.com/is/image/CB2/WrappedCgLthrKnobPlhBrsAVSHF21/$web_pdp_main_carousel_md$/230313054652/WrappedCgLthrKnobPlhBrsAVSHF21.jpg',
//           description: 'Barcelona-based design trio Mermelada Estudio introduces statement hardware for the kitchen. ',
//           price: 7,
//           tags: 'mediterranean style', 
//           notes: '',
//           link: 'https://www.cb2.com/polished-brass-and-wrapped-cognac-leather-knob/s293207',
//         }, 
//         {
//               title: 'STOCKHOLM, Coffee table, walnut veneer,',
//               store: 'Ikea',
//               image: 'https://www.ikea.com/us/en/images/products/stockholm-coffee-table-walnut-veneer__0836022_pe601366_s5.jpg?f=s',
//               description: 'The table surface in walnut veneer and legs in solid walnut give a warm, natural feeling to your room.',
//               price: 350,
//               tags: 'mediterranean style', 
//               notes: '',
//               link: 'https://www.ikea.com/us/en/p/stockholm-coffee-table-walnut-veneer-70239710/',
//             }, 

//         {
//               title: 'Hayon X Nani Rug/Tapestry',
//               store: 'Design Wihin Reach',
//               image: 'https://images.hermanmiller.group/m/e741564163bb1e81/W-DWR_2515210_100131121_multi_f.png?trim=auto&trim-sd=1&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1200&q=68&h=1000',
//               description: 'Striking design based on designer illustration',
//               price: 1476,
//               tags: 'mediterranean style', 
//               notes: '',
//               link: 'https://www.dwr.com/rug-style-patterned/hayon-x-nani-rug%2Ftapestry/2515210.html?lang=en_US',
//             }, 

//         {
//               title: 'Palm Bed',
//               store: 'Design Wihin Reach',
//               image: 'https://images.hermanmiller.group/m/617e4e4298478b0f/W-DWR_2555447_100379129_oak_v2_001.png?trim=auto&trim-sd=1&bg=f8f8f8&auto=format&w=2000&h=1000&q=60',
//               description: 'Gracefully arched headboard. Woven cane applied by hand. ',
//               price: 2970,
//               tags: 'mediterranean style', 
//               notes: '',
//               link: 'https://www.dwr.com/bedroom-beds/palm-bed/2555447.html?lang=en_US',
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
