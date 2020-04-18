import axios from 'axios';
import React from 'react';

export default class QueryThree extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          data: []
        }
    }
    componentDidMount(){
      axios.get("https://www.anapioficeandfire.com/api/houses/229")
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
        <h2>What's the coat of arms of House Lannister? <br/><br/>{this.state.data.coatOfArms}</h2>
  </div>
)
}
}