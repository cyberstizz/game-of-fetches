import axios from 'axios';
import React from 'react';

export default class QueryFour extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          data: []
        }
    }
    componentDidMount(){
      axios.get("https://www.anapioficeandfire.com/api/houses/17")
      .then(res => {
          let answerFour = res.data;
          this.setState({
              data: answerFour.seats[1]
          })
      }).catch(error =>{
          console.log(error)
      })
    }
    
    render(){
  return (
    <div>
        <h2>What is the second seat of House Baratheon? <br/><br/>{this.state.data}</h2>
  </div>
)
}
}