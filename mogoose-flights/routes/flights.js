const express = require('express');
const router = express.Router();
const FlightModel = require('../models/flightModel');


//route display list 
router.get('flights', async(req,res)=>{
    try{
        const flights= await FlightModel.find({});
        res.render('flights/index', { flights });
    }catch (err){
        console.error(err);
        res.status(500).send('Server Error'); 
    }
})

//Route to display flights
router.get('New',(req,res) => {
    res.render('New'); 
});

//Route handle flight
router.post('/flights', async (req,res)=>{
    try{
        const{ airline, flightNo, departs }=req.body;
        const flight = new FlightModel({airline, flightNo, departs });
        await flight.save();
        res.redirect('/flights'); 
    }catch (err){
        console.error(err);
        res.status(500).send('server Error'); 
    }
}); 


module.exports = router; 
