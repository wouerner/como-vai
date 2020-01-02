const mongoose = require('../database')

const PeopleScheme = new  mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now  
    },
});

const People = mongoose.model('People', PeopleScheme)

module.exports= People;
