const mongoose = require('../database')

const VisitScheme = new  mongoose.Schema({
    observation: {
        type: String,
        required: true
    },
    peopleId:{
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now  
    },
});

const Visit= mongoose.model('Visit', VisitScheme)

module.exports= Visit;
