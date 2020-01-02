const express = require('express');

const People = require('../models/people');

const router = express.Router();

router.post('/create', async(req, res) => {
    try {
        const people = await People.create(req.body);
        return res.send({ people });
    } catch(err){
        return res.status(400).send({ error: 'Registration failed' });
    }
});

router.get('/list', async(req, res) => {
    try {

     People.find({}, function(err, peoples) {
        var peopleMap = {};

        peoples.forEach(function(people) {
          peopleMap[people._id] = people;
        });

        res.send(peopleMap);  
      });

    } catch(err){
        return res.status(400).send({ error: 'Registration failed' });
    }
});

module.exports = app => app.use('/people', router);
