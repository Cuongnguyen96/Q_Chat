import mongoose, { Schema } from "mongoose";

let schema = mongoose.schema();

let ContactSchema = new Schema({
    userid: String,
    contactid: String,
    status: {type: Boolean, default: false},
    createdAt: {type: Number, default: Date.now},
    updateAt:  {type: Number, default: null},
    deleteAt:  {type: Number, default: null}
});

module.exports = mongoose.model("user", ContactSchema);
