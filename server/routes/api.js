const express = require('express');
const router = express.Router();
const passport = require('passport');
const passportJWT = require('passport-jwt');
const jwt = require('jsonwebtoken');



const yelp = require('yelp-fusion');
const client = yelp.client('Nohw0A1vRl91PDeRC-E845o03N_Qt_D3SgMsG-OYoashucpZN_J0d4cfBim_ewMtyDJ9QgDA4zFRddaGn0kaUIiK7aZUEtNjWzFxTwEqCWuyzF9_wwP7BDbyimfdWHYx')

router.get('/bars/:location', (req, res) => {
    client.search({
        location: req.params.location,
        term: 'bars'
    }).then(response => {
        res.send(response.jsonBody.businesses);
    });
});

router.get('/attendance/:id',  (req, res) => {
    res.send({'venue': req.params.id});
})

router.post('/attendance',  (req, res) => {
    let body = req.body;
    console.log(body);
    res.send(body);
})

/*
router.get('/protected', passport.authenticate('jwt-strategy', {session: false}), (req, res) => {
    res.send({'success': true});
})
*/

//mongoose.connect('mongodb://test:test@ds157040.mlab.com:57040/fcc-nightlife');

module.exports = router;