import React, { Component } from 'react';
import './App.css';
import FetchDisplay from '../FetchDisplay/FetchDisplay'
import Nav from '../Nav/Nav';
import ReactJson from 'react-json-view';
import {
  getTeams,
  getTeam,
  getPlayers,
  getPlayer,
  getRoster,
} from '../../utils/apiCalls';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      teamsResponse: [],
      playersResponse: [],
      playerResponse: {},
      teamResponse: {},
      rosterResponse: [],
      postPlayerResponse:{},
      postTeamResponse:{},
      deletePlayerResponse:'',
      deleteTeamResponse:''
    };
  }

  setTeamsResponse = async () => {
    console.log('before')
    const teamsResponse = await getTeams()
    console.log('after')
    this.setState({teamsResponse})
  };

  setTeamResponse = async () => {};

  setPlayersResponse = async () => {};

  setPlayerResponse = async () => {};

  setRoster = async () => {};

  clearteamsResponse = () => this.setState({ teamsResponse: [] });

  clearteamResponse = () => this.setState({ teamResponse: {} });

  clearplayersResponse = () => this.setState({ playersResponse: [] });

  clearplayerResponse = () => this.setState({ playerResponse: {} });
  
  clearRoster = () => this.setState({ rosterResponse: [] });

  render = () => {
    return (
      <>
        <h1>MLS 2019 API Documentation and Sandbox</h1>
        <Nav />
        <main>
          <h2>GET /api/v1/teams</h2>
          <h3>Response Parameters</h3>
          <table>
            <thead>
              <tr><th>Name</th><th>Type</th><th>Description</th></tr>
            </thead>
            <tbody>
              <tr><td><code>id</code></td><td><code>number</code></td>
                <td>Unique team identifier.</td>
              </tr>
              <tr>
                <td><code>teamname</code></td>
                <td><code>string</code></td>
                <td>Full name of MLS team.</td>
              </tr>
              <tr>
                <td><code>stadium</code></td>
                <td><code>string</code></td>
                <td>Full name of the team's home stadium.</td>
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
          <p>Try it</p>
          <div>
          <button type='button' onClick={this.setTeamsResponse}>GET /api/v1/teams</button> 
          <button type='button' onClick={this.clearTeamsResponse}>Clear the field</button>
          </div>
          <ReactJson src={this.state.teamsResponse} theme='hopscotch' />

          <h2>GET /api/v1/teams/:id</h2>
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
                  <td><code>id</code></td>
                  <td><code>number</code> / <code>string</code></td>
                  <td>
                    Unique team identifier or full team name 
                  </td>
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

          <FetchDisplay display={this.state.teamResponse} syntaxHighlight={this.syntaxHighlight}/>


          <h2>GET /api/v1/players</h2>
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
          <FetchDisplay display={this.state.playersResponse} syntaxHighlight={this.syntaxHighlight}/>



          <h2>GET /api/v1/players/:id</h2>
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
              <td><code>id</code></td>
              <td><code>number</code></td>
              <td>
                Unique player identifier.
              </td>
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
            <th><code>{`"error": "There is a not player with an id of 1000"`}</code> 
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
                <td><code>id</code></td>
                <td><code>number</code></td>
                <td>Unique player identifier.</td>
              </tr>
              <tr>
                <td><code>name</code></td>
                <td><code>string</code></td>
                <td>Full name of player.</td>
              </tr>
              <tr>
                <td><code>nationality</code></td>
                <td><code>string</code></td>
                <td>Player's country of origin.</td>
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

          <FetchDisplay display={this.state.playerResponse} syntaxHighlight={this.syntaxHighlight}/>


          <h2>GET /api/v1/teams/:id/roster</h2>
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
                <td><code>id</code></td>
                <td><code>number</code> / <code>string</code></td>
                <td>
                  Unique team identifier or full team name 
                </td>
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
              <th>Returns an array of the player objects associated with a specific team.</th>
            </tr>
              <tr>
              <th>404</th>
              <th>
                <code>
                  { "error: `Requested team: ${id}. There is no record of that team`" }
                </code> 
              </th>
            </tr>
          </table>
          <FetchDisplay display={this.state.rosterResponse} syntaxHighlight={this.syntaxHighlight}/>




          <h2>POST/api/v1/teams</h2>
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
                    { 'error: `Expected format: { teamname: <String>, city: <String>, stadium: <Sring>, logoUrl: <String> }. You\'re missing a "${requiredParameter}" property.` '}
                  </code> 
                </th>
              </tr>
            </table>

          <FetchDisplay display={this.state.postTeamResponse} syntaxHighlight={this.syntaxHighlight}/>




          <h2>POST /api/v1/players</h2>
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
                  { 'error: `Expected format: { name: <String>, age: <Int>, photoUrl: <String>, nationality: <String>, preferedFoot: <String>, team: <String>, }. You\'re missing a "${param}" property.`'}
                </code> 
              </th>
            </tr>
          </table>
          <FetchDisplay display={this.state.postPlayerResponse} syntaxHighlight={this.syntaxHighlight}/>

          <h2>DELETE /api/v1/players</h2>
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
              <th><code>{'No player with the id of ${id}'}</code></th>
            </tr>
          </table>
          <FetchDisplay display={this.state.deleteTeamResponse} syntaxHighlight={this.syntaxHighlight}/>
        </main>
      </>
    );
  };
}

export default App;
