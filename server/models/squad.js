const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

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
        minLength: 1, 
        maxLength:8
    },
    description: {
        type: String,
    },
    ranked:{
        type: Boolean
    },
    playStyle: [{
        type: String
    }],
    players: [{
        type: Schema.Types.ObjectId,
        ref: 'Player'
    }],
    createdBy: {
        type: String, 
        // ref: 'Player',
        // required: true
    },
    // gameFor: {
    //     type: String,
    //     ref: 'Game',
    //     required: true
    // },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp)
    }
}
);

const Squad = model('Squad', squadSchema );

module.exports = Squad;
