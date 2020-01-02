const express = require('express');

const Visit = require('../models/visit');

const router =  express.Router();

router.post('/create', async(req, res) => {
    try {
        const visit = await Visit.create(req.body);
        return res.send({ visit });
    } catch(err){
        return res.status(400).send({ error: 'Registration failed' });
    }
});

router.get('/list', async(req, res) => {
    try {

     Visit.find({}, function(err, visits) {
        var visitMap = {};

        visits.forEach(function(visit) {
          visitMap[visit._id] = visit;
        });

        res.send(visitMap);  
      });

    } catch(err){
        return res.status(400).send({ error: 'Registration failed' });
    }
});

router.put('/update', async(req, res) => {
    try {
        const { observation } = req.body;

        const visit = await Visit.findByAndUpdate(req.params.id, {
            observation
        });

        await visisit.save();

        res.send({ visit });

    } catch(err){
        return res.status(400).send({ error: 'Registration failed' });
    }
});

router.delete('/remove', async(req, res) => {
    try {

      await Visit.findByAndRemove(req.params.id);
      res.send('removed');  

    } catch(err){
        return res.status(400).send({ error: 'Registration failed' });
    }
});

module.exports = app => app.use('/visit', router);
