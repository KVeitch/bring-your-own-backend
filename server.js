const express = require('express');
const cors = require('cors');
const app = express();
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.locals.title = '2019 MLS Teams and Players';
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

app.get('/api/v1/teams/:id', (request, response) => {
  const { id } = request.params;
  database('teams')
    .where(function () {
        this
          .where('teamname', String(id))
          .orWhere('id', id)
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
  .then(team =>{
    database('players').where({team:team[0].teamname})
    .then(players => {
      response.status(200).json(players)
    })
  })
  .catch(error => {
    response.status(500).json({ error })
  });
})


app.listen(app.get('port'), () => {
  console.log(
    `${app.locals.title} is running on http://localhost:${app.get('port')}.`
  );
});
