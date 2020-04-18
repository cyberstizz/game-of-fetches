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
        let answerFive = res.data
          this.setState({
              data: answerFive.aliases[1]
          })
      }).catch(error =>{
          console.log(error)
      })
    }
    
    render(){
  return (
    <div>
        <h2>What is Robert Baratheon's second alias? <br/><br/>{this.state.data}</h2>
  </div>
)
}
}