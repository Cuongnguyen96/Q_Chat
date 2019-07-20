import mongoose, { Schema } from "mongoose";

let schema = mongoose.schema();

let MessageSchema = new Schema({
    sender:{
        id: String,
        username: String,
        avatar: String
    },
    receiver:{
        id: String,
        username: String,
        avatar: String
    },
    text: String,
    file: {Data: Buffer, contentType: String, fileName: String},
    createdAt: {type: Number, default: Date.now},
    updateAt:  {type: Number, default: null},
    deleteAt:  {type: Number, default: null}
});

module.exports = mongoose.model("user", MessageSchema);
