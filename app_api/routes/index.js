const express = require("express");
const tripsController = require("../controllers/trips");
const router = express.Router();

router.
    route('/trips').get(tripsController.tripsList);
    get(tripsController.tripsAddTrips); 
    post(tripsController.tripsAddTrips);

router.
    route('/trips/tripCode');
    get(tripsController.tripsFindByCode);
    put(tripsController.tripsUpdateTrip)

module.exports = router;