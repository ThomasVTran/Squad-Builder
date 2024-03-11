const db = require('../config/connection');
const { Player, Squad } = require('../models');
const playerSeeds = require('./playerSeeds.json');
const squadSeeds = require('./squadSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Squad', 'squads');

    await cleanDB('Player', 'players');

    await Player.create(playerSeeds);

    for (let i = 0; i < squadSeeds.length; i++) {
      const { _id, createdBy } = await Squad.create(squadSeeds[i]);
      const player = await Player.findOneAndUpdate(
        { username: createdBy },
        {
          $addToSet: {
            squads: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
