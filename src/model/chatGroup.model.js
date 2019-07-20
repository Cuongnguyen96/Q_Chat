import mongoose, { Schema } from "mongoose";

let schema = mongoose.schema();

let ChatGroupSchema = new Schema({
    name: String,
    userAmount: {type: Number, min: 3, max: 130},
    messageAmount: {type: Number, default: 0},
    userId: String,
    members:[
        {userId: String}
    ],
    createdAt: {type: Number, default: Date.now},
    updateAt:  {type: Number, default: null},
    deleteAt:  {type: Number, default: null}
});

module.exports = mongoose.model("user", ChatGroupSchema);
