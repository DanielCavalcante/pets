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

exports.findOne = (req, res) => {
  Pet.findById(req.params.id).then(pet => {
    res.send(pet);
  }).catch(err => {
    if (err.kind === 'ObjectId')
      res.status(404).send({ message: `Pet not found with id: ${req.params.id}` });
    
    res.status(500).send({ message: `Error retrieving Pet with id: ${req.params.id}` });
  });
};

exports.update = (req, res) => {
  Pet.findByIdAndUpdate(req.params.id, req.body,
    { new: true }).then(pet => {
      res.send(pet);
    }).catch(err => {
      if (err.kind === 'ObjectId')
        res.status(404).send({ message: `Pet not found with id: ${req.params.id}` });
    });
};

exports.delete = (req, res) => {
  Pet.findByIdAndRemove(req.params.id).then(pet => {
    res.send({ message: 'Pet deleted sucessfully' });
  }).catch(err => {
    if (err.kind === 'ObjectId' || err.description === 'Not found')
      res.status(404).send({ message: `Pet not found with id: ${req.params.id}` });
  });
};
