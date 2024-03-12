const db = require('../config/connection');
const { Player, Squad } = require('../models');
const playerSeeds = require('./playerSeeds.json');
const squadSeeds = require('./squadSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Squad', 'squads');

    await cleanDB('Player', 'players');

    const players = await Player.create(playerSeeds);

    console.log(players[Math.floor(Math.random()*players.length-1.)]);

    for (let i = 0; i < squadSeeds.length; i++) {
      const squad = await Squad.create(squadSeeds[i]);
      const player = await Player.findOneAndUpdate(
        { username: squad.createdBy },
        {
          $addToSet: {
            squads: squad._id,
          },
        }
      );
      const players = await Player.find()
      for (let j = 0; j < players.length; j++) {
        const player = players[j]
        console.log(player);
        if (player.squads) {
          for (let k = 0; k < player.squads.length; k++) {
            const squad = player.squads[k]
            await Squad.findOneAndUpdate({
              _id: squad._id
            },
            {
              $addToSet: {
                players: player._id
              }
            })
          }
        }
      }
      

    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
