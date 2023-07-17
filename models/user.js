const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const saltRounds = 10;

//User schema
const userSchema = mongoose.Schema({
    email : {
        type : String,
        required : true,
        trim: true,
        unique : true
    },
    password : {
        type : String,
        required : true
    }
});

//has password before saving into db
userSchema.pre('save', (next)=>{
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
})

userSchema.plugin(uniqueValidator);
module.exports = mongoose.model("User", userSchema);