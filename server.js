// Brings express package into the project allowing endpoints in node 
const express = require('express');
// Brings cors middleware allowing for access to the db from different origins.
const cors = require('cors');
// Declares app as variable that return the value from invoking express 
const app = express();
// Declares environment as a variable and sets is to either the process.env.NODE_ENV or the string development.
//express() function is a top-level function exported by the express module.
const environment = process.env.NODE_ENV || 'development';
// Declares configuration as a variable that sets the knexfile object to the returnd value of environmnet.
const configuration = require('./knexfile')[environment];
// Declares database as a variable that is set the return of the knex package given the cinfiguration variable value.
const database = require('knex')(configuration);

// Sets the value of app.local object property, title to be a string.
//Values of app.locals properties persist throughout the life of the application.
app.locals.title = '2019 MLS Teams and Players';
//invokes the express.json() middleware to parse all incoming requests for the application.
app.use(express.json());
// Invokes the cors() middleware to be used by the application.
//Allows for request to be made from origins that differ from the app's origin.
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