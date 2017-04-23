const express = require('express');
const router = express.Router();

const yelp = require('yelp-fusion');
const client = yelp.client('Nohw0A1vRl91PDeRC-E845o03N_Qt_D3SgMsG-OYoashucpZN_J0d4cfBim_ewMtyDJ9QgDA4zFRddaGn0kaUIiK7aZUEtNjWzFxTwEqCWuyzF9_wwP7BDbyimfdWHYx')

//get api listing
router.get('/', (req, res) => {
    res.send('API works!');

});

router.get('/bars/:location', (req, res) => {
    client.search({
        location: req.params.location,
        term: 'bars'
    }).then(response => {
        res.send(response.jsonBody.businesses);
    });
});

//mongoose.connect('mongodb://test:test@ds157040.mlab.com:57040/fcc-nightlife');

module.exports = router;