import axios from 'axios';

export default class QueryOne extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            data: {}
        }
    }
        componentDidMount(){
            axios.get()
            .then(res => {
                let queryOne = res.data;
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