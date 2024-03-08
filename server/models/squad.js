const { Schema, Model } = require('mongoose');
const date = require('../utils/dateFormat');

const squadSchema = new Schema({
   squadName: {
    type: String, 
    required: true, 
    minLength: 4, 
    maxLength: 28
    },
    playerCount: {
        type: Number, 
        required: true, 
        minLength: 2, 
        maxLength:8
    },
    ranked:{
        type: Boolean
    },
    time: {
        type: Date,
        time: date
    },    
    playStyle: [{
        type: String
    }],
}
);

const squad = Model('squad', squadSchema );

module.exports = squad;