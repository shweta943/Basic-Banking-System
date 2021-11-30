const mongoose = require("mongoose");

const details = new mongoose.Schema({
    name1 : {
        type:String,
        required:true
    },
    name2 : {
        type:String,
        required:true
    },
    amount : {
        type:String,
        required:true
    }
})
module.exports = mongoose.model("myTransferTable", details)