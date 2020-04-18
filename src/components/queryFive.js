import axios from 'axios';
import React from 'react';

export default class QueryFive extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          data: []
        }
    }
    componentDidMount(){
      axios.get("https://www.anapioficeandfire.com/api/characters/901")
      .then(res => {
          this.setState({
              data: res.data
          })
      }).catch(error =>{
          console.log(error)
      })
    }
    
    render(){
  return (
    <div>
        <h2>What is Robert Baratheon's second alias? <br/><br/>{this.state.data.aliases}</h2>
  </div>
)
}
}