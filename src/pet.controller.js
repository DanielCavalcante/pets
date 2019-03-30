const Pet = require('./pet.model')

exports.create = (req, res) => {
  let pet = new Pet(req.body)
  pet.save().then(function(pet) {
    res.send(pet)
  }, function(error) {
    console.log(error);
  })
};

exports.findAll = (req, res) => {
  Pet.find().then(function(pets) {
    res.send(pets)
  }, function(error) {
    console.log(error);
  })
};