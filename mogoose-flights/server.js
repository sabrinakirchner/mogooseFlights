require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const flightModel = require('./models/flightModel')
const methodOverride = require('method-override'); 

// Middleware
app.use(express.urlencoded({extended:true})); 
app.use(methodOverride('_method'))
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use('/', require('./routes/flights'));

//mongoose
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    //useCreateIndex: true,
});

//Route
app.get('/', (req,res) =>{
    res.redirect('flights');
});

//Index
app.get('/flights',async (req,res) =>{
    try{
        const flights =await flightModel.find(); 
        res.render('index',{flights}); 
    }catch (error) {
    console.error(error); 
    res.status(500).send('server Error'); 
    }
}); 


//New
app.get('/flights/new', (req, res) =>{
    res.render('new');
}); 

//delete 

//Update

//Create
app.post('/flights', async(req,res)=>{
    try{
        await flightModel.create(req.body);
        res.redirect('/flights'); 
    }catch (error){
        console.log(error);
        res.status(500).send('server error');
    };
});
//edit 

//show


//server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});