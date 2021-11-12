import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Debits extends Component {
    constructor(props){
        super(props);
        this.state = {
            debits: [],
        }
    }
    
    componentDidMount() {
        fetch('https://moj-api.herokuapp.com/debits')
          .then(res => res.json())
          .then(json => {
            this.setState({
                debits: json,
            })
          });
    }

    render() {
      
        var { debits } = this.state;
        
        // let sum = 0;
        // var total = [];
        // total.push(debits.amount);
        // for(let i = 0; i < total.length; i++){
        //     sum = sum + total[i];
        // }

        return (
            <>
            <div>
              <h1>Debits</h1>
              {/* <h1>{sum}</h1> */}
              <div>
                  <ul>
                      {debits.map(item => (
                            <li key={item.id}>
                                {item.date} | {item.description} | ${item.amount}
                            </li>
                      ))}
                  </ul>
              </div>
            </div>
    
            <Link to="/">Return to Home</Link>
            </>  
      );
    }
}

export default Debits;