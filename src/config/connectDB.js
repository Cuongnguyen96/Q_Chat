import mongoose from "mongoose";
import bluebird from "bluebird";

/**
 * Connect to MongooseDB
 */

let connectDB = () => {
    mongoose.Promise = bluebird;
    //require('dotenv').config(); 
    //mongoose://localhost:27017/Q_Chat
    let URI = `${process.env.DB_CONNECTION}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

    return mongoose.connect(URI, { useMongoClient: true });
}

module.exports = connectDB;
