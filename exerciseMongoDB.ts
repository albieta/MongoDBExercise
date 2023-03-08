require('./connection');

const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = require('bson');


const userSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  credentials: {type: Schema.Types.ObjectId, ref: 'Credentials'},
  description: String,
  number: Number
});

const credentialsSchema = Schema({
  email: String,
  password: String
});

const bookSchema = Schema({
  borrowedBy: {type: Schema.Types.ObjectId, ref: 'User'},
  title: String,
  history: [{type: Schema.Types.ObjectId, ref: 'User'}] 
});

const Book = mongoose.model('Book', bookSchema);
const Credentials = mongoose.model('Credentials', credentialsSchema);
const User = mongoose.model('User', userSchema);

const someFunction = async () => {

  const credentials = new Credentials({
    email: 'albaromagomez@gmail.com',
    password: 'Test123'
  });
  
  const user = new User({
    _id: new ObjectId(),
    name: 'Alba',
    credentials: credentials,
    description: 'una nena molt maca',
    number: 123
  });

  const idUser = user._id;
  const idCredentials = credentials._id;
  
  //CREATE

  credentials.save()
  .then(result => {
    console.log("Credentials saved :)");
  })
  .catch(error => {
    console.error(error);
  });
  
  user.save()
    .then(result => {
      console.log("User saved :)");
    })
    .catch(error => {
      console.error(error);
    });

  //READ
  
  const savedCredentials = await Credentials.find({email: 'albaromagomez@gmail.com'});
  const savedUser = await User.find({name: 'Alba'});
  console.log(savedCredentials);
  console.log(savedUser);

  //UPDATE

  


  //DELETE
  await User.deleteMany({name: "Alba"});
  await Credentials.deleteMany({email: 'albaromagomez@gmail.com'});
  //const resultUser = await User.findByIdAndDelete(idUser);
  //const resultCredentials = await Credentials.findByIdAndDelete(idCredentials);

}

someFunction();



