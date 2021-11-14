const mongoose = require('mongoose');

const connectDB = async () => {
   await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      // useCreateIndex: true,
      useUnifiedTopology: true,
      // useFindAndModify: true,
   });
};

console.log('mongoDB connected');

module.exports = connectDB;

// const URI = process.env.MONGODB_URL;

// mongoose.connect(URI, {

// useNewUrlParser: true,

// useUnifiedTopology: true

// }, err => {
// if(err) throw err;
// console.log('Connected to MongoDB!!!')
// });
