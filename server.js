const express = require('express');
const cors = require('cors');
const app = express();
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.locals.title = '2019 MLS Teams and Players';
app.use(express.json());
app.use(cors());
app.set('port', process.env.PORT || 3001);

app.get('/api/v1/teams', (request, response) => {
  database('teams')
    .select()
    .then(teams => {
      response.status(200).json(teams);
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});

app.get('/api/v1/players', (request, response) => {
  database('players')
    .select()
    .then(players => {
      response.status(200).json(players);
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});

app.get('/api/v1/players/:id', (request, response) => {
  const { id } = request.params;
  database('players')
    .where({ id: id })
    .then(player => {
      if (player.length === 0) {
        response
          .status(404)
          .json({ error: `There is a not player with an id of ${id}` });
      }
      response.status(200).json(player[0]);
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});

app.get('/api/v1/teams/:id', (request, response) => {
  const { id } = request.params;
  const queryDeterminiator = parseInt(id)
    ? { id: parseInt(id) }
    : { teamname: id };

  database('teams')
    .where(queryDeterminiator)
    .then(team => {
      if (team.length === 0) {
        response
          .status(404)
          .json({
            error: `Requested team: ${id}. There is no record of that team`
          });
      }
      response.status(200).json(team[0]);
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});

app.get('/api/v1/teams/:id/roster', (request, response) => {
  const { id } = request.params;
  const queryDeterminiator = parseInt(id)
    ? { id: parseInt(id) }
    : { teamname: id };

  database('teams')
    .where(queryDeterminiator)
    .then(team => {
      if (team.length === 0) {
        response
          .status(404)
          .json({
            error: `Requested team: ${id}. There is no record of that team`
          });
      }
      database('players')
        .where({ team: team[0].teamname })
        .then(players => {
          if (players.length === 0) {
            response
              .status(404)
              .json({ error: `The requested team: ${id}, has no players` });
          }
          response.status(200).json(players);
        });
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});

app.delete('/api/v1/players/:id', (request, response) => {
  const { id } = request.params;
  database('players')
    .where({ id: id })
    .select()
    .del()
    .then(results => {
      if (results === 0) {
        response.status(404).json(`No player with the id of ${id}`);
      }
      response.status(200).json(`Player ${id} sucessfully deleted.`);
    })
    .catch(error => {
      response.status(404).json({ error });
    });
});

app.post('/api/v1/players', (request, response) => {
  const player = request.body;
  console.log('REQUEST.BODY', player);
  for (let param of [
    'name',
    'age',
    'photoUrl',
    'nationality',
    'preferedFoot',
    'team'
  ]) {
    if (!player[param]) {
      return response.status(422).json({
        error: `Expected format: { name: <String>, age: <Int>, photoUrl: <String>, nationality: <String>, preferedFoot: <String>, team: <String>, }. You're missing a "${param}" property.`
      });
    }
  }

  database('players')
    .insert(player, 'id')
    .then(playerId => {
      response.status(201).json({ id: playerId[0], ...player });
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});

app.post('/api/v1/teams', (request, response) => {
  const team = request.body;
  console.log('REQUEST.BODY', team);
  for (let requiredParameter of ['teamname', 'city', 'stadium', 'logoUrl']) {
    if (!team[requiredParameter]) {
      return response.status(422).json({
        error: `Expected format: { teamname: <String>, city: <String>, stadium: <Sring>, logoUrl: <String> }. You're missing a "${requiredParameter}" property.`
      });
    }
  }

  database('teams')
    .insert(team, 'id')
    .then(team => {
      response.status(201).json({ id: team[0] });
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});

app.get("/", (request, response) => {
  response.send("Please head to https://github.com/KVeitch/bring-your-own-backend for documentation");
});

app.listen(app.get('port'), () => {
  console.log(
    `${app.locals.title} is running on https://mls2019-api.herokuapp.com/:${app.get('port')}.`
  );
});
