const teamsData = require('../../../../data/MLSTeams');
const playersData = require('../../../../data/MLSPlayers');

const createTeam = (knex, team) => {
  return knex('teams')
    .insert(
      {
        teamName: team.Club,
        stadium: team.Stadium,
        logoUrl: team.ClubLogo,
        city: team.City
      },
      'teamName'
    )
    .then(teamName => {
      let playersPromise = [];
      playersData
        .filter(player => player.Club === teamName[0])
        .forEach(player => {
          playersPromise.push(
            createPlayer(knex, {
              name: player.Name,
              age: player.Age,
              photoUrl: player.Photo,
              nationality: player.Nationality,
              preferedFoot: player.PreferredFoot,
              team: teamName[0]
            })
          );
        });
      return Promise.all(playersPromise)
    });
};

const createPlayer = (knex, player) => {
  return knex('players').insert(player);
};

// const createPlayer = (knex, player) => {
//   return knex('players').insert({
//     name: player.Name,
//     age: player.Age,
//     photoUrl: player.Photo,
//     nationality: player.Nationality,
//     preferedFoot: player.PreferedFoot,
//     team: teamName[0]
//   });
// };

exports.seed = knex => {
  return knex('players')
    .del()
    .then(() => knex('teams').del())
    .then(() => {
      let teamPromises = [];
      teamsData.forEach(team => {
        teamPromises.push(createTeam(knex, team));
      });
      return Promise.all(teamPromises);
    })
    // .then(() => {
    //   let playerPromises = [];
    //   playersData.forEach(team => {
    //     playerPromises.push(createPlayer(knex, team));
    //   });
    //   return Promise.all(playerPromises);
    // })
    .catch(error => console.log(`We have a problem here! => ${error}`));
};
