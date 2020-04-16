import React from 'react';
import './App.css';
import QueryOne from './components/queryOne'
import axios from 'axios';

export default class App extends React.Component {
constructor(props){
  super(props)
  this.state = {
    data: []
  }
}
componentDidMount(){
  axios.get("https://anapioficeandfire.com/api/characters/16")
  .then(res => {
      this.setState({
          data: res.data
      })
  }).catch(error =>{
      console.log(error)
  })
}
 
    render(){
 return( 
<div>
  <QueryOne data={this.state.data} />
  
      <div><h2>What's the coat of arms of House Lannister?</h2></div>
      <div className='query3'><h2></h2></div>
      <div><h2>What is the second seat of House Baratheon?</h2></div>
      <div className='query4'><h2></h2></div>
      <div><h2>What is Robert Baratheon's second alias?</h2></div>
      <div className='query5'><h2></h2></div>
      <div><h2>What's the name of the founder of House Stark? (You have to chain fetch requests!)</h2></div>
      <div className='query6'><h2></h2></div>
      <div><h2>What are the titles of Catelyn Stark's three POV books?</h2></div>
      <div className='query7'><h2></h2></div>
    </div>

  );
}
}
