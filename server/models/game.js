const { Schema, model } = require("mongoose");

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
    ref: 'Squad'
  }]
});

const Game = model("Game", gameSchema);

module.exports = Game;
