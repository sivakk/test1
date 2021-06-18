const mongoose = require("mongoose");



const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
    },

});


module.exports = mongoose.model("User", UserSchema);