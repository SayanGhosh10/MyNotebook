const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/inotebook?directConnection=true"

const connectTOMongo = () => {
    mongoose.connect(mongoURI);
    console.log("Connected to Mongo");
};
module.exports = connectTOMongo;