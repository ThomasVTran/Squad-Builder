const { Schema, Model } = require("mongoose");

const gameSchema = new Schema({
  name: { 
    type: String 
  },
  image: { 
    type: String 
  },
  platforms: {
    type: String
  },
  rating: {
    type: Number
  },
  review: {
    type: String
  },
  squads: [{
    type: Schema.Types.ObjectID,
    ref: squad
  }]
});

const game = Model('game', gameSchema)

module.exports = game;
