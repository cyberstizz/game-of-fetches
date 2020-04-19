import React from 'react';
import './App.css';
import QueryOne from './components/queryOne';
import QueryTwo from './components/queryTwo';
import QueryThree from './components/queryThree';
import QueryFour from './components/queryFour';
import QueryFive from './components/queryFive';
import QuerySix from './components/querySix';
import QuerySeven from './components/querySeven';

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
  <QuerySix />    
  <QuerySeven />   
    </div>

  );
}
}
