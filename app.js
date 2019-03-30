const express = require('express')
const mongoose = require('mongoose')
const mongodbUri = require('mongodb-uri')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//let uri = 'mongodb://localhost:27017/pets';
let uri = 'mongodb://aluno:aluno123@ds121238.mlab.com:21238/pets-unipe';
let mongooseUri = mongodbUri.formatMongoose(uri);

mongoose.Promise = global.Promise;
mongoose.connect(mongooseUri)
.then(() => {
  console.log('Sucessfully connected to the database');
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...');
  console.log(err);
  process.exit(1);
});

app.get('', function (req, res) {
  res.send('Hello World')
})

require('./src/pet.routes.js')(app);
  
app.listen(3000, () => {
  console.log('Server is listening on port: 3000');
});