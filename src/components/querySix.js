import axios from 'axios';
import React from 'react';

export default class QuerySix extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          data: []
        }
    }
    componentDidMount(){
      axios.get("https://www.anapioficeandfire.com/api/houses/362")
      .then(res => {
         axios.get(res.data.founder)
      })
      .then(res => {
          let stark = res;
          this.setState({
              data: stark.data.name
          })
        })
          .catch(err => {
            console.log(err)
          })
      }
    
    
    render() {
  return (
    <div>
        <h2>{`What's the name of the founder of House Stark?`} <br/><br/>{this.state.data}</h2>
  </div>
)
}
}