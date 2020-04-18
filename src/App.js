import React from 'react';
import './App.css';
import QueryOne from './components/queryOne';
import QueryTwo from './components/queryTwo';
import QueryThree from './components/queryThree';
import QueryFour from './components/queryFour'
import QueryFive from './components/queryFive'

import axios from 'axios';

export default class App extends React.Component {
constructor(props){
  super(props)
  this.state = {
    data: []
  }
}
 
    render(){
 return( 
<div>
  <QueryOne />
  <QueryTwo />
  <QueryThree />
  <QueryFour />
  <QueryFive />    
      <div><h2>What's the name of the founder of House Stark? (You have to chain fetch requests!)</h2></div>
      <div className='query6'><h2></h2></div>
      <div><h2>What are the titles of Catelyn Stark's three POV books?</h2></div>
      <div className='query7'><h2></h2></div>
    </div>

  );
}
}
