const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://ghostlucifer50:Databse10@cluster0.9itvm3b.mongodb.net/"

const connectTOMongo = () => {
    mongoose.connect(mongoURI);
    console.log("Connected to Mongo");
};
module.exports = connectTOMongo;