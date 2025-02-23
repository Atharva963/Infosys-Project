const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    "name":{
        type:String,
        require:true,
        trim:true
    },
    "email":{
        type:String,
        require:true,
        trim:true
    },
    "password":{
        type:String,
        require:true
    }
})

const User = mongoose.model('User',userSchema);
module.exports = User;
// const mongoose = require("mongoose");

// const UserSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
// });

// module.exports = mongoose.model("User", UserSchema);
