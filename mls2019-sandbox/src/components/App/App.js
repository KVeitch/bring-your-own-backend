import React, { Component } from 'react';
import './App.css';
import ReactJson from 'react-json-view';
import {
  getTeams,
  getTeam,
  getPlayers,
  getPlayer,
  getRoster,
  createTeam,
  createPlayer,
  deletePlayer
} from '../../utils/apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      teamsResponse: [],
      playersResponse: [],
      playerResponse: {},
      teamResponse: {},
      rosterResponse: [],
      postPlayerResponse: {},
      postTeamResponse: {},
      deletePlayerResponse: {},
      deletePlayerNum: null,
      playerNum: null,
      teamNum: null,
      rosterNum: null,
      teamname: null,
      city: null,
      logoUrl: null,
      stadium: null,
      name: null,
      nationality: null,
      photoUrl: null,
      preferedFoot: null,
      age: null,
      team: null
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  setTeamsResponse = async () => {
    const teamsResponse = await getTeams();
    this.setState({ teamsResponse });
  };

  setTeamResponse = async () => {
    const teamResponse = await getTeam(this.state.teamNum);
    this.setState({ teamResponse });
  };

  setPlayersResponse = async () => {
    const playersResponse = await getPlayers();
    this.setState({ playersResponse });
  };

  setPlayerResponse = async () => {
    const playerResponse = await getPlayer(this.state.playerNum);
    this.setState({ playerResponse });
  };

  setRoster = async () => {
    const rosterResponse = await getRoster(this.state.rosterNum);
    this.setState({ rosterResponse });
  };

  clearTeamsResponse = () => this.setState({ teamsResponse: [] });

  clearTeamResponse = () => this.setState({ teamResponse: {} });

  clearPlayersResponse = () => this.setState({ playersResponse: [] });

  clearPlayerResponse = () => this.setState({ playerResponse: {} });

  clearRoster = () => this.setState({ rosterResponse: [] });

  clearTeam = () =>
    this.setState({ teamname: null, city: null, logoUrl: null, stadium: null });

  clearDelete = () =>
    this.setState({ deletePlayerNum: null, deletePlayerResponse: {} });

  clearPostPlayerResponses = () => {
    this.setState({
      name: null,
      nationality: null,
      photoUrl: null,
      preferedFoot: null,
      age: null,
      team: null,
      postPlayerResponses: {}
    });
  };

  makeTeam = async () => {
    const { teamname, city, logoUrl, stadium } = this.state;
    const team = { teamname, city, logoUrl, stadium };
    const postTeamResponse = await createTeam(team);
    this.setState({ postTeamResponse });
  };

  makePlayer = async () => {
    const { name, nationality, photoUrl, preferedFoot, age, team } = this.state;
    const player = { name, nationality, photoUrl, preferedFoot, age, team };
    const postPlayerResponse = await createPlayer(player);
    this.setState({ postPlayerResponse });
  };

  removePlayer = async () => {
    const id = this.state.deletePlayerNum;
    const res = await deletePlayer(id);
    const deletePlayerResponse = ({response:res})

    this.setState({ deletePlayerResponse });
  };

  render = () => {
    return (
      <>
        <h1 className='main-title'>MLS 2019 API Documentation and Sandbox</h1>
        <h2>This API allows you to retrieve data on the 2019 MLS teams and players.</h2>
        <main>
          <h2>API Endpoints</h2>
          <p>Base URL: All URLs referenced in the documentation have the following base:</p>
          <code>https://mls2019-api.herokuapp.com</code>
          <div className='main__div--border'>
            <h2>GET all teams <code>/api/v1/teams</code></h2>
            <h3>Response Parameters</h3>
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
                  <td>
                    <code>id</code>
                  </td>
                  <td>
                    <code>number</code>
                  </td>
                  <td>Unique team identifier.</td>
                </tr>
                <tr>
                  <td>
                    <code>teamname</code>
                  </td>
                  <td>
                    <code>string</code>
                  </td>
                  <td>Full name of MLS team.</td>
                </tr>
                <tr>
                  <td>
                    <code>stadium</code>
                  </td>
                  <td>
                    <code>string</code>
                  </td>
                  <td>Full name of the team's home stadium.</td>
                </tr>
                <tr>
                  <td>
                    <code>logoUrl</code>
                  </td>
                  <td>
                    <code>string</code>
                  </td>
                  <td>URL for the team's logo.</td>
                </tr>
                <tr>
                  <td>
                    <code>city</code>
                  </td>
                  <td>
                    <code>string</code>
                  </td>
                  <td>City location of the team's stadium</td>
                </tr>
              </tbody>
            </table>
            <div className='div__row'>
              <p>
                Try it:<span className='bold'>GET</span> /api/v1/teams
              </p>
              <button type='button' onClick={this.setTeamsResponse}>
                Go!
              </button>
              <button type='button' onClick={this.clearTeamsResponse}>
                Clear the field
              </button>
            </div>
            <ReactJson src={this.state.teamsResponse} theme='hopscotch' />
          </div>

          <div className='main__div--border'>
            <h1>GET team by id or full team name  <code>/api/v1/teams/:id</code></h1>
            <h3>Query Parameters</h3>
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
                  <td>
                    <code>id</code>
                  </td>
                  <td>
                    <code>number</code> / <code>string</code>
                  </td>
                  <td>Unique team identifier or full team name</td>
                </tr>
              </tbody>
            </table>

            <h3>Response Parameters</h3>
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
                  <td>
                    <code>id</code>
                  </td>
                  <td>
                    <code>number</code>
                  </td>
                  <td>Unique team identifier.</td>
                </tr>
                <tr>
                  <td>
                    <code>teamname</code>
                  </td>
                  <td>
                    <code>string</code>
                  </td>
                  <td>Full name of MLS team.</td>
                </tr>
                <tr>
                  <td>
                    <code>stadium</code>
                  </td>
                  <td>
                    <code>string</code>
                  </td>
                  <td>Full name of the team's home stadium.</td>
                </tr>
                <tr>
                  <td>
                    <code>logoUrl</code>
                  </td>
                  <td>
                    <code>string</code>
                  </td>
                  <td>URL for the team's logo.</td>
                </tr>
                <tr>
                  <td>
                    <code>city</code>
                  </td>
                  <td>
                    <code>string</code>
                  </td>
                  <td>City location of the team's stadium</td>
                </tr>
              </tbody>
            </table>
            <div className='div__row'>
              <p>
                Try it:<span className='bold'>GET</span> /api/v1/teams/
              </p>
              <input
                className='input__team-id'
                placeholder=':id'
                name='teamNum'
                maxLength='40'
                value={this.state.teamNum}
                onChange={this.handleChange}
              />
              <button type='button' onClick={this.setTeamResponse}>
                Go!
              </button>
              <button type='button' onClick={this.clearTeamResponse}>
                Clear the field
              </button>
            </div>
            <ReactJson src={this.state.teamResponse} theme='hopscotch' />
          </div>

          <div className='main__div--border'>
            <h1>GET all player <code>/api/v1/players</code></h1>
            <h3>Response Parameters</h3>
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
                  <td>
                    <code>id</code>
                  </td>
                  <td>
                    <code>number</code>
                  </td>
                  <td>Unique player identifier.</td>
                </tr>
                <tr>
                  <td>
                    <code>name</code>
                  </td>
                  <td>
                    <code>string</code>
                  </td>
                  <td>Full name of player.</td>
                </tr>
                <tr>
                  <td>
                    <code>nationality</code>
                  </td>
                  <td>
                    <code>string</code>
                  </td>
                  <td>Player's country of origin.</td>
                </tr>
                <tr>
                  <td>
                    <code>photoUrl</code>
                  </td>
                  <td>
                    <code>string</code>
                  </td>
                  <td>URL for the player's image.</td>
                </tr>
                <tr>
                  <td>
                    <code>preferedFoot</code>
                  </td>
                  <td>
                    <code>string</code>
                  </td>
                  <td>Player's dominate foot.</td>
                </tr>
                <tr>
                  <td>
                    <code>age</code>
                  </td>
                  <td>
                    <code>number</code>
                  </td>
                  <td>Player's age in years for the 2019 MLS season.</td>
                </tr>
                <tr>
                  <td>
                    <code>team</code>
                  </td>
                  <td>
                    <code>string</code>
                  </td>
                  <td>Player's team at the end of the 2019 MLS season.</td>
                </tr>
              </tbody>
            </table>
            <div className='div__row'>
              <p>
                Try it:<span className='bold'>GET</span> /api/v1/players
              </p>
              <button type='button' onClick={this.setPlayersResponse}>
                Go!
              </button>
              <button type='button' onClick={this.clearPlayersResponse}>
                Clear the field
              </button>
            </div>
            <ReactJson src={this.state.playersResponse} theme='hopscotch' />
          </div>

          <div className='main__div--border'>
            <h1>GET player by id <code>/api/v1/players/:id</code></h1>
            <h3>Query Parameters</h3>
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
                  <td>
                    <code>id</code>
                  </td>
                  <td>
                    <code>number</code>
                  </td>
                  <td>Unique player identifier.</td>
                </tr>
              </tbody>
            </table>

            <h3>Response</h3>
            <table>
              <thead>
                <tr>
                  <th>Status</th>
                  <th>Response</th>
                </tr>
              </thead>
              <tr>
                <th>200</th>
                <th>Returns a specific player object.</th>
              </tr>
              <tr>
                <th>404</th>
                <th>
                  <code>{`"error": "There is a not player with an id of 1000"`}</code>
                </th>
              </tr>
            </table>

            <h3>Response Parameters</h3>
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
                  <td>
                    <code>id</code>
                  </td>
                  <td>
                    <code>number</code>
                  </td>
                  <td>Unique player identifier.</td>
                </tr>
                <tr>
                  <td>
                    <code>name</code>
                  </td>
                  <td>
                    <code>string</code>
                  </td>
                  <td>Full name of player.</td>
                </tr>
                <tr>
                  <td>
                    <code>nationality</code>
                  </td>
                  <td>
                    <code>string</code>
                  </td>
                  <td>Player's country of origin.</td>
                </tr>
                <tr>
                  <td>
                    <code>photoUrl</code>
                  </td>
                  <td>
                    <code>string</code>
                  </td>
                  <td>URL for the player's image.</td>
                </tr>
                <tr>
                  <td>
                    <code>preferedFoot</code>
                  </td>
                  <td>
                    <code>string</code>
                  </td>
                  <td>Player's dominate foot.</td>
                </tr>
                <tr>
                  <td>
                    <code>age</code>
                  </td>
                  <td>
                    <code>number</code>
                  </td>
                  <td>Player's age in years for the 2019 MLS season.</td>
                </tr>
                <tr>
                  <td>
                    <code>team</code>
                  </td>
                  <td>
                    <code>string</code>
                  </td>
                  <td>Player's team at the end of the 2019 MLS season.</td>
                </tr>
              </tbody>
            </table>

            <div className='div__row'>
              <p>
                Try it:<span className='bold'>GET</span> /api/v1/players/
              </p>
              <input
                className='input__player-id'
                placeholder=':id'
                name='playerNum'
                maxLength='40'
                value={this.state.playerNum}
                onChange={this.handleChange}
              />
              <button type='button' onClick={this.setPlayerResponse}>
                Go!
              </button>
              <button type='button' onClick={this.clearPlayerResponse}>
                Clear the field
              </button>
            </div>
            <ReactJson src={this.state.playerResponse} theme='hopscotch' />
          </div>

          <div className='main__div--border'>
            <h1>GET a teams roster <code>/api/v1/teams/:id/roster</code></h1>
            <h3>Query Parameters</h3>
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
                  <td>
                    <code>id</code>
                  </td>
                  <td>
                    <code>number</code> / <code>string</code>
                  </td>
                  <td>Unique team identifier or full team name</td>
                </tr>
              </tbody>
            </table>

            <h3>Response</h3>
            <table>
              <thead>
                <tr>
                  <th>Status</th>
                  <th>Response</th>
                </tr>
              </thead>
              <tr>
                <th>200</th>
                <th>
                  Returns an array of the player objects associated with a
                  specific team.
                </th>
              </tr>
              <tr>
                <th>404</th>
                <th>
                  <code>
                    {
                      'error: `Requested team: ${id}. There is no record of that team`'
                    }
                  </code>
                </th>
              </tr>
            </table>
            <div className='div__row'>
              <p>
                Try it:<span className='bold'>GET</span> /api/v1/teams/
              </p>
              <input
                className='input__roster-id'
                placeholder=':id'
                name='rosterNum'
                maxLength='40'
                value={this.state.rosterNum}
                onChange={this.handleChange}
              />
              <p>/roster</p>
              <button type='button' onClick={this.setRoster}>
                Go!
              </button>
              <button type='button' onClick={this.clearRoster}>
                Clear the field
              </button>
            </div>
            <ReactJson src={this.state.rosterResponse} theme='hopscotch' />
          </div>

          <div className='main__div--border'>
            <h1>POST Add a team <code>/api/v1/teams</code></h1>
            <h3>Parameters</h3>
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
                  <td>
                    <code>teamname</code>
                  </td>
                  <td>
                    <code>string</code>
                  </td>
                  <td>Full name of MLS team.</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>
                    <code>stadium</code>
                  </td>
                  <td>
                    <code>string</code>
                  </td>
                  <td>Full name of the team's home stadium.</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>
                    <code>logoUrl</code>
                  </td>
                  <td>
                    <code>string</code>
                  </td>
                  <td>URL for the team's logo.</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>
                    <code>city</code>
                  </td>
                  <td>
                    <code>string</code>
                  </td>
                  <td>City location of the team's stadium</td>
                  <td>Yes</td>
                </tr>
              </tbody>
            </table>

            <h3>Response</h3>
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
                    {
                      'error: `Expected format: { teamname: <String>, city: <String>, stadium: <Sring>, logoUrl: <String> }. You\'re missing a "${requiredParameter}" property.` '
                    }
                  </code>
                </th>
              </tr>
            </table>

            <div className='div__row'>
              <p>
                Try it:<span className='bold'>GET</span> /api/v1/teams/
              </p>
              <div className='input-container'>
                <input
                  className='input__teamname multi-input'
                  placeholder='Team Name'
                  name='teamname'
                  value={this.state.teamname}
                  onChange={this.handleChange}
                />
                <input
                  className='input__city multi-input'
                  placeholder='City'
                  name='city'
                  value={this.state.city}
                  onChange={this.handleChange}
                />
                <input
                  className='input__stadium multi-input'
                  placeholder='Stadium'
                  name='stadium'
                  value={this.state.stadium}
                  onChange={this.handleChange}
                />
                <input
                  className='input__logoUrl multi-input'
                  placeholder='URL for team logo'
                  name='logoUrl'
                  maxLength='40'
                  value={this.state.logoUrl}
                  onChange={this.handleChange}
                />
              </div>
              <button type='button' onClick={this.makeTeam}>
                Go!
              </button>
              <button type='button' onClick={this.clearTeam}>
                Clear the field
              </button>
            </div>
            <ReactJson src={this.state.postTeamResponse} theme='hopscotch' />
          </div>

          <div className='main__div--border'>
            <h1>POST Add a player <code>/api/v1/players</code></h1>
            <h2>PLAYERS CAN ONLY BE ADDED TO EXISTING TEAMS</h2>
            <h3>Parameters</h3>
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
                  <td>
                    <code>name</code>
                  </td>
                  <td>
                    <code>string</code>
                  </td>
                  <td>Full name of player.</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>
                    <code>nationality</code>
                  </td>
                  <td>
                    <code>string</code>
                  </td>
                  <td>Player's country of origin.</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>
                    <code>photoUrl</code>
                  </td>
                  <td>
                    <code>string</code>
                  </td>
                  <td>URL for the player's image.</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>
                    <code>preferedFoot</code>
                  </td>
                  <td>
                    <code>string</code>
                  </td>
                  <td>Player's dominate foot.</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>
                    <code>age</code>
                  </td>
                  <td>
                    <code>number</code>
                  </td>
                  <td>Player's age in years for the 2019 MLS season.</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>
                    <code>team</code>
                  </td>
                  <td>
                    <code>string</code>
                  </td>
                  <td>Player's team</td>
                  <td>Yes</td>
                </tr>
              </tbody>
            </table>
            <h3>Response</h3>
            <table>
              <thead>
                <tr>
                  <th>Status</th>
                  <th>Response</th>
                </tr>
              </thead>
              <tr>
                <th>200</th>
                <th>Returns a specific player object.</th>
              </tr>
              <tr>
                <th>404</th>
                <th>
                  <code>
                    {
                      'error: `Expected format: { name: <String>, age: <Int>, photoUrl: <String>, nationality: <String>, preferedFoot: <String>, team: <String>, }. You\'re missing a "${param}" property.`'
                    }
                  </code>
                </th>
              </tr>
            </table>
            <div className='div__row player-post'>
              <p>
                Try it:<span className='bold'>POST</span> /api/v1/players
              </p>
              <p className='options'>Options:</p>
              <div className='input-container'>
                <input
                  className='input__name multi-input'
                  placeholder='Player Name'
                  name='name'
                  value={this.state.name}
                  onChange={this.handleChange}
                />
                <input
                  className='input__nationality multi-input'
                  placeholder='Player Nationality'
                  name='nationality'
                  value={this.state.nationality}
                  onChange={this.handleChange}
                />
                <input
                  className='input__photoUrl multi-input'
                  placeholder='Photo URL'
                  name='photoUrl'
                  value={this.state.photoUrl}
                  onChange={this.handleChange}
                />
                <input
                  className='input__preferedFoot multi-input'
                  placeholder='Prefered Foot'
                  name='preferedFoot'
                  maxLength='40'
                  value={this.state.preferedFoot}
                  onChange={this.handleChange}
                />
                <input
                  className='input__age multi-input'
                  placeholder='Player Age'
                  name='age'
                  maxLength='3'
                  value={this.state.age}
                  onChange={this.handleChange}
                />
                <input
                  className='input__team multi-input'
                  placeholder='Player Team'
                  name='team'
                  maxLength='40'
                  value={this.state.team}
                  onChange={this.handleChange}
                />
              </div>
              <button type='button' onClick={this.makePlayer}>
                Go!
              </button>
              <button type='button' onClick={this.clearPlayer}>
                Clear the field
              </button>
            </div>
            <ReactJson src={this.state.postPlayerResponse} theme='hopscotch' />
          </div>
          <div className='main__div--border'>
            <h2>DELETE a player <code>/api/v1/players</code></h2>
            <h3>Response</h3>
            <table>
              <thead>
                <tr>
                  <th>Status</th>
                  <th>Response</th>
                </tr>
              </thead>
              <tr>
                <th>200</th>
                <th>{'Player ${id} sucessfully deleted.'}</th>
              </tr>
              <tr>
                <th>404</th>
                <th>
                  <code>{'No player with the id of ${id}'}</code>
                </th>
              </tr>
            </table>
            <h3>Response</h3>
            <table>
              <thead>
                <tr>
                  <th>Status</th>
                  <th>Response</th>
                </tr>
              </thead>
              <tr>
                <th>200</th>
                <th>
                  Returns an array of the player objects associated with a
                  specific team.
                </th>
              </tr>
              <tr>
                <th>404</th>
                <th>
                  <code>
                    {
                      'error: `Requested team: ${id}. There is no record of that team`'
                    }
                  </code>
                </th>
              </tr>
            </table>
            <div className='div__row'>
              <p>
                Try it:<span className='bold'>DELETE</span> /api/v1/players/
              </p>
              <input
                className='input__del-player-num-id'
                placeholder=':id'
                name='deletePlayerNum'
                maxLength='4'
                value={this.state.deletePlayerNum}
                onChange={this.handleChange}
              />
              <button type='button' onClick={this.removePlayer}>
                Go!
              </button>
              <button type='button' onClick={this.clearDelete}>
                Clear the field!
              </button>
            </div>
            <ReactJson src={this.state.deletePlayerResponse} theme='hopscotch' />
          </div>
        </main>
      </>
    );
  };
}

export default App;
