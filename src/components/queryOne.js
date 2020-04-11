import axios from 'axios';
import React from 'react';

export default class QueryOne extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data: {}
        }
    }
        componentDidMount(){
            axios.get('http://anapioficeandfire.com/api/characters/583')
            .then(res => {
                let queryOne = res.data.born;
                this.setState({
                    data:queryOne
                })
            }).catch(error =>{
                console.log(error)
            })
        }
    
    render(){
  return (
    <div>
      <h3>{this.state.data}</h3>
  </div>
)
}
}