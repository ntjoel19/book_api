const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
    id : {
        type: String,
        required : true
    },
    title : {type: String, required : true},
    author : {type : String}, 
    price : {type : Number},
    released_on : {type : Date}
})

module.exports = mongoose.model("Book", bookSchema);