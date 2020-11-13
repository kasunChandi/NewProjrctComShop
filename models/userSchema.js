const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({

    email: {
        type : String,
        required : true
    },

    password: {
         type : String,
         required : true

    }

});
const logingSchema = mongoose.model("login" , loginSchema);

module.exports = logingSchema;