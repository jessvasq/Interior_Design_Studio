const express = require('express');
const router = express.Router();
const Industrial = require('../models/industrials.js');

//ROUTES
//INDUCES


//****update products****
//  router.get('/seed/', (req, res) => {
//    Industrial.create(
//       [


//         {
//               title: 'HOXTON LEATHER SOFA',
//               store: 'CB2',
//               image: 'https://cb2.scene7.com/is/image/CB2/HoxtonSaddleLeatherSofaSHF19_1x1/$web_pdp_main_carousel_md$/190816110820/hoxton-saddle-leather-sofa.jpg',
//               description: 'Brushed brass finished legs squarely support the generous seat, upholstered in supple saddle leather. ',
//               price: 2999,
//               tags: 'Industrial style', 
//               notes: '',
//               link: 'https://www.cb2.com/hoxton-leather-sofa/s359881',
//             }, 

//         {
//               title: 'PUCKMAN ACCENT CHAIR',
//               store: 'Ashley Furniture',
//               image: 'https://ashleyfurniture.scene7.com/is/image/AshleyFurniture/A3000193-ANGLE-SW-P1-KO?$AFHS-PDP-Zoomed$',
//               description: 'The Puckman accent chair has an ultra-modern vibe and indulgent feel.',
//               price: 390,
//               tags: 'Industrial style', 
//               notes: '',
//               link: 'https://www.ashleyfurniture.com/p/puckman_accent_chair/A3000193.html?mrkgcl=1069&product_id=A3000193&google_pla=true&&mrkgadid=1&mrkgen=gpla&mrkgbflag=0&mrkgcat=dslivingroom&&acctid=21700000001497894&dskeywordid=92700062904980909&lid=92700062904980909&ds_s_kwgid=58700006987705766&ds_s_inventory_feed_id=97700000003427474&dsproductgroupid=857255046123&product_id=A3000193&merchid=102213865&prodctry=US&prodlang=en&channel=online&storeid=%7bproduct_store_id%7d&device=c&network=g&matchtype=&locationid=9067608&creative=513176500963&targetid=aud-802323082706:pla-857255046123&campaignid=12705765482&adgroupid=118443229337&gclid=EAIaIQobChMIoMHtvqfa_QIVDnByCh1eEA9HEAQYCSABEgLRsfD_BwE&gclsrc=aw.ds',
//             }, 


//         {
//           title: 'MARRIN HAND-KNOTTED IVORY WOOL AREA RUG',
//           store: 'CB2',
//           image: 'https://cb2.scene7.com/is/image/CB2/MarrinHdkdNZWlIvryRug8x10SHS23/$web_pdp_main_carousel_md$/221214161443/marrin-hand-knotted-ivory-wool-area-rug.jpg',
//           description: 'Hand-knotted at 10 knots per square inch from pure New Zealand wool, this area rug minimalist neutral tones are edged in a unique graphic design.',
//           price: 599,
//           tags: 'Industrial style', 
//           notes: '',
//           link: 'https://www.cb2.com/marrin-hand-knotted-ivory-wool-area-rug-5x8/s232871',
//         }, 

//         {
//               title: 'ANTIQUED BRASS FLOATING SHELVES SET OF 3',
//               store: 'CB2',
//               image: 'https://cb2.scene7.com/is/image/CB2/AntiquedBrssFltngShlvsS3ROS20/$web_pdp_main_carousel_md$/200203120821/antiqued-brass-floating-shelves-set-of-3.jpg',
//               description: 'Scatter open and airy across the wall or overlap as concentrated grid of right angles',
//               price: 119,
//               tags: 'industrial style', 
//               notes: '',
//               link: 'https://www.cb2.com/antiqued-brass-floating-shelves-set-of-3/s358025',
//             }, 

//         {
//           title: 'SHELF UNIT',
//           store: 'IKEA',
//           image: 'https://www.ikea.com/us/en/images/products/fjaelkinge-shelf-unit-white__0849792_pe564013_s5.jpg?f=xl',
//           description: 'The long, slender shelves give the shelving unit a light and airy look. And the clean, simple lines make it easy to combine with many styles of  furniture. 46 1/2x76 "',
//           price: 249,
//           tags: 'Industrial style', 
//           notes: 'white',
//           link: 'https://www.ikea.com/us/en/p/fjaelkinge-shelf-unit-white-60221683/',
//         }, 
//         {
//               title: 'BOSTON WOODEN 6 DRAWER DRESSER BROWN',
//               store: 'Froy',
//               image: 'https://cdn.shopify.com/s/files/1/0220/3498/products/TOV-B7052-1_800x.jpg?v=1571439114',
//               description: 'Crafted from 100% acacia wood it offers style and durability all wrapped into a stunning dresser. Each piece is truly one of a kind made with naturally colored wood to create a unique pattern just for you, while the brass metal legs add a perfect contrast to the hues of the frame.',
//               price: 919,
//               tags: 'industrial style', 
//               notes: 'Dimensions: "57.1"W x 17.7"D x 34"H. Materials: Brown, Acacia Wood, Metal, Acacia Veneer',
//               link: 'https://froy.com/collections/dressers/products/boston-wooden-6-drawer-dresser-brown',
//             }, 
        // {
        //     title: 'NEAT SMOKED DRINKWARE',
        //     store: 'CB2',
        //     image: 'https://cb2.scene7.com/is/image/CB2/NeatBarwareGroupFHS21/$web_pdp_main_carousel_md$/230313092402/NeatBarwareGroupFHS21.jpg',
        //     description: 'Round, micro-thin glass features subtly tapered sham. ',
        //     price: 6,
        //     tags: 'industrial style', 
        //     notes: '',
        //     link: 'https://www.cb2.com/neat-smoked-drinkware/f23956',
        //   }, 
//       ],
//     (error, data)=> {
//         res.redirect('/industrial');
//     }
//   )});
  
// router.get('/seed/', (req, res) => {
//     Industrial.create(
//        [
//          {
//                title: 'BAST BRASS FLOOR PLANTERS',
//                store: 'CB2',
//                image: 'https://cb2.scene7.com/is/image/CB2/BastBrassFloorGroupROS20/$web_pdp_main_carousel_md$/230313092158/BastBrassFloorGroupROS20.jpg',
//                description: 'Aluminum planter with sculptural footed base displays floor plants in style.',
//                price: 150,
//                tags: 'Industrial style', 
//                notes: '',
//                link: 'https://www.cb2.com/bast-brass-floor-planters/f21822',
//              }, 
//        ],
//      (error, data)=> {
//          res.redirect('/industrial');
//      }
//    )});
   

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
