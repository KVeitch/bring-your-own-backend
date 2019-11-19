const express = require('express');
const cors = require('cors');
const app = express();

app.locals.title = 'Here there be monsters!'
app.locals.monsters = 'monster';

app.use(cors());

app.set('port', process.env.PORT || 3001);

app.get('/', (request, response) => {
  response.send('Soon there will be monsters');
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});
