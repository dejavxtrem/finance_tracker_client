import React from 'react';
import logo from './logo.svg';
import './App.css';
import SiderDemo from './components/Dashboard/Dashboard';
import CardRowOne from './components/Cardrowone'
//import MyProvider from './MyProvider';



class App extends React.Component {

  state = {
    amazonDetails: {},
    microsoftDetails: {},
    googleDetails: {}
  }
  
  componentDidMount = () => {
  this.getStockData()
  this.getTwitterData()
  this.getGoogleData()
  }
  
// // getAllData = () => {
// //   Promise.all([
// //     fetch('https://cloud.iexapis.com/stable/stock/AMZN/quote?token=pk_f8e567e3a9c048beb52efb088dffe9cf'),
// //     fetch('https://cloud.iexapis.com/stable/stock/GOOGL/quote?token=pk_f8e567e3a9c048beb52efb088dffe9cf')
// //   ])
// //   .then(function (responses) {
// // 		// Get a JSON object from each of the responses
// // 		return responses.map(function (response) {
// // 			return response.json();
// // 		});
// // 	}).then(function (data) {
// // 		// Log the data to the console
// //     // You would do something with both sets of data here
// //      console.log(data);
// //      for (let i = 0; i < data.length; i++) {
// //        console.log(data)
// //          this.setState({amazonDetails: data})
// //         //  this.setState({googleDetails: data[1]})
// //      }
// //   })
// //   .catch(function (error) {
// // 		// if there's an error, log it
// // 		console.log(error);
// // 	});
  
// }


  getStockData = () => {
  fetch('https://cloud.iexapis.com/stable/stock/AMZN/quote?token=pk_f8e567e3a9c048beb52efb088dffe9cf', {
  "method": "GET",
  }).then(data => data.json(), err => console.log(err))
  .then(parsedData => this.setState({amazonDetails: parsedData}), err => console.log('parsedData', err))
  }
  
  getTwitterData = () => {
    fetch('https://cloud.iexapis.com/stable/stock/MSFT/quote?token=pk_f8e567e3a9c048beb52efb088dffe9cf', {
    "method": "GET",
    }).then(data => data.json(), err => console.log(err))
    .then(parsedData => this.setState({microsoftDetails: parsedData}), err => console.log('parsedData', err))
    }
  
    getGoogleData = () => {
      fetch('https://cloud.iexapis.com/stable/stock/GOOGL/quote?token=pk_f8e567e3a9c048beb52efb088dffe9cf', {
      "method": "GET",
      }).then(data => data.json(), err => console.log(err))
      .then(parsedData => this.setState({googleDetails: parsedData}), err => console.log('parsedData', err))
      }

    render () {
      return (
          <SiderDemo stockData={this.state.amazonDetails} microData={this.state.microsoftDetails}  googleData={this.state.googleDetails}/>
      )

    }

  }



  

export default App;
