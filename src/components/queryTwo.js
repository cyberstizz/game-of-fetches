import axios from 'axios';
import React from 'react';

export default class QueryTwo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data: []
          }
    }
    componentDidMount(){
        axios.get("https://www.anapioficeandfire.com/api/houses/378")
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
        <h2>What region is House Targaryen in? <br/><br/>{this.state.data.region}</h2>
  </div>
)
}
}