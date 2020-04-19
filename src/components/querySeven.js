import axios from 'axios';
import React from 'react';

export default class QuerySeven extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          data: [],
          moreData: [],
          finalData: []
        }
    }
    componentDidMount(){
     let firstChain = axios.get("https://www.anapioficeandfire.com/api/characters/232")
      .then(res => {
        let books = res.data.povBooks;
          return axios.get(books[0])})
          .then(res =>{
            let finalOne = res.data.name;
          this.setState({
              data: finalOne
          })
      }).catch(error =>{
          console.log(error)
      })

      let secondChain = axios.get("https://www.anapioficeandfire.com/api/characters/232")
      .then(res => {
        let books = res.data.povBooks;
          return axios.get(books[1])})
          .then(res =>{
            let finalTwo = res.data.name;
          this.setState({
            moreData: finalTwo
          })
      }).catch(error =>{
          console.log(error)
      })

      let thirdChain = axios.get("https://www.anapioficeandfire.com/api/characters/232")
      .then(res => {
        let books = res.data.povBooks;
          return axios.get(books[2])})
          .then(res =>{
            let finaThree = res.data.name;
          this.setState({
             finalData: finaThree
          })
      }).catch(error =>{
          console.log(error)
      })
    
    
    }
    
    render(){
      
  return (
    <div>
        <h2>What are the titles of Catelyn Stark's three POV books? <br/><br/>{this.state.data} <br/>{this.state.moreData} <br/>{this.state.finalData}</h2>
  </div>
)
}
}