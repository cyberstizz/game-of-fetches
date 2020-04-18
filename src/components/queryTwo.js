import axios from 'axios';
import React from 'react';

export default class QueryTwo extends React.Component {
    constructor(props){
        super(props)
    }
    
    render(){
  return (
    <div>
        <h2>What region is House Targaryen in? <br/><br/>{this.props.data}</h2>
  </div>
)
}
}