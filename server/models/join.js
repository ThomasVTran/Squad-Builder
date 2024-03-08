const { Schema, Model} = require('mongoose');
const date = require('../utils/dateFormat');

const joinSchema = new Schema ({
    requested: {
        type: Date,
        time: date
    },
    player: {
        type: [player.id],
    },
    squad: {
        type: [squad]
    },
    playStyle: {
        type: [String]
    }
}
);

const join = Model('join', joinSchema);

module.exports = join;