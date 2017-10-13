var express = require('express');
var app = express ();
var bodyParser =  require ('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json({type:"application/json"}));
app.use(bodyParser.urlencoded({extended:true}));

Breeds = require('./models/breeds.js');
Horses = require('./models/horses.js');

//connect to Mongoose
//mongoose.connect ('mongodb://localhost/horses');
//var db = mongoose.connection

mongoose.connect('mongodb://katie406:firemissy.406@ds013475.mlab.com:13475/users123', {
  useMongoClient: true,
});

app.get('/', function(req, res){
  res.send('Please use /api/horses or /api/breeds');
});

app.get ('/api/breeds',function(req, res){
   Breeds.getBreeds(function(err, breeds){
     if(err){
       throw err;
     }
     res.json(breeds);
   });
});

app.post('/api/breeds',function(req, res, next){
  var breeds = req.body;
  console.log(breeds);
  Breeds.addBreeds(breeds, function(err, breeds){
    if(err){
      next (err);
    } else {
      res.json(breeds);
    }
  });
});

app.put('/api/breeds/:_id', function(req, res, next){
  var id =req.params._id;
  var breed = req.body;
  console.log(breed,id);
  Breeds.findByIdAndUpdate(id, breed, {new: true}, function(err, updatedBreed){
    if(err){
      next (err); 
    } else {
      res.json(updatedBreed);
    }
  })
});

app.delete('/api/breeds/:_id', function(req, res){
  var id =req.params._id;
  Breeds.removeBreeds(id, function(err, Breeds){
    if(err){
      throw (err); 
    } 
    res.json(breeds);
  })
});



app.get ('/api/horses',function(req, res){
  Horses.getHorses(function(err, horses){
    if(err){
      throw err;
    }
    res.json(horses);
  });
});

app.get ('/api/horses/:_id',function(req, res){
  Horses.getHorsesById(req.params._id, function(err, horses){
    if(err){
      throw err;
    }
    res.json(horses);
  });
});




app.listen(3000);
console.log('running on port 3000...');

