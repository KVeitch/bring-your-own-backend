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
// Sets the port, that express will use, dynamically as either process.env.PORT or 3001
app.set('port', process.env.PORT || 3001);
//Creates an endpoint for the '/api/v1/teams' route 
app.get('/api/v1/teams', (request, response) => {
  //knex will use the teams table to run the following methods/queries on
  database('teams')
  //knex selects all of the data from the teams table
  // SQL query: SELECT * FROM teams
    .select()
    //run a function on the returned data
    .then(teams => {
      //Return the stringified data with an ok status, and a status code of 200
      response.status(200).json(teams);
    })
    //Return an error if an error was created
    .catch(error => {
      //Return the stringified error with a status code of 500 
      response.status(500).json({ error });
    });
});
//Creates an endpoint for the '/api/v1/players' route when the method is GET
app.get('/api/v1/players', (request, response) => {
  //knex will use the players table to run the following methods/queries on
  database('players')
    //knex selects all of the data from the teams table
  // SQL query: SELECT * FROM players
    .select()
    //run a function on the returned data
    .then(players => {
      //Return the stringified data with an ok status, and a status code of 200
      response.status(200).json(players);
    })
    //Return an error if an error was created
    .catch(error => {
      //Return the stringified error with a status code of 500 
      response.status(500).json({ error });
    });
});
//Creates an endpoint for the '/api/v1/teams/:id' route when the method is GET
app.get('/api/v1/players/:id', (request, response) => {
  //Declares a variable id that is destructured from the request.parameters object 
  const { id } = request.params;
  //knex will use the players table to run the following methods/queries on
  database('players')
  //Queries the db players table for  rows where the id column is equal to the id variable
  //SQL query: SELECT * FROM players WHERE id = ${id}
    .where({ id: id })
    //run a function on the returned data, an array of selected players
    .then(player => {
      //determine if any players were returned.
      if (player.length === 0) {
        //Retuen a response with a status code of 404 and a strinified object containind a error
        response.status(404).json({ error: `There is a not player with an id of ${id}` });
      }
      //Return the stringified zero index of the returned array, with an ok status, and a status code of 200
      response.status(200).json(player[0]);
    })
    //Return an error if an error was created
    .catch(error => {
      //Return the stringified error with a status code of 500 
      response.status(500).json({ error });
    });
});
//Creates an endpoint for the '/api/v1/teams/:id' route when the method is GET
app.get('/api/v1/teams/:id', (request, response) => {
  //Declares a variable id that is destructured from the request.parameters object 
  const { id } = request.params;
  //Declare a variable that is equal to an object containing the key value pair of id:id if parseInt can successfully be executed on id.
  //if parseInt cannot be successfully run on id then set the variable to equal an object that contain the key value pair of teamname:id 
  const queryDeterminiator = parseInt(id) ? { id: parseInt(id) }: { teamname: id };
//knex will use the teams table to run the following methods/queries on
  database('teams')
  //Queries the db teams table for rows where the id column is equal to the id variable
  //or
  //Queries the db players table for  rows where the teamname column is equal to the id variable
  //SQL query: SELECT * FROM players WHERE id = ${id}
  //or
  //SQL query: SELECT * FROM teams WHERE id = ${id}  
    .where(queryDeterminiator)
    //run a function on the returned data
    .then(team => {
      //determine if any teams were returned.
      if (team.length === 0) {
        //Return a response with a status code of 404 and a stringified object containing an string
        response.status(404).json({ error: `Requested team: ${id}. There is no record of that team` });
      }
      //Return the stringified zero index of the returned array, with an ok status, and a status code of 200
      response.status(200).json(team[0]);
    })
    //Return an error if an error was created
    .catch(error => {
      //Return the stringified error with a status code of 500 
      response.status(500).json({ error });
    });
});
//Creates an endpoint for the '/api/v1/teams/:id/roster' route when the method is GET
app.get('/api/v1/teams/:id/roster', (request, response) => {
  //Declares a variable id that is destructured from the request.parameters object 
  const { id } = request.params;
  //Declare a variable that is equal to an object containing the key value pair of id:id if parseInt can successfully be executed on id.
  //if parseInt cannot be successfully run on id then set the variable to equal an object that contain the key value pair of teamname:id 
  const queryDeterminiator = parseInt(id) ? { id: parseInt(id) } : { teamname: id };
//knex will use the teams table to run the following methods/queries on
  database('teams')
  //Queries the db teams table for rows where the id column is equal to the id variable
  //or
  //Queries the db players table for  rows where the teamname column is equal to the id variable
  //SQL query: SELECT * FROM players WHERE id = ${id}
  //or
  //SQL query: SELECT * FROM teams WHERE id = ${id} 
    .where(queryDeterminiator)
    //run a function on the returned data
    .then(team => {
      //determine if any teams were returned.
      if (team.length === 0) {
        // Return a response with a status code of 404 and a stringified object containg a string
        response.status(404).json({ error: `Requested team: ${id}. There is no record of that team` });
      }
      //knex will use the players table to run the following methods/queries on
      database('players')
      //Queries the db players table for  rows where the teamname column is equal to the id variable
      //SQL query: SELECT * FROM players WHERE teamname = ${team[0].teamname}
        .where({ team: team[0].teamname })
        //run a function on the returned data
        .then(players => {
          //determine if any players were returned.
          if (players.length === 0) {
            // Return a response with a status code of 404 and a stringified object containg a string
            response.status(404).json({ error: `The requested team: ${id}, has no players` });
          }
          //Return the stringified data with an ok status, and a status code of 200
          response.status(200).json(players);
        });
    })
    //Return an error if an error was created
    .catch(error => {
      //Return the stringified error with a status code of 500 
      response.status(500).json({ error });
    });
});
//Creates an endpoint for the '/api/v1/players/:id' route when the method is DELETE
app.delete('/api/v1/players/:id', (request, response) => {
  //Declares a variable id that is destructured from the request.parameters object 
  const { id } = request.params;
  //knex will use the players table to run the following methods/queries on
  database('players')
      //Queries the db players table for rows where the id column is equal to the id variable
      //SQL query: SELECT * FROM players WHERE id = ${id}
    .where({ id: id })
    // Delete the selected rows
    .del()
    //run a function on the returned data, the number of rows deleted
    .then(results => {
      //Determine if any rows were deleted
      if (results === 0) {
        // Return a response with a status code of 404 and a stringified object containg a string
        response.status(404).json(`No player with the id of ${id}`);
      }
      //Return a response with an ok status and a status code of 200 and a stringified string.
      response.status(200).json(`Player ${id} sucessfully deleted.`);
    })
    //Return an error if an error was created
    .catch(error => {
      //Return the stringified error with a status code of 500 
      response.status(404).json({ error });
    });
});
//Creates an endpoint for the '/api/v1/players' route when the method is POST
app.post('/api/v1/players', (request, response) => {
  //Declares a variable equal to the body of te request object
  const player = request.body;
  //Itterate through the array once for each element in the array
  for (let param of [ 'name', 'age', 'photoUrl', 'nationality', 'preferedFoot', 'team']) {
    //determin if the player object contains the correct/required KVPs
    if (!player[param]) {
      // Return a response with a status code of 422 and a stringified object containg a string
      return response.status(422).json({
        error: `Expected format: { name: <String>, age: <Int>, photoUrl: <String>, nationality: <String>, preferedFoot: <String>, team: <String>, }. You're missing a "${param}" property.`
      });
    }
  }
//knex will use the players table to run the following methods/queries on
  database('players')
  //knex will insert the player object into the player table and return the content in the id column
    .insert(player, 'id')
    //run a function on the returned data
    .then(playerId => {
      //Return the stringified player object including the new id, with an ok status, and a status code of 201
      response.status(201).json({ id: playerId[0], ...player });
    })
    //Return an error if an error was created
    .catch(error => {
      //Return the stringified error with a status code of 500 
      response.status(500).json({ error });
    });
});
//Creates an endpoint for the '/api/v1/teams' route when the method is POST
app.post('/api/v1/teams', (request, response) => {
  const team = request.body;
  //Itterate through the array once for each element in the array
  for (let requiredParameter of ['teamname', 'city', 'stadium', 'logoUrl']) {
     //determin if the player object contains the correct/required KVPs
    if (!team[requiredParameter]) {
      // Return a response with a status code of 422 and a stringified object containg a string
      return response.status(422).json({
        error: `Expected format: { teamname: <String>, city: <String>, stadium: <Sring>, logoUrl: <String> }. You're missing a "${requiredParameter}" property.`
      });
    }
  }
//knex will use the teams table to run the following methods/queries on
  database('teams')
  //knex will insert the team object into the team table and return the content in the id column
    .insert(team, 'id')
    //run a function on the returned data
    .then(team => {
      //Return the stringified object that contains the new id, with an ok status, and a status code of 201
      response.status(201).json({ id: team[0] });
    })
    //Return an error if an error was created
    .catch(error => {
      //Return the stringified error with a status code of 500 
      response.status(500).json({ error });
    });
});
//Creates an endpoint for the '/' route when the method is GET
app.get("/", (request, response) => {
  //Return the text 
  response.send("Please head to https://github.com/KVeitch/bring-your-own-backend for documentation");
});
//Binds and listens for connections on the specified host and port  process.env.PORT || 3001
app.listen(app.get('port'), () => {
  console.log(
    `${app.locals.title} is running on https://mls2019-api.herokuapp.com/:${app.get('port')}.`
  );
});