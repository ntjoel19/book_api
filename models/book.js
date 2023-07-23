const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
    title : {type: String, required : true},
    author : {type : String, required : true}, 
    price : {type : Number, required : true},
    released_on : {type : String},
    coverImage : {type : String}
})

module.exports = mongoose.model("books", bookSchema);