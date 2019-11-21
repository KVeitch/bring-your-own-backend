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
  database('teams').select()
  .then(teams => {
    response.status(200).json(teams);

  })
});

app.get('/api/v1/teams/:id', (request, response) => {
  const { id } = request.params;
  const foundTeam = app.locals.teams.find(team => team.id === parseInt(id));
  if (!foundTeam) {
    return response
      .status(404)
      .json(`There is no current team with the id of ${id}`);
  }
  response.status(200).json(foundTeam);
});

app.listen(app.get('port'), () => {
  console.log(
    `${app.locals.title} is running on http://localhost:${app.get('port')}.`
  );
});

