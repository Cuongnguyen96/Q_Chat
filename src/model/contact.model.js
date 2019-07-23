import mongoose from "mongoose";

let Schema = mongoose.Schema;

let ContactSchema = new Schema({
    userid: String,
    contactid: String,
    status: {type: Boolean, default: false},
    createdAt: {type: Number, default: Date.now},
    updateAt:  {type: Number, default: null},
    deleteAt:  {type: Number, default: null}
});

// Function mongooseDB
ContactSchema.statics = {
    createNew(item){
        return this.create(item);
    }
};

module.exports = mongoose.model("user", ContactSchema);
