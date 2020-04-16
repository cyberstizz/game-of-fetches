import axios from 'axios';
import React from 'react';

export default class QueryOne extends React.Component {
    constructor(props){
        super(props)
    }
    
    render(){
  return (
    <div>
        <h2>What region is House Targaryen in? <br/>{this.props.data.born}</h2>
  </div>
)
}
}