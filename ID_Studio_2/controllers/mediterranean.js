const express = require('express');
const router = express.Router();
const Mediterranean = require('../models/ideas.js');

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
//         }, 
//         {
//               title: '3 Seater Sofa',
//               store: 'IconByDesign',
//               image: 'https://cdn.shopify.com/s/files/1/0273/2956/0675/products/DG1066_1.jpg?v=1650434547',
//               description: 'Casual with cylindrical features and curved details, this mid-century modern style sofa brings effortless style to your living space. ',
//               price: 4999,
//               tags: 'mediterranean style', 
//             }, 

//       ],
//     (error, data)=> {
//         res.redirect('/mediterranean');
//     }
//   )});
  


//INDEX
router.get('/', (req,res) => {
    Mediterranean.find({}, (error, allMedis)=> {
        res.render('index2.ejs', {
            mediterraneans: allMedis,
        });
    }); 
    });


//NEW
router.get('/new', (req,res) => {

//    res.send('new route')
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
//    res.send('route shows')
    Mediterranean.findById(req.params.id, (err, foundMedi)=>{
    res.render('show.ejs', {
        mediterranean:foundMedi
    });
});
});


//EXPORT 

module.exports = router;
