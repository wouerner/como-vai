const mongoose = require('../database')

const UserScheme = new  mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    createAt: {
        type: Date,
        default: Date.now  
    },
});

const User = mongoose.model('User', UserScheme)

module.exports= User;
