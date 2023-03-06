const express = require('express');
const router = express.Router();


//database pg connection
const { configDb } = require('../config.js');
const knexConfig = configDb.knexPGConfig;
const knex = require('knex')(knexConfig);

//to validate the recieved data
const { body, validationResult } = require('express-validator');



router.post('/getcinema', async (req, res) => {
  try {
    console.log('listing a particular cinema details');
    console.log(req.body);
    const result = await knex.withSchema('cinemabackend').table('cinemasdetails').where('id', req.body.cinemaid);
    console.log(result);
    res.json(result[0]);
  }
  catch (error) {
    console.log(error);
    res.status(400);
  }
});

//middleware-> for token checking
const { tokenChecking } = require('../middlewares/checkingPermissions.js');
router.use(tokenChecking);





// //listing all the cinemas details
// //for both
// router.get('/getactivecinemas', async (req, res) => {
//   try {
//     console.log('listing active cinemas details');
//     const result = await knex.withSchema('cinemabackend').table('cinemasdetails').where('isactive', true);
//     res.json(result);
//   }
//   catch (error) {
//     console.log(error);
//     res.status(400);
//   }
// });


// //for both
// router.get('/getunactivecinemas', async (req, res) => {
//   try {
//     console.log('listing unactive cinemas details');
//     const result = await knex.withSchema('cinemabackend').table('cinemasdetails').where('isactive', false);
//     res.json(result);
//   }
//   catch (error) {
//     console.log(error);
//     res.status(400);
//   }
// });



//for both
router.get('/getcinemas', async (req, res) => {
  try {
    console.log('listing all the cinemas details');
    const result = await knex.withSchema('cinemabackend').table('cinemasdetails').where('isactive', true);
    res.json({ result: result });
  }
  catch (error) {
    console.log(error);
    res.status(400);
  }
});


//for both
router.get('/getcinema/:id', async (req, res) => {
  try {
    console.log('listing a particular cinema details');
    const result = await knex.withSchema('cinemabackend').table('cinemasdetails').where('id', req.params.id);
    res.json({ result: result[0] });
  }
  catch (error) {
    console.log(error);
    res.status(400);
  }
});




//adding a new cinema
//for admin
router.post('/addcinema', body('mobile').isInt(), async (req, res) => {
  try {
    console.log('adding a new cinema');
    const err = validationResult(req);
    if (!err.isEmpty() || !req.body.name || !req.body.address || !req.body.city) {
      res.status(400).json({ error: 'please enter correct and proper details' });
    }

    await knex.withSchema('cinemabackend').table('cinemasdetails').insert(req.body);
    res.json({ message: 'cinema added succesfully' });
  }
  catch (error) {
    console.log(error);
    res.status(400);
  }
});




//updating a particular cinema
//for admin
router.put('/editcinema/:id', body('mobile').isInt(), async (req, res) => {
  try {
    console.log('updating a cinema details');
    const err = validationResult(req);
    if (!err.isEmpty() || !req.body.name || !req.body.address || !req.body.city) {
      res.status(400).json({ error: 'PLease enter correct and proper details' });
    }

    const result = await knex.withSchema('cinemabackend').table('cinemasdetails').where('id', req.params.id).update(
      {
        name: req.body.name,
        mobile: req.body.mobile,
        address: req.body.address,
        city: req.body.city
      }
    )
    if (result) {
      res.json({ message: 'success: cinema details updated succesfully' });
    }
    else {
      res.json({ message: 'error: record not found' });
    }
  }
  catch (error) {
    console.log(error);
    res.status(400);
  }
});




//deleting a particualar cinema
//for admin
router.delete('/delete/:id', async (req, res) => {
  try {
    console.log('deleting a particular cinema');
    const result = await knex.withSchema('cinemabackend').table('cinemasdetails').where('id', req.params.id).update({ isactive: false });
    if (result) {
      res.json({ message: 'deleted successfully' });
    }
    else {
      res.json({ error: 'cinema not found' });
    }
  }
  catch (error) {
    console.log(error);
  }
})



module.exports = router;