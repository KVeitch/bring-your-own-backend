const express = require('express');
const cors = require('cors');
const app = express();
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const bodyParser = require('body-parser');

app.locals.title = '2019 MLS Teams and Players';
app.use(cors());
app.use(bodyParser.json());
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
      response.status(200).json(player);
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});

app.get('/api/v1/teams/:id', (request, response) => {
  const { id } = request.params;
  database('teams')
    .where(function() {
      this.where('teamname', id).orWhere('id', id);
    })
    .then(team => {
      response.status(200).json(team);
    })
    .catch(error => {
      response.status(500).json({ error });
    });
});

app.get('/api/v1/teams/:id/roster', (request, response) => {
  const { id } = request.params;
  database('teams')
    .where({ id: id })
    .then(team => {
      database('players')
        .where({ team: team[0].teamname })
        .then(players => {
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
    .del()
    .then(() => response.status(200).json(`player ${id} sucessfully deleted`));
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
      return response.status(422).send({
        error: `Expected format: { name: <String>, age: <Int>, photoUrl: <String>, nationality: <String>, preferedFoot: <String>, team: <String>, }. You're missing a "${param}" property.`
      });
    }
  }

  database('players')
    .insert(player, 'id')
    .then(player => {
      response.status(201).json({ id: player[0] });
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
      return response.status(422).send({
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

app.listen(app.get('port'), () => {
  console.log(
    `${app.locals.title} is running on http://localhost:${app.get('port')}.`
  );
});
