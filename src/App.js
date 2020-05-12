import React from 'react';
import logo from './logo.svg';
import './App.css';
import SiderDemo from './components/Dashboard/Dashboard';
import CardRowOne from './components/Cardrowone'
//import MyProvider from './MyProvider';
let apiKEY = process.env.REACT_APP_IEXCLOUD_API_KEY


class App extends React.Component {

  state = {
    amazonDetails: {},
    microsoftDetails: {},
    googleDetails: {},
    forexDetails: [...Array(3).fill({...Object})],
    cryptoDetails: [...Array(4).fill({...Object})]
  }
  
  componentDidMount = () => {
  this.getStockData()
  this.getTwitterData()
  this.getGoogleData()
  this.getForexExchange()
  this.getCrypto()
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
  fetch(`https://cloud.iexapis.com/stable/stock/AMZN/quote?token=${apiKEY}`, {
  "method": "GET",
  }).then(data => data.json(), err => console.log(err))
  .then(parsedData => this.setState({amazonDetails: parsedData}), err => console.log('parsedData', err))
  }
  
  getTwitterData = () => {
    fetch(`https://cloud.iexapis.com/stable/stock/MSFT/quote?token=${apiKEY}`, {
    "method": "GET",
    }).then(data => data.json(), err => console.log(err))
    .then(parsedData => this.setState({microsoftDetails: parsedData}), err => console.log('parsedData', err))
    }
  
    getGoogleData = () => {
      fetch(`https://cloud.iexapis.com/stable/stock/GOOGL/quote?token=${apiKEY}`, {
      "method": "GET",
      }).then(data => data.json(), err => console.log(err))
      .then(parsedData => this.setState({googleDetails: parsedData}), err => console.log('parsedData', err))
      }


    //Forest API call
    getForexExchange = () => {
      fetch(`https://cloud.iexapis.com/stable/fx/latest?symbols=USDCAD,USDGBP,USDJPY,USDEUR&token=${apiKEY}`, {
        "method": "GET",
        }).then(data => data.json(), err => console.log(err))
        .then(parsedData => this.setState({forexDetails: parsedData}), err => console.log('parsedData', err))    
    }

  //cryptocurrency API call
  getCrypto = () => {
    let btcCall = fetch(`https://cloud.iexapis.com/stable/crypto/BTCUSD/price?token=${apiKEY}`)
    let ethCall = fetch(`https://cloud.iexapis.com/stable/crypto/ETHUSD/price?token=${apiKEY}`)
    let ltcCall = fetch(`https://cloud.iexapis.com/stable/crypto/LTCUSD/price?token=${apiKEY}`)
    let etcCall = fetch(`https://cloud.iexapis.com/stable/crypto/ZECBTC/price?token=${apiKEY}`)
    // let bchCall =  fetch('https://cloud.iexapis.com/stable/crypto/BCHUSD/price?token=pk_f8e567e3a9c048beb52efb088dffe9cf')
    // let xrpCall = fetch('https://cloud.iexapis.com/stable/crypto/XRPTUSD/price?token=pk_f8e567e3a9c048beb52efb088dffe9cf')
    // let etcBtc =  fetch('https://cloud.iexapis.com/stable/crypto/ETHBTC/price?token=pk_f8e567e3a9c048beb52efb088dffe9cf')

    Promise.all([btcCall, ethCall, ltcCall, etcCall])
    .then(values => Promise.all(values.map(value => value.json())))
    .then(finalVals => {
      this.setState({cryptoDetails: finalVals })
      // let firstAPIResp = finalVals[0];
      // let secondAPIResp = finalVals[1];
      // console.log(firstAPIResp)
      // console.log(secondAPIResp)
    });
  }


    render () {
      return (
          <SiderDemo stockData={this.state.amazonDetails} microData={this.state.microsoftDetails}  googleData={this.state.googleDetails} forexData={this.state.forexDetails} cryptoData={this.state.cryptoDetails}/>
      )

    }

  }



  

export default App;
