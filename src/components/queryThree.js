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
  return (
    <div>
        <h2>What region is House Targaryen in? <br/><br/>{this.state.data.born}</h2>
  </div>
)
}
}