const { Schema, Model } = require("mongoose");
const date = require("../utils/dateFormat");

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
    playStyle: [{
        type: String
    }],
    players: [{
        type: Schema.Types.ObjectID,
        ref: player
    }],
    createdAt: {
        type: Date,
        time: date
    }  
}
);

const squad = Model('squad', squadSchema );

module.exports = squad;
