const express = require('express');
const router = express.Router();
const Minimalist = require('../models/minimalists.js');

//ROUTES
//INDUCES

// router.get('/seed/', (req, res) => {
//     Minimalist.create(
//        [
//          {
//            title: 'CIVITA BROWN TRAVERTINE COFFEE TABLE',
//            store: 'CB2',
//            image: 'https://cb2.scene7.com/is/image/CB2/CivitaTrvrtnCoffeeTableSHF22/$web_pdp_main_carousel_md$/220420112842/civita-brown-travertine-coffee-table.jpg',
//            description: 'The harmonious blend of various shades of gray and brown exemplifies the blocky, monolithic silhouette characteristic to Brutalism design. ',
//            price: 1899,
//            tags: 'Minimalist style', 
//            notes: '',
//            link: 'https://www.cb2.com/civita-brown-travertine-coffee-table/s670554',
//          }, 
//          {
//                title: 'ABEL BRASS ROUND WALL MIRROR 48',
//                store: 'CB2',
//                image: 'https://cb2.scene7.com/is/image/CB2/RoughCastRoundMirror48SHF18/$web_pdp_main_carousel_md$/190905023449/round-rough-cast-aluminum-mirror-48.jpg',
//                description: 'Rough-hewn aluminum frames oversized round mirror in organic style. Adds natural elegance to the living room or entry. ',
//                price: 799,
//                tags: 'minimalist style', 
//                notes: '',
//                link: 'https://www.cb2.com/abel-brass-round-wall-mirror-48/s673292',
//              }, 
   
//          {
//                title: 'SPAZIO BRONZE AND WHITE MARBLE SIDE TABLE',
//                store: 'CB2',
//                image: 'https://cb2.scene7.com/is/image/CB2/SpazioWhtMrblSdTableSHS23/$web_pdp_main_carousel_md$/230119121016/spazio-bronze-and-white-marble-side-table.jpg',
//                description: 'Taking design elements from the French industrial and Cubist movements, cast aluminum top contrasts with a curved marble base. ',
//                price: 249,
//                tags: 'minimalist style', 
//                notes: '',
//                link: 'https://www.cb2.com/spazio-bronze-and-white-marble-side-table/s259923',
//              }, 
//   {
//            title: 'PAVO CHAMPAGNE BRASS DOUBLE FLOOR LAMP',
//            store: 'CB2',
//            image: 'https://cb2.scene7.com/is/image/CB2/PavoChmpgnBrassFloorLampROF20/$web_pdp_main_carousel_md$/230313091044/PavoChmpgnBrassFloorLampROF20.jpg',
//            description: 'Doubly bright design by Brett Beldock shines in a sleek champagne brass finish with two matte white shades for max light. ',
//            price: 449,
//            tags: 'Minimalist style', 
//            notes: '',
//            link: 'https://www.cb2.com/pavo-champagne-brass-double-floor-lamp/s590075',
//          }, 

//          {
//            title: 'Marvella End Table',
//            store: 'ALLMODERN',
//            image: 'https://secure.img1-cg.wfcdn.com/im/46717375/resize-h500-w500%5Ecompr-r85/1552/155206296/Marvella+End+Table.jpg',
//            description: 'This design may be small enough to squeeze into cozy corners, but it is big on style and can hold its own in larger spaces. ',
//            price: 530,
//            tags: 'Minimalist style', 
//            notes: 'No assembly required because it is a solid piece of stone.',
//            link: 'https://www.allmodern.com/furniture/pdp/kuala-end-table-a000558734.html',
//          }, 
//          {
//                title: 'BIMA RECTANGULAR RECYCLED TERRAZZO DINING TABLE',
//                store: 'CB2',
//                image: 'https://cb2.scene7.com/is/image/CB2/BimaRcyldTrzDiningTableSHS22/$web_pdp_main_carousel_md$/220221113033/bima-rectangular-recycled-terrazzo-dining-table.jpg',
//                description: 'Cement is speckled with recycled glass chips, adding unique activity in the terrazzo that varies from piece to piece.',
//                price: 2699,
//                tags: 'minimalist style', 
//                notes: '',
//                link: 'https://www.cb2.com/bima-rectangular-recycled-terrazzo-dining-table/s450148',
//              }, 

//          {
//                    title: 'Cambridge Teak Outdoor Sofa',
//                    store: 'ALLMODERN',
//                    image: 'https://secure.img1-cg.wfcdn.com/im/25473600/resize-h500-w500%5Ecompr-r85/1616/161606821/Cambridge+101.5%27%27+Teak+Outdoor+Sofa.jpg',
//                    description: 'Crafted from solid teak wood, each piece features a clean-lined, low-profile silhouette with a slatted back, open square arms, and sled legs.',
//                    price: 3150,
//                    tags: 'minimalist style', 
//                    notes: 'Dimensions: "three corner seats and an armless chair',
//                    link: 'https://www.allmodern.com/outdoor/pdp/cambridge-teak-patio-sectional-with-cushions-a000959288.html',
//                  }, 
//        ],
//      (error, data)=> {
//          res.redirect('/minimalist');
//      }
//    )});


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
