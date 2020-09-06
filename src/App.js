import React from 'react';
import axios from 'axios';

class App extends React.Component {
  componentDidMount() {
    this.getStockData();
  }

  getStockData = () => {
    axios.get('../public/StockList.json') // JSON File Path 
      .then( response => { 
        console.log(response)
    }) 
    .catch(function (error) { 
      console.log(error); 
    }); 
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}

export default App;