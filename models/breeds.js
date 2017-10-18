var mongoose = require('mongoose');

// Breeds Schema
var breedsSchema = mongoose.Schema({
  name:{
    type: "string",
    //required: true
  },
  create_date:{
      type: Date,
      default: Date.now
  }
});
var Breeds = module.exports = mongoose.model('Breeds',breedsSchema);


// get breeds
module.exports.getBreeds = function(callback, limit){
  Breeds.find(callback).limit(limit);
}

// Add Breed
module.exports.addBreeds = function(breeds, callback){
  Breeds.create(breeds, callback);
}
// Update Breed
module.exports.updateBreeds = function(id, breeds, options, callback){
  var query = {_id: id};
  Breeds.findOneAndUpdate(query,breeds, options, callback);
}


// Delete Breed
module.exports.removeBreeds = function(id, callback){
  var query = {_id: id};
  Breeds.remove(query, callback);

//}