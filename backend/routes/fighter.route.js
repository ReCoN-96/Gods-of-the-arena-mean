const express = require('express');
const app = express();
const fighterRoute = express.Router();

// Fighter model
let Fighter = require('../models/Fighter');

// Add Fighter
fighterRoute.route('/create').post((req, res, next) => {
  Fighter.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Fighters
fighterRoute.route('/').get((req, res) => {
  Fighter.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single fighter
fighterRoute.route('/read/:id').get((req, res) => {
  Fighter.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update fighter
fighterRoute.route('/update/:id').put((req, res, next) => {
  Fighter.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

// Delete fighter
fighterRoute.route('/delete/:id').delete((req, res, next) => {
  Fighter.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = fighterRoute;
