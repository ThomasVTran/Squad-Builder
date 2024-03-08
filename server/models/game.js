const { Schema, Model } = require("mongoose");

const gameSchema = new Schema({
  name: { type: String },
  image: { type: String },
  platforms: {type: String},
  rating: {type: Number},
  review: {type: String}
});
