 # Major League Soccer 2019 API

This API allows you to retrieve data on the 2019 MLS teams and players.
---
[API Docs with sandbox](https://kveitch.github.io/byob-front-end/)
---

## API Endpoints

### Base URL
All URLs referenced in the documentation have the following base:

https://mls2019-api.herokuapp.com

### GET all teams:  
<code>GET /api/v1/teams</code>  

#### Response
<table>
  <thead>
    <tr>
      <th>Status</th>
      <th>Response</th>
    </tr>
  </thead>
  <tr>
    <th>
      200
    </th>
    <th>
      Returns an array of all of the team objects
    </th>
  </tr>
</table>

#### Response Parameters
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>id</code></td>
      <td><code>number</code></td>
      <td>
        Unique team identifier.
      </td>
    </tr>
    <tr>
      <td><code>teamname</code></td>
      <td><code>string</code></td>
      <td>
        Full name of MLS team.
      </td>
    </tr>
    <tr>
      <td><code>stadium</code></td>
      <td><code>string</code></td>
      <td>
        Full name of the team's home stadium.
      </td>
    </tr>
    <tr>
      <td><code>logoUrl</code></td>
      <td><code>string</code></td>
      <td>URL for the team's logo.</td>
    </tr>
    <tr>
      <td><code>city</code></td>
      <td><code>string</code></td>
      <td>City location of the team's stadium</td>
    </tr>
  </tbody>
</table>

<details><summary>Example response</summary>

```json
[
    {
        "id": 1,
        "teamname": "Atlanta United",
        "stadium": "Mercedes-Benz Stadium",
        "logoUrl": "https://cdn.sofifa.org/teams/2/light/112885.png",
        "city": "Atlanta",
        "created_at": "2019-11-22T17:29:50.224Z",
        "updated_at": "2019-11-22T17:29:50.224Z"
    },
    {
        "id": 2,
        "teamname": "Chicago Fire",
        "stadium": "SeatGeek Stadium",
        "logoUrl": "https://cdn.sofifa.org/teams/2/light/693.png",
        "city": "Chicago",
        "created_at": "2019-11-22T17:29:50.259Z",
        "updated_at": "2019-11-22T17:29:50.259Z"
    },
    {
        "id": 3,
        "teamname": "Colorado Rapids",
        "stadium": "Dick’s Sporting Goods Park",
        "logoUrl": "https://cdn.sofifa.org/teams/2/light/694.png",
        "city": "Commerce City",
        "created_at": "2019-11-22T17:29:50.264Z",
        "updated_at": "2019-11-22T17:29:50.264Z"
    },
    {
        "id": 4,
        "teamname": "Columbus Crew SC",
        "stadium": "MAPFRE Stadium",
        "logoUrl": "https://cdn.sofifa.org/teams/2/light/687.png",
        "city": "Columbus",
        "created_at": "2019-11-22T17:29:50.267Z",
        "updated_at": "2019-11-22T17:29:50.267Z"
    },
    {
        "id": 5,
        "teamname": "DC United",
        "stadium": "Audi Field",
        "logoUrl": "https://cdn.sofifa.org/teams/2/light/688.png",
        "city": "Washington DC",
        "created_at": "2019-11-22T17:29:50.268Z",
        "updated_at": "2019-11-22T17:29:50.268Z"
    },
    {
        "id": 6,
        "teamname": "Houston Dynamo",
        "stadium": "BBVA Compass Stadium",
        "logoUrl": "https://cdn.sofifa.org/teams/2/light/698.png",
        "city": "Houston",
        "created_at": "2019-11-22T17:29:50.272Z",
        "updated_at": "2019-11-22T17:29:50.272Z"
    },
    {
        "id": 7,
        "teamname": "FC Dallas",
        "stadium": "Toyota Stadium",
        "logoUrl": "https://cdn.sofifa.org/teams/2/light/695.png",
        "city": "Dallas",
        "created_at": "2019-11-22T17:29:50.271Z",
        "updated_at": "2019-11-22T17:29:50.271Z"
    },
    {
        "id": 8,
        "teamname": "LA Galaxy",
        "stadium": "Dignity Health Sports Park",
        "logoUrl": "https://cdn.sofifa.org/teams/2/light/697.png",
        "city": "Los Angeles",
        "created_at": "2019-11-22T17:29:50.274Z",
        "updated_at": "2019-11-22T17:29:50.274Z"
    },
    {
        "id": 9,
        "teamname": "Los Angeles FC",
        "stadium": "Banc of California Stadium",
        "logoUrl": "https://cdn.sofifa.org/teams/2/light/112996.png",
        "city": "Los Angeles",
        "created_at": "2019-11-22T17:29:50.283Z",
        "updated_at": "2019-11-22T17:29:50.283Z"
    },
    {
        "id": 10,
        "teamname": "Minnesota United FC",
        "stadium": "Allianz Field",
        "logoUrl": "https://cdn.sofifa.org/teams/2/light/111138.png",
        "city": "Minneapolis",
        "created_at": "2019-11-22T17:29:50.290Z",
        "updated_at": "2019-11-22T17:29:50.290Z"
    },
    {
        "id": 11,
        "teamname": "Montreal Impact",
        "stadium": "Saputo Stadium",
        "logoUrl": "https://cdn.sofifa.org/teams/2/light/111139.png",
        "city": "Montreal",
        "created_at": "2019-11-22T17:29:50.291Z",
        "updated_at": "2019-11-22T17:29:50.291Z"
    },
    {
        "id": 12,
        "teamname": "New England Revolution",
        "stadium": "Gillette Stadium",
        "logoUrl": "https://cdn.sofifa.org/teams/2/light/691.png",
        "city": "Foxborough",
        "created_at": "2019-11-22T17:29:50.292Z",
        "updated_at": "2019-11-22T17:29:50.292Z"
    },
    {
        "id": 13,
        "teamname": "New York City FC",
        "stadium": "Yankee Stadium",
        "logoUrl": "https://cdn.sofifa.org/teams/2/light/112828.png",
        "city": "NewYork City",
        "created_at": "2019-11-22T17:29:50.292Z",
        "updated_at": "2019-11-22T17:29:50.292Z"
    },
    {
        "id": 14,
        "teamname": "New York Red Bulls",
        "stadium": "Red Bull Arena",
        "logoUrl": "https://cdn.sofifa.org/teams/2/light/689.png",
        "city": "Harrison",
        "created_at": "2019-11-22T17:29:50.309Z",
        "updated_at": "2019-11-22T17:29:50.309Z"
    },
    {
        "id": 15,
        "teamname": "Orlando City SC",
        "stadium": "Orlando City Stadium",
        "logoUrl": "https://cdn.sofifa.org/teams/2/light/112606.png",
        "city": "Orlando",
        "created_at": "2019-11-22T17:29:50.310Z",
        "updated_at": "2019-11-22T17:29:50.310Z"
    },
    {
        "id": 16,
        "teamname": "Philadelphia Union",
        "stadium": "Talen Energy Stadium",
        "logoUrl": "https://cdn.sofifa.org/teams/2/light/112134.png",
        "city": "Chester",
        "created_at": "2019-11-22T17:29:50.310Z",
        "updated_at": "2019-11-22T17:29:50.310Z"
    },
    {
        "id": 17,
        "teamname": "Portland Timbers",
        "stadium": "Providence Park",
        "logoUrl": "https://cdn.sofifa.org/teams/2/light/111140.png",
        "city": "Portland",
        "created_at": "2019-11-22T17:29:50.324Z",
        "updated_at": "2019-11-22T17:29:50.324Z"
    },
    {
        "id": 18,
        "teamname": "Real Salt Lake",
        "stadium": "Rio Tinto Stadium",
        "logoUrl": "https://cdn.sofifa.org/teams/2/light/111065.png",
        "city": "Sandy",
        "created_at": "2019-11-22T17:29:50.324Z",
        "updated_at": "2019-11-22T17:29:50.324Z"
    },
    {
        "id": 19,
        "teamname": "San Jose Earthquakes",
        "stadium": "Avaya Stadium",
        "logoUrl": "https://cdn.sofifa.org/teams/2/light/111928.png",
        "city": "San Jose",
        "created_at": "2019-11-22T17:29:50.334Z",
        "updated_at": "2019-11-22T17:29:50.334Z"
    },
    {
        "id": 20,
        "teamname": "Seattle Sounders FC",
        "stadium": "CenturyLink Field",
        "logoUrl": "https://cdn.sofifa.org/teams/2/light/111144.png",
        "city": "Seattle",
        "created_at": "2019-11-22T17:29:50.353Z",
        "updated_at": "2019-11-22T17:29:50.353Z"
    },
    {
        "id": 21,
        "teamname": "Sporting Kansas City",
        "stadium": "Children’s Mercy Park",
        "logoUrl": "https://cdn.sofifa.org/teams/2/light/696.png",
        "city": "Kansas City",
        "created_at": "2019-11-22T17:29:50.354Z",
        "updated_at": "2019-11-22T17:29:50.354Z"
    },
    {
        "id": 22,
        "teamname": "Toronto FC",
        "stadium": "BMO Field",
        "logoUrl": "https://cdn.sofifa.org/teams/2/light/111651.png",
        "city": "Toronto",
        "created_at": "2019-11-22T17:29:50.355Z",
        "updated_at": "2019-11-22T17:29:50.355Z"
    },
    {
        "id": 23,
        "teamname": "Vancouver Whitecaps FC",
        "stadium": "BC Place",
        "logoUrl": "https://cdn.sofifa.org/teams/2/light/101112.png",
        "city": "Vancouver",
        "created_at": "2019-11-22T17:29:50.355Z",
        "updated_at": "2019-11-22T17:29:50.355Z"
    }
]
```
</details>


---

### GET a specific team by id or team name:
<code>GET /api/v1/teams/:id</code>  
 
#### Query Parameters
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>id</code></td>
      <td><code>number</code> / <code>string</code></td>
      <td>
        Unique team identifier or full team name 
      </td>
    </tr>
  </tbody>
</table>

#### Response
<table>
  <thead>
    <tr>
      <th>Status</th>
      <th>Response</th>
    </tr>
  </thead>
  <tr>
    <th>
      200
    </th>
    <th>
      Returns a specific team object.
    </th>
  </tr>
</table>

#### Response Parameters
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>id</code></td>
      <td><code>number</code></td>
      <td>
        Unique team identifier.
      </td>
    </tr>
    <tr>
      <td><code>teamname</code></td>
      <td><code>string</code></td>
      <td>
        Full name of MLS team.
      </td>
    </tr>
    <tr>
      <td><code>stadium</code></td>
      <td><code>string</code></td>
      <td>
        Full name of the team's home stadium.
      </td>
    </tr>
    <tr>
      <td><code>logoUrl</code></td>
      <td><code>string</code></td>
      <td>URL for the team's logo.</td>
    </tr>
    <tr>
      <td><code>city</code></td>
      <td><code>string</code></td>
      <td>City location of the team's stadium</td>
    </tr>
  </tbody>
</table>

<details><summary>Example response</summary>

```json
{
    "id": 1,
    "teamname": "Atlanta United",
    "stadium": "Mercedes-Benz Stadium",
    "logoUrl": "https://cdn.sofifa.org/teams/2/light/112885.png",
    "city": "Atlanta",
    "created_at": "2019-11-22T17:29:50.224Z",
    "updated_at": "2019-11-22T17:29:50.224Z"
}
```
</details>

---
### GET all players:  
<code>GET /api/v1/players</code>  

#### Response
<table>
  <thead>
    <tr>
      <th>Status</th>
      <th>Response</th>
    </tr>
  </thead>
  <tr>
    <th>
      200
    </th>
    <th>
      Returns an array of all of the player objects.
    </th>
  </tr>
</table>

#### Response Parameters
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>id</code></td>
        <td><code>number</code></td>
        <td>
          Unique player identifier.
        </td>
      </tr>
      <tr>
        <td><code>name</code></td>
        <td><code>string</code></td>
        <td>
          Full name of player.
        </td>
      </tr>
      <tr>
        <td><code>nationality</code></td>
        <td><code>string</code></td>
        <td>
          Player's country of origin.
        </td>
      </tr>
      <tr>
        <td><code>photoUrl</code></td>
        <td><code>string</code></td>
        <td>URL for the player's image.</td>
      </tr>
      <tr>
        <td><code>preferedFoot</code></td>
        <td><code>string</code></td>
        <td>Player's dominate foot.</td>
      </tr>
      <tr>
        <td><code>age</code></td>
        <td><code>number</code></td>
        <td>Player's age in years for the 2019 MLS season.</td>
      </tr>
      <tr>
        <td><code>team</code></td>
        <td><code>string</code></td>
        <td>Player's team at the end of the 2019 MLS season.</td>
      </tr>
    </tbody>
  </table>

<details><summary>Example response</summary>

```json
[
    {
        "id": 1,
        "name": "A. Carleton",
        "photoUrl": "https://cdn.sofifa.org/players/4/19/234525.png",
        "nationality": "United States",
        "preferedFoot": "Right",
        "age": 18,
        "team": "Atlanta United",
        "created_at": "2019-11-22T17:29:50.372Z",
        "updated_at": "2019-11-22T17:29:50.372Z"
    },
    {
        "id": 2,
        "name": "A. Kann",
        "photoUrl": "https://cdn.sofifa.org/players/4/19/213719.png",
        "nationality": "United States",
        "preferedFoot": "Left",
        "age": 27,
        "team": "Atlanta United",
        "created_at": "2019-11-22T17:29:50.373Z",
        "updated_at": "2019-11-22T17:29:50.373Z"
    },
    {
        "id": 3,
        "name": "A. Wheeler-Omiunu",
        "photoUrl": "https://cdn.sofifa.org/players/4/19/237703.png",
        "nationality": "United States",
        "preferedFoot": "Right",
        "age": 23,
        "team": "Atlanta United",
        "created_at": "2019-11-22T17:29:50.375Z",
        "updated_at": "2019-11-22T17:29:50.375Z"
    },
    {
        "id": 4,
        "name": "B. Guzan",
        "photoUrl": "https://cdn.sofifa.org/players/4/19/164505.png",
        "nationality": "United States",
        "preferedFoot": "Left",
        "age": 33,
        "team": "Atlanta United",
        "created_at": "2019-11-22T17:29:50.385Z",
        "updated_at": "2019-11-22T17:29:50.385Z"
    },
    {
        "id": 5,
        "name": "B. Vazquez",
        "photoUrl": "https://cdn.sofifa.org/players/4/19/236885.png",
        "nationality": "United States",
        "preferedFoot": "Right",
        "age": 19,
        "team": "Atlanta United",
        "created_at": "2019-11-22T17:29:50.386Z",
        "updated_at": "2019-11-22T17:29:50.386Z"
    },
    {
        "id": 6,
        "name": "C. Goslin",
        "photoUrl": "https://cdn.sofifa.org/players/4/19/237886.png",
        "nationality": "United States",
        "preferedFoot": "Right",
        "age": 18,
        "team": "Atlanta United",
        "created_at": "2019-11-22T17:29:50.393Z",
        "updated_at": "2019-11-22T17:29:50.393Z"
    },
    {
        "id": 7,
        "name": "C. McCann",
        "photoUrl": "https://cdn.sofifa.org/players/4/19/166847.png",
        "nationality": "Republic of Ireland",
        "preferedFoot": "Left",
        "age": 30,
        "team": "Atlanta United",
        "created_at": "2019-11-22T17:29:50.408Z",
        "updated_at": "2019-11-22T17:29:50.408Z"
    },
    {
        "id": 8,
        "name": "D. Nagbe",
        "photoUrl": "https://cdn.sofifa.org/players/4/19/202078.png",
        "nationality": "United States",
        "preferedFoot": "Right",
        "age": 27,
        "team": "Atlanta United",
        "created_at": "2019-11-22T17:29:50.409Z",
        "updated_at": "2019-11-22T17:29:50.409Z"
    },
    {
        "id": 9,
        "name": "E. Barco",
        "photoUrl": "https://cdn.sofifa.org/players/4/19/236007.png",
        "nationality": "Argentina",
        "preferedFoot": "Right",
        "age": 19,
        "team": "Atlanta United",
        "created_at": "2019-11-22T17:29:50.410Z",
        "updated_at": "2019-11-22T17:29:50.410Z"
    },
    {
        "id": 10,
        "name": "E. Remedi",
        "photoUrl": "https://cdn.sofifa.org/players/4/19/228838.png",
        "nationality": "Argentina",
        "preferedFoot": "Right",
        "age": 23,
        "team": "Atlanta United",
        "created_at": "2019-11-22T17:29:50.411Z",
        "updated_at": "2019-11-22T17:29:50.411Z"
    }
]
```
</details>

---

### GET a specific player by id:
<code>GET /api/v1/players/:id</code>  

#### Query Parameters
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>id</code></td>
      <td><code>number</code></td>
      <td>
        Unique player identifier.
      </td>
    </tr>
  </tbody>
</table>

#### Response
<table>
  <thead>
    <tr>
      <th>Status</th>
      <th>Response</th>
    </tr>
  </thead>
  <tr>
    <th>
      200
    </th>
    <th>
      Returns a specific player object. 
    </th>
  </tr>
    <tr>
    <th>
      404
    </th>
    <th>
      <code>{
    "error": "There is a not player with an id of 1000"
}</code> 
    </th>
  </tr>
</table>

#### Response Parameters
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>id</code></td>
        <td><code>number</code></td>
        <td>
          Unique player identifier.
        </td>
      </tr>
      <tr>
        <td><code>name</code></td>
        <td><code>string</code></td>
        <td>
          Full name of player.
        </td>
      </tr>
      <tr>
        <td><code>nationality</code></td>
        <td><code>string</code></td>
        <td>
          Player's country of origin.
        </td>
      </tr>
      <tr>
        <td><code>photoUrl</code></td>
        <td><code>string</code></td>
        <td>URL for the player's image.</td>
      </tr>
      <tr>
        <td><code>preferedFoot</code></td>
        <td><code>string</code></td>
        <td>Player's dominate foot.</td>
      </tr>
      <tr>
        <td><code>age</code></td>
        <td><code>number</code></td>
        <td>Player's age in years for the 2019 MLS season.</td>
      </tr>
      <tr>
        <td><code>team</code></td>
        <td><code>string</code></td>
        <td>Player's team at the end of the 2019 MLS season.</td>
      </tr>
    </tbody>
  </table>

<details><summary>Example response</summary>

```json
{
    "id": 1,
    "name": "A. Carleton",
    "photoUrl": "https://cdn.sofifa.org/players/4/19/234525.png",
    "nationality": "United States",
    "preferedFoot": "Right",
    "age": 18,
    "team": "Atlanta United",
    "created_at": "2019-11-22T17:29:50.372Z",
    "updated_at": "2019-11-22T17:29:50.372Z"
}
```
</details>

---

### GET a specific team roster by id or team name:
<code>GET /api/v1/teams/:id/roster</code>   

#### Query Parameters
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>id</code></td>
      <td><code>number</code> / <code>string</code></td>
      <td>
        Unique team identifier or full team name 
      </td>
    </tr>
  </tbody>
</table>

#### Response
<table>
  <thead>
    <tr>
      <th>Status</th>
      <th>Response</th>
    </tr>
  </thead>
  <tr>
    <th>
      200
    </th>
    <th>
      Returns an array of the player objects associated with a specific team. 
    </th>
  </tr>
    <tr>
    <th>
      404
    </th>
    <th>
      <code>
        { error: `Requested team: ${id}. There is no record of that team` }
      </code> 
    </th>
  </tr>
</table>

<details><summary>Example response</summary>

```json
[
    {
        "id": 1,
        "name": "A. Carleton",
        "photoUrl": "https://cdn.sofifa.org/players/4/19/234525.png",
        "nationality": "United States",
        "preferedFoot": "Right",
        "age": 18,
        "team": "Atlanta United",
        "created_at": "2019-11-22T17:29:50.372Z",
        "updated_at": "2019-11-22T17:29:50.372Z"
    },
    {
        "id": 2,
        "name": "A. Kann",
        "photoUrl": "https://cdn.sofifa.org/players/4/19/213719.png",
        "nationality": "United States",
        "preferedFoot": "Left",
        "age": 27,
        "team": "Atlanta United",
        "created_at": "2019-11-22T17:29:50.373Z",
        "updated_at": "2019-11-22T17:29:50.373Z"
    },
    {
        "id": 3,
        "name": "A. Wheeler-Omiunu",
        "photoUrl": "https://cdn.sofifa.org/players/4/19/237703.png",
        "nationality": "United States",
        "preferedFoot": "Right",
        "age": 23,
        "team": "Atlanta United",
        "created_at": "2019-11-22T17:29:50.375Z",
        "updated_at": "2019-11-22T17:29:50.375Z"
    },
    {
        "id": 4,
        "name": "B. Guzan",
        "photoUrl": "https://cdn.sofifa.org/players/4/19/164505.png",
        "nationality": "United States",
        "preferedFoot": "Left",
        "age": 33,
        "team": "Atlanta United",
        "created_at": "2019-11-22T17:29:50.385Z",
        "updated_at": "2019-11-22T17:29:50.385Z"
    },
    {
        "id": 5,
        "name": "B. Vazquez",
        "photoUrl": "https://cdn.sofifa.org/players/4/19/236885.png",
        "nationality": "United States",
        "preferedFoot": "Right",
        "age": 19,
        "team": "Atlanta United",
        "created_at": "2019-11-22T17:29:50.386Z",
        "updated_at": "2019-11-22T17:29:50.386Z"
    },
    {
        "id": 6,
        "name": "C. Goslin",
        "photoUrl": "https://cdn.sofifa.org/players/4/19/237886.png",
        "nationality": "United States",
        "preferedFoot": "Right",
        "age": 18,
        "team": "Atlanta United",
        "created_at": "2019-11-22T17:29:50.393Z",
        "updated_at": "2019-11-22T17:29:50.393Z"
    },
    {
        "id": 7,
        "name": "C. McCann",
        "photoUrl": "https://cdn.sofifa.org/players/4/19/166847.png",
        "nationality": "Republic of Ireland",
        "preferedFoot": "Left",
        "age": 30,
        "team": "Atlanta United",
        "created_at": "2019-11-22T17:29:50.408Z",
        "updated_at": "2019-11-22T17:29:50.408Z"
    },
    {
        "id": 8,
        "name": "D. Nagbe",
        "photoUrl": "https://cdn.sofifa.org/players/4/19/202078.png",
        "nationality": "United States",
        "preferedFoot": "Right",
        "age": 27,
        "team": "Atlanta United",
        "created_at": "2019-11-22T17:29:50.409Z",
        "updated_at": "2019-11-22T17:29:50.409Z"
    },
    {
        "id": 9,
        "name": "E. Barco",
        "photoUrl": "https://cdn.sofifa.org/players/4/19/236007.png",
        "nationality": "Argentina",
        "preferedFoot": "Right",
        "age": 19,
        "team": "Atlanta United",
        "created_at": "2019-11-22T17:29:50.410Z",
        "updated_at": "2019-11-22T17:29:50.410Z"
    },
    {
        "id": 10,
        "name": "E. Remedi",
        "photoUrl": "https://cdn.sofifa.org/players/4/19/228838.png",
        "nationality": "Argentina",
        "preferedFoot": "Right",
        "age": 23,
        "team": "Atlanta United",
        "created_at": "2019-11-22T17:29:50.411Z",
        "updated_at": "2019-11-22T17:29:50.411Z"
    },
    {
        "id": 11,
        "name": "F. Escobar",
        "photoUrl": "https://cdn.sofifa.org/players/4/19/222587.png",
        "nationality": "Argentina",
        "preferedFoot": "Right",
        "age": 23,
        "team": "Atlanta United",
        "created_at": "2019-11-22T17:29:50.412Z",
        "updated_at": "2019-11-22T17:29:50.412Z"
    },
    {
        "id": 12,
        "name": "G. Garza",
        "photoUrl": "https://cdn.sofifa.org/players/4/19/198589.png",
        "nationality": "United States",
        "preferedFoot": "Left",
        "age": 26,
        "team": "Atlanta United",
        "created_at": "2019-11-22T17:29:50.412Z",
        "updated_at": "2019-11-22T17:29:50.412Z"
    },
    {
        "id": 13,
        "name": "H. Villalba",
        "photoUrl": "https://cdn.sofifa.org/players/4/19/215107.png",
        "nationality": "Paraguay",
        "preferedFoot": "Right",
        "age": 23,
        "team": "Atlanta United",
        "created_at": "2019-11-22T17:29:50.413Z",
        "updated_at": "2019-11-22T17:29:50.413Z"
    }
]
```
</details>

---

### Add a team:
<code>POST /api/v1/teams/</code>   

#### Parameters
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
      <th>Required</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>teamname</code></td>
      <td><code>string</code></td>
      <td>
        Full name of MLS team.
      </td>
      <td>Yes</td>
    </tr>
    <tr>
      <td><code>stadium</code></td>
      <td><code>string</code></td>
      <td>
        Full name of the team's home stadium.
      </td>
      <td>Yes</td>
    </tr>
    <tr>
      <td><code>logoUrl</code></td>
      <td><code>string</code></td>
      <td>URL for the team's logo.</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td><code>city</code></td>
      <td><code>string</code></td>
      <td>City location of the team's stadium</td>
      <td>Yes</td>
    </tr>
  </tbody>
</table>

#### Response
<table>
  <thead>
    <tr>
      <th>Status</th>
      <th>Response</th>
    </tr>
  </thead>
  <tr>
    <th>200</th>
    <th>Returns the new player object.</th>
  </tr>
    <tr>
    <th>422</th>
    <th>
      <code>
        { error: `Expected format: { teamname: <String>, city: <String>, stadium: <Sring>, logoUrl: <String> }. You're missing a "${requiredParameter}" property.` }
      </code> 
    </th>
  </tr>
</table>

<details><summary>Example response</summary>

```json
{ id: 34}
```
or

```json
{
    "error": "Expected format: { teamname: <String>, city: <String>, stadium: <Sring>, logoUrl: <String> }.
    You're missing a 'city' property."
}
```
</details>


### Add a player:
<code>POST /api/v1/players/:id</code>  

PLAYERS CAN ONLY BE ADDED TO EXISTING TEAMS

#### Parameters
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
        <th>Required</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>name</code></td>
        <td><code>string</code></td>
        <td>
          Full name of player.
        </td>
        <td>Yes</td>
      </tr>
      <tr>
        <td><code>nationality</code></td>
        <td><code>string</code></td>
        <td>
          Player's country of origin.
        </td>
        <td>Yes</td>
      </tr>
      <tr>
        <td><code>photoUrl</code></td>
        <td><code>string</code></td>
        <td>URL for the player's image.</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td><code>preferedFoot</code></td>
        <td><code>string</code></td>
        <td>Player's dominate foot.</td>
        <td>
          Yes
        </td>
      </tr>
      <tr>
        <td><code>age</code></td>
        <td><code>number</code></td>
        <td>Player's age in years for the 2019 MLS season.</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td><code>team</code></td>
        <td><code>string</code></td>
        <td>Player's team</td>
        <td>Yes</td>
      </tr>
    </tbody>
  </table>

#### Response
<table>
  <thead>
    <tr>
      <th>Status</th>
      <th>Response</th>
    </tr>
  </thead>
  <tr>
    <th>
      200
    </th>
    <th>
      Returns a specific player object. 
    </th>
  </tr>
    <tr>
    <th>
      404
    </th>
    <th>
      <code>
        { error: `Expected format: { name: <String>, age: <Int>, photoUrl: <String>, nationality: <String>, preferedFoot: <String>, team: <String>, }. You're missing a "${param}" property.`}
      </code> 
    </th>
  </tr>
</table>


<details><summary>Example response</summary>

```json
{
    "id": 1,
    "name": "A. Carleton",
    "photoUrl": "https://cdn.sofifa.org/players/4/19/234525.png",
    "nationality": "United States",
    "preferedFoot": "Right",
    "age": 18,
    "team": "Atlanta United",
    "created_at": "2019-11-22T17:29:50.372Z",
    "updated_at": "2019-11-22T17:29:50.372Z"
}
```
</details>

---

### Remove a player:
<code>DELETE /api/v1/players/:id</code>  

#### Response
<table>
  <thead>
    <tr>
      <th>Status</th>
      <th>Response</th>
    </tr>
  </thead>
  <tr>
    <th>200</th>
    <th>`Player ${id} sucessfully deleted.`</th>
  </tr>
    <tr>
    <th>404</th>
    <th><code>`No player with the id of ${id}`</code></th>
  </tr>
</table>

---

### Remove a team:
<code>DELETE /api/v1/team/:id</code>  

#### Response
<table>
  <thead>
    <tr>
      <th>Status</th>
      <th>Response</th>
    </tr>
  </thead>
  <tr>
    <th>200</th>
    <th>`Player ${id} sucessfully deleted.`</th>
  </tr>
    <tr>
    <th>404</th>
    <th><code>`No player with the id of ${id}`</code></th>
  </tr>
</table>



## Project story board
[Storyboard](https://github.com/KVeitch/bring-your-own-backend/projects)