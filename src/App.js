import React from 'react';
import SiderDemo from './components/Dashboard/Dashboard';
import './App.css';

//import MyProvider from './MyProvider';
let apiKEY = process.env.REACT_APP_IEXCLOUD_API_KEY

let baseURL = process.env.REACT_APP_BASEURL

// if (process.env.NODE_ENV === 'development') {
//   baseURL = 'http://localhost:3000'
// } else {
//   baseURL = process.env.REACT_APP_BASEURL
// }

//console.log('current base URL:', baseURL)


class App extends React.Component {

  state = {
    amazonDetails: {},
    microsoftDetails: {},
    googleDetails: {},
    forexDetails: [...Array(3).fill({...Object})],
    cryptoDetails: [...Array(4).fill({...Object})],
    userData: {  
      firstname: '',
      lastname: '',
      created_at: '',
      updated_at: '',
      bankinginformation: [''],
      creditcards: ['', '', '', ''],
      billexpenses: ['', '', '', '', '', ''],
      user_id: 1

    }
  } 
  
  componentDidMount = () => {
  this.getStockData()
  this.getTwitterData()
  this.getGoogleData()
  this.getForexExchange()
  this.getCrypto()
  this.getApiData(this.state.userData.user_id)
  }
  
 


//API Content
//API BACKEND CALL
getApiData = () => {
  fetch(`${baseURL}/users/1`)
  .then(res => res.json())
  .then(jsonedAccount => this.setState({userData: jsonedAccount}))
  .catch(error => console.error(error))
}


//  handleAddrequest = (userData) => {
//       const newData = [...this.state.userData]
//       newData.unshift(userData)
//       this.setState({

//       })
//  }






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
          <SiderDemo stockData={this.state.amazonDetails} microData={this.state.microsoftDetails}  googleData={this.state.googleDetails} forexData={this.state.forexDetails} cryptoData={this.state.cryptoDetails} userAccountData={this.state.userData} baseURL={baseURL}/>
      )

    }

  }



  

export default App;
