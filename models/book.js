const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
    id : {
        type: String,
        required : true
    },
    name : {type: String},
    title : {type: String, required : true},
    author : {type : String}, 
    price : {type : Number},
    creationDate : {type : Date}
})

module.exports = mongoose.model("Book", bookSchema);