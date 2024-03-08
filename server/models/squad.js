const { Schema, Model } = require('mongoose');
const date = require('../utils/dateFormat');

const squad = new Schema({
   squadName: {type: String, required: true, minLength: 4, maxLength: 28},
    playerCount: {type: Number, required: true, minLength: 2, maxLength:8},
    playStyle: {Type:[String]},
    ranked:{type: Boolean},
    response: {type: [join]}    
})