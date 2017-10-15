var mongoose = require('mongoose');

// Breeds Schema
var horsesSchema = mongoose.Schema({
  name:{
    type: "string",
    //required: true
  },
  breeds:{
    type: "string",
    //required: true
  },
  color:{
    type: "string",
    //required: true
  },
  height:{
    type: "string"
  },
  description:{
    type: "string"
  },
  image_url:{
    type: "string"
  },
  create_date:{
      type: Date,
      default: Date.now
  }
});

var Horses = module.exports = mongoose.model('Horses',horsesSchema);


//get horses
module.exports.getHorses = function(callback, limit){
  Horses.find(callback).limit(limit);
}

// get horse by id
//module.exports.getHorsesById = function(id, callback){
  //Horses.findById(id, callback);
//}
// Add horse
//module.exports.addHorses = function(horses, callback){
 // Horses.create(horses, callback);
//}