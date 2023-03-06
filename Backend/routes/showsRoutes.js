const express = require('express');
const router = express.Router();

//to validate the data
const { body, validationResult } = require('express-validator');



//database pg connection
const { configDb } = require('../config.js');
const knexConfig = configDb.knexPGConfig;
const knex = require('knex')(knexConfig);



//creating routes
//displaying all the shows
//for both

router.post('/getshows', async (req, res) => {
  try {
    console.log(req.body);
    const result = await knex.withSchema('cinemabackend').table('cinemas_movies').andWhere('isactive', true).andWhere('movieid', req.body.movieid);
    console.log(result);
    res.json({ shows: result });
  }
  catch (error) {
    console.log('catch' + error);
    res.status(400);
  }
})

router.post('/getshow', async (req, res) => {
  try {
    console.log(req.body);
    const result = await knex.withSchema('cinemabackend').table('cinemas_movies').andWhere('isactive', true).andWhere('id', req.body.showid);
    console.log(result[0]);
    res.json({ show: result[0] });
  }
  catch (error) {
    console.log('catch' + error);
    res.status(400);
  }
})




//requiring middleware
const { tokenChecking } = require('../middlewares/checkingPermissions.js');
router.use(tokenChecking);





//displaying a particular show
//for both

// router.get('/get/:id', async (req, res) => {
//   try {
//     const result = await knex.withSchema('cinemabackend').table('cinemas_movies').where('id', req.params.id);
//     res.json(result);
//   }
//   catch (error) {
//     console.log('catch' + error);
//     res.status(400);
//   }
// })



//adding a show
//for admin
router.post('/', body('cinemaid').isInt(), body('movieid').isInt(), async (req, res) => {
  try {
    const err = validationResult(req);
    if (!err.isEmpty() || !req.body.screeningtime) {
      res.status(400).json('please enter proper details');
    }

    await knex.withSchema('cinemabackend').table('cinemas_movies').insert(req.body);
    res.json('show is added successfully');
  }
  catch (error) {
    console.log('catch' + error);
    res.status(400);
  }
});



//updating a show
//for admin
router.put('/update/:id', body('cinemaid').isInt(), body('movieid').isInt(), async (req, res) => {
  try {
    const err = validationResult(req);
    if (!err.isEmpty() || !req.body.screeningtime) {
      res.status(400).json('please enter proper details');
    }

    const result = await knex.withSchema('cinemabackend').table('cinemas_movies').where('id', req.params.id).update(
      {
        cinemaid: req.body.cinemaid,
        movieid: req.body.movieid,
        screeningtime: req.body.screeningtime
      }
    )
    if (result) {
      res.json('updated successfully');
    }
    else {
      res.json('show is not found');
    }
  }
  catch (error) {
    console.log('catch' + error);
    res.status(400);
  }
});



//deleting a show
//for admin
router.delete('/delete/:id', async (req, res) => {
  try {
    console.log('deleting a particular show');
    const result = await knex.withSchema('cinemabackend').table('cinemas_movies').where('id', req.params.id).update({ isactive: false });
    if (result) {
      res.json({ message: 'deleted successfully' });
    }
    else {
      res.json({ error: 'show is not found' });
    }
  }
  catch (error) {
    console.log('catch' + error);
    res.status(400);
  }
})

module.exports = router;





