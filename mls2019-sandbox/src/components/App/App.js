import React, { Component } from 'react';
import './App.css';
import Nav from '../Nav/Nav';

class App extends Component {
  constructor (props){
    super()
    this.state = {
      teams:[],
      players:[],
      player:{},
      team:{},
      roster:[]
    }
  }
  render = () => {
    return (<>
      <h1>MLS 2019 API Documentation and Sandbox</h1>
      <Nav />
      </>
    )

  };
}

export default App;
